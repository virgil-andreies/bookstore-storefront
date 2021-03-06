import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Routes, ActivatedRoute, Router, Params } from '@angular/router';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private serverPath = AppConst.serverPath;
  private numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private qty: number;

  private addBookSuccess = false;
  private notEnoughStock = false;

  constructor(  private bookService: BookService,
                private router: Router,
                private http: Http,
                private route: ActivatedRoute,
                private cartService: CartService) { }

  onAddToCart() {
    this.cartService.addItem(this.bookId, this.qty).subscribe(
      res => {
        console.log(res.text());
        this.addBookSuccess = true;
      },
      error => {
        console.log(error.text());
        this.notEnoughStock = true;
      }
    );
  }

  ngOnInit() {
    this.route.params.forEach( (params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.bookService.getBook(this.bookId).subscribe(
      res => {
        this.book = res.json();
      },
      error => {
        console.log(error);
      }
    );

    this.qty = 1;
  }

}
