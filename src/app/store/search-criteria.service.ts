import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


export class TodoItemNode {

  children: TodoItemNode[] = [] ;
  item: string ="";
}

export class TodoItemFlatNode {
  item: string ="";
  level: number =0;
  expandable: boolean =false;
}

const TREE_DATA = {

  Availability :{
    'Available' : 'available',
    'Out Of Stock' :'out-of-stock',
    'Incoming' : 'incoming'
  },

};

@Injectable({
  providedIn: 'root'
})
export class SearchCriteriaService {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);
  _searchData:{ [key: string]: any; } =TREE_DATA
  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }
    public set searchData(newVal:{ [key: string]: any; }) {
    this._searchData = newVal
    }

  constructor( ) {
    //TODO send request to get search criteria available in the api
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(this._searchData, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  selectedCriteria (parents:(string | undefined)[] , children:(string | undefined)[]) {
    console.log(parents,children)
    //TODO send api request to query through selected criteria and update product list service

  }


}
