import { Injectable } from '@angular/core';
import { IProduct } from './product.service';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface IBucket {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IGetOrders {
  id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  address: string;
  price: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _bucket: IBucket[] = [];

  private _bucketListSubject = new BehaviorSubject<IBucket[]>(this._bucket);

  get bucketListSubject() {
    return this._bucketListSubject;
  }

  emitBucketListChange() {
    this.bucketListSubject.next(this.bucket);
  }

  get bucket() {
    return this._bucket;
  }

  set bucket(val: IBucket[]) {
    this._bucket = val;
  }
  constructor(private http: HttpClient) {
    //this.emitBucketListChange()
  }

  add(product: IProduct, quantity: number) {
    this._bucket.push({
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price,
      total: product.price * quantity,
    });
    this.emitBucketListChange();
  }

  remove(element: IBucket) {
    if (this.bucket.includes(element)) {
      this.bucket = this.bucket.filter(
        (elt, index) =>
          elt.id != element.id || index != this.bucket.indexOf(element)
      );
    }
    this.emitBucketListChange();
  }

  checkout(address: string, products: IBucket[]) {
    const orderProduct = products.map((element) => {
      return {
        id: element.id,
        quantity: element.quantity,
      };
    });
    const body = {
      address,
      products: orderProduct,
    };
    return this.http.post(environment.apiBaseUrl + '/order', body);
  }

  getAll() {
    return this.http.get<IGetOrders[]>(environment.apiBaseUrl + '/order', {
      headers: {
        'admin-flag': 'true',
      },
    });
  }
  getAllByUser() {
    return this.http.get<IGetOrders[]>(environment.apiBaseUrl + '/order/user/');
  }
}
