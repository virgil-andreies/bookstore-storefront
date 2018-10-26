import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { Http, Headers } from '@angular/http';
import { UserPayment } from '../models/user-payment';
import { UserShipping } from '../models/user-shipping';

@Injectable()
export class ShippingService {
  private serverPath: string = AppConst.serverPath;
  constructor(  private http: Http) { }

  newShipping(  shipping: UserShipping) {
    const url = this.serverPath + '/shipping/add';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(shipping), { headers: tokenHeader});

  }

  getUserShippingList() {
    const url = this.serverPath + '/shipping/getUserShippingList';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: tokenHeader});
  }

  removeShipping(id: number) {
    const url = this.serverPath + '/shipping/remove';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, id, { headers: tokenHeader});
  }

  setDefaultShipping(id: number) {
    const url = this.serverPath + '/shipping/setDefault';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, id, { headers: tokenHeader});
  }
}
