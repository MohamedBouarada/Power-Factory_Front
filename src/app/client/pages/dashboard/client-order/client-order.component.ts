import { Component, OnInit } from '@angular/core';
import { IGetOrders, OrderService } from 'src/app/store/order.service';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.scss'],
})
export class ClientOrderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'address', 'total', 'delete', 'edit'];
  dataSource: IGetOrders[] = [];
  constructor(private _orderService: OrderService) {}

  ngOnInit(): void {
    this._orderService.getAll().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (err) => console.log(err),
    });
  }

  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }
}
