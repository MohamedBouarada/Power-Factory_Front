import { Component, OnInit } from '@angular/core';
import {IUser} from "../user.service";
import {CourseService, ICourse} from "../../course.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";





@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.scss']
})
export class AdminCourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'delete', 'edit'];
  dataSource:ICourse[]=[];
  isAddFormVisible=false
  CourseFormControl=new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  });
  files ?:FileList ;

  constructor(private _courseService:CourseService , private  toastr:ToastrService) { }

  ngOnInit(): void {
    this._courseService.getAllCourses().subscribe({
      next: data =>{
        this.dataSource = data.data
      },
      error : err => console.log(err)
    })
  }
  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }

  setAddFormVisible(val:boolean) {
      this.isAddFormVisible = val
  }

  onSubmit(){
    const formData = new FormData();
    if(!this.files) {
      this.toastr.warning('no photos selected')
    }
    Array.from(this.files).forEach(file => {
      formData.append('files' , file)
    })

    for(let key in this.CourseFormControl.value) {
      formData.append(key,this.CourseFormControl.value[key])
    }
    this._courseService.addCourse(formData).subscribe({
      next : data=> {
        this.toastr.success('course added successfully')
        this.CourseFormControl.reset()
        this._courseService.getAllCourses().subscribe({
          next: data =>{
            this.dataSource = data.data
          },
          error : err => console.log(err)
        })
      },
      error : err => this.toastr.error(err.error.message)
    })

  }

  onFileSelected(event: Event) {
    const input =  event.target as HTMLInputElement
    const file: FileList = input.files
    if(file && file.length>0) {
      this.files = file
    }
  }
}
