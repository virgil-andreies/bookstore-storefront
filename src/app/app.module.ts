import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTabsModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { DataTableModule } from 'angular2-datatable';
import { routing } from './app.routing';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';
import { ShippingService } from './services/shipping.service';
import { BookService } from './services/book.service';

import { DataFilterPipe } from './components/book-list/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    BookListComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  providers: [LoginService, UserService, PaymentService, ShippingService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
