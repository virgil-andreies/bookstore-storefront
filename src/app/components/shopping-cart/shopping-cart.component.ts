import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { CartService } from '../../services/cart.service';
import { ShoppingCart } from '../../models/shopping-cart';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private serVerPath = AppConst.serverPath;
  private selectedBook: Book;
  private carItemList: CartItem[] = [];
  private cartItemNumber: number;
  private shoppingCart: ShoppingCart;
  private cartitemUpdated: boolean;
  private emptyCart: boolean;
  private notEnoughStock: boolean;

  constructor(  private router: Router,
                private cartService: CartService) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/bookDetail', this.selectedBook.id]);
  }

  onRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem.id).subscribe(
      res => {
        console.log(res.text());
        this.getCartItemList();
        this.getShoppingCart();
      },
      error => {
        console.log(error.text());
      }
    );
  }

  onUpdateCartItem(cartItem: CartItem) {
    this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(
      res => {
        console.log(res.text());
        this.cartitemUpdated = true;
        this.getShoppingCart();
      },
      error => {
        console.log(error.text());
      }
    );
  }

  getCartItemList() {
    this.cartService.getCartItemList().subscribe(
      res => {
        this.carItemList = res.json();
        this.cartItemNumber = this.carItemList.length;
      },
      error => {
        console.log(error.text());
      }
    );
  }

  getShoppingCart() {
    this.cartService.getShoppingCart().subscribe(
      res => {
        console.log(res.json());
        this.shoppingCart = res.json();
      },
      error => {
        console.log(error.text());
      }
    );
  }

  onCheckout() {
    if (this.cartItemNumber === 0) {
      this.emptyCart = true;
    } else {
      for (const item of this.carItemList) {
        if (item.qty > item.book.inStockNumber) {
          console.log('Not Enough Stock');
          this.notEnoughStock = true;
          return;
        }
      }

      // this.router.navigate(['/order']);
    }
  }

  ngOnInit() {
    // this.getCartItemList();
    // this.getShoppingCart();
  }

}
