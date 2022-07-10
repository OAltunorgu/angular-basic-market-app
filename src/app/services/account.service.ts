import { AlertifyService } from './alertify.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  constructor(
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == 'admin' && user.password == '123') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      this.router.navigate(['/']);
      return true;
    } else {
      this.router.navigate(['/login']);
      this.alertifyService.warning('Kullanıcı Adınız veya Şifreniz Yanlış!');
      user.userName = '';
      user.password = '';
      return false;
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
