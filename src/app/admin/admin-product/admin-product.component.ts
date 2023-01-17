import { Component, OnInit } from '@angular/core';
import {IProduct, IStoreData, ProductService} from "../../store/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'delete', 'edit'];
  dataSource: IProduct[] = []
  ProductFormControl = new FormGroup({
    name: new FormControl('') ,
    description : new FormControl(''),
    brand : new FormControl(''),
    price : new FormControl(''),
    availability : new FormControl(''),
    number: new FormControl(''),


  })

  files ?:FileList ;
  constructor(private _productService:ProductService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this._productService.getAllData().subscribe({
      next:value => {
        this.dataSource=value.data
      }
    })
  }
  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }

  onFileSelected(event:Event) {
    const input =  event.target as HTMLInputElement
    const file: FileList = input.files
    if(file && file.length>0) {
      this.files = file
    }
    //console.log(file)
  }
  onSubmit() {
   // console.log(this.ProductFormControl.value)
    const formData = new FormData();
    if(!this.files) {
      this.toastr.warning('no photos selected')
    }
    Array.from(this.files).forEach(file => {
      formData.append('files' , file)
    })

    for(let key in this.ProductFormControl.value) {
      formData.append(key,this.ProductFormControl.value[key])
    }
    this._productService.addProduct(formData).subscribe({
      next : data=> {
        this.toastr.success('Product added')
        this.ProductFormControl.reset()
      },
      error : err => {
        console.log(err)
        this.toastr.error(err.error.message)
      }
    })
    console.log(formData)

  }
}
