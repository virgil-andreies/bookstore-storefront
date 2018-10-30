import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { Http, Headers } from '@angular/http';
import { Order } from '../models/order';

@Injectable()
export class OrderService {
  private serverPath: string = AppConst.serverPath;
  constructor(  private http: Http) { }

  getOrderList() {
    const url = this.serverPath + '/order/getOrderList';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: tokenHeader});
  }

}
