import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { AppConst } from '../constants/app-const';

@Injectable()
export class CartService {
  private serverPath: string = AppConst.serverPath;

  constructor(  private http: Http ) { }

  addItem(id: number, qty: number) {
    const url = this.serverPath + '/cart/add';
    const cartItemInfo = {
      'bookId' : id,
      'qty' : qty
    };

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, cartItemInfo, { headers: tokenHeader});
  }

  getCartItemList() {
    const url = this.serverPath + '/cart/getCartItemList';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: tokenHeader});
  }

  getShoppingCart() {
    const url = this.serverPath + '/cart/getShoppingCart';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: tokenHeader});
  }

  updateCartItem(cartItemId: number, qty: number) {
    const url = this.serverPath + '/cart/updateCartItem';

    const cartItemInfo = {
      'bookId' : cartItemId,
      'qty' : qty
    };

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, cartItemInfo, { headers: tokenHeader});
  }

  removeCartItem(id: number) {
    const url = this.serverPath + '/cart/removeItem';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, id, { headers: tokenHeader});
  }
}
