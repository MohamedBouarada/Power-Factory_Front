import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  delete: string;
  edit: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, delete: 'H', edit: true },
  { position: 2, name: 'Helium', weight: 4.0026, delete: 'He', edit: true },
  { position: 3, name: 'Lithium', weight: 6.941, delete: 'Li', edit: true },
  { position: 4, name: 'Beryllium', weight: 9.0122, delete: 'Be', edit: true },
  { position: 5, name: 'Boron', weight: 10.811, delete: 'B', edit: true },
  { position: 6, name: 'Carbon', weight: 12.0107, delete: 'C', edit: true },
  { position: 7, name: 'Nitrogen', weight: 14.0067, delete: 'N', edit: true },
  { position: 8, name: 'Oxygen', weight: 15.9994, delete: 'O', edit: true },
  { position: 9, name: 'Fluorine', weight: 18.9984, delete: 'F', edit: true },
  { position: 10, name: 'Neon', weight: 20.1797, delete: 'Ne', edit: true },
];

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss'],
})
export class AdminClientComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'delete', 'edit'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }
}
