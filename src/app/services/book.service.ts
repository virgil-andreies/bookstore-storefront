import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { AppConst } from '../constants/app-const';

@Injectable()
export class BookService {
  private serverPath: string = AppConst.serverPath;

  constructor( private http: Http) { }

  getBookList() {
    const url = this.serverPath + '/book/bookList';

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: tokenHeader});
  }

  getBook(id: number) {
    const url = this.serverPath + '/book/' + id;

    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: tokenHeader});
  }

  searchBook(keyword: string) {
    const url = this.serverPath + '/book/searchBook';
    console.log(keyword);
    const tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, keyword, { headers: tokenHeader});
  }
}
