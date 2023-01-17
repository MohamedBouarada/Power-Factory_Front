import { Component, OnInit } from '@angular/core';
import {IUser} from "../user.service";
import {CourseService, ICourse} from "../../course.service";





@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.scss']
})
export class AdminCourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'delete', 'edit'];
  dataSource:ICourse[]=[];
  constructor(private _courseService:CourseService) { }

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
}
