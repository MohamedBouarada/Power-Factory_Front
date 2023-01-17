import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from "@angular/cdk/tree";
import {SelectionModel} from "@angular/cdk/collections";
import {SearchCriteriaService, TodoItemFlatNode, TodoItemNode} from "../search-criteria.service";
import {IOrderOptions, IStoreData, oderSortEnum, orderCriteriaEnum, ProductService} from "../product.service";


@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {


  orderBy : orderCriteriaEnum[] = [orderCriteriaEnum.PRICE ,orderCriteriaEnum.NAME,orderCriteriaEnum.BRAND]

  storeData:IStoreData |undefined
  storeDataOrder?:IOrderOptions
  isASC =  oderSortEnum.ASC
  isOpenedCart=false;

  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
 // newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor( private _searchService:SearchCriteriaService , private _productService:ProductService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _searchService.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
   //this._productService.getAllData()
   this.storeData= this._productService.storeData
    this.storeDataOrder = this._productService.order
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item ? existingNode : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TodoItemFlatNode): void {
    let parent: TodoItemFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TodoItemFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }





  ngOnInit(): void {
   // this._productService.getAllData()
    //this.storeData = this._productService.storeData
    this.getAllStoreData()
  }

  click(){

    const parents = this.checklistSelection.selected.map((element)=> this.getParentNode(element)?.item)
    const children = this.checklistSelection.selected.map((element)=>element.item)
   // console.log(this.getParentNode(this.checklistSelection.selected[0]))
    this._searchService.selectedCriteria(parents,children)

  }

  handleSelectChange(value:orderCriteriaEnum) {
   // console.log(value)
    this._productService.handleOrderCriteriaChange(value);
    this.getAllStoreData()
  }

  handlePrevPage(){
    this._productService.handlePreviousPage()
    this.getAllStoreData()
  }

  handleNextPage(){
    this._productService.handleNextPage(this.storeData!.numberOfPages)
    this.getAllStoreData()
  }

  handleSortASCChange(){
    this._productService.handleSortOrderChange(oderSortEnum.ASC)
    this.getAllStoreData()
  }
  handleSortDESCChange(){
    this._productService.handleSortOrderChange(oderSortEnum.DESC)
    this.getAllStoreData()
  }

  getAllStoreData() {
    this._productService.getAllData().subscribe({
      next: data => {
        this.storeData = data
        this.storeDataOrder = this._productService.order
        //console.log(data)
      } ,
      error: err => console.log(err)
    })


  }


  openCart() {
    this.isOpenedCart = true
  }
}
