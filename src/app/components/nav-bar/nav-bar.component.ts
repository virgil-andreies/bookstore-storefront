import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;
  private bookList: Book[] = [];
  private keyword: string;

  constructor(  private loginService: LoginService,
                private bookService: BookService,
                private router: Router ) { }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }

  onSearchByTitle() {
    this.bookService.searchBook(this.keyword).subscribe(
      res => {
        this.bookList = res.json();

        const navigationExtras: NavigationExtras = {
          queryParams: {
            'bookList' : JSON.stringify(this.bookList)
          }
        };

        this.router.navigate(['/bookList'], navigationExtras);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      err => {
        this.loggedIn = false;
      }
    );
  }

}
