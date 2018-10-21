import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private dataFetched = false;
  private loginError: boolean;
  private loggedin: boolean;
  private credential = { 'username' : '', 'password' : '' };

  private user: User = new User();
  private updateSuccess: boolean;
  private newPassword: string;
  private incorrectPassword: boolean;
  private currentPassword: string;

  constructor(  private loginService: LoginService,
                private userService: UserService,
                private router: Router) { }

  onUpdateUserInfo() {
    this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(
      res => {
        console.log(res.text());
        this.updateSuccess = true;
      },
      error => {
        console.log(error.text());
        const errorMessage = error.text();
        if (errorMessage === 'Incorrect current password!') { this.incorrectPassword = true; }
      }
    );
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
        this.dataFetched = true;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedin = true;
      },
      error => {
        this.loggedin = false;
        console.log('inactive session');
        this.router.navigate(['/myAccount']);
      }
    );

    // if (this.loggedin = true) {
      this.getCurrentUser();
    // }

  }


}
