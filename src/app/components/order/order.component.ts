import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Router, NavigationExtras } from '@angular/router';
import { Book } from '../../models/book';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { ShippingService } from '../../services/shipping.service';
import { PaymentService } from '../../services/payment.service';
import { CheckoutService } from '../../services/checkout.service';
import { ShoppingCart } from '../../models/shopping-cart';
import { BillingAddress } from '../../models/billing-address';
import { ShippingAddress } from '../../models/shipping-address';
import { UserPayment } from '../../models/user-payment';
import { UserBilling } from '../../models/user-billing';
import { UserShipping } from '../../models/user-shipping';
import { Payment } from '../../models/payment';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
