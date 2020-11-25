import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserType } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userDetails: User) {
    if (userDetails.userType === UserType.Pupil) {
      localStorage.setItem('ACCESS_TOKEN', "access_token_pupil");
    } else if (userDetails.userType === UserType.Teacher) {
      localStorage.setItem('ACCESS_TOKEN', "access_token_teacher");
    }
    localStorage.setItem('USER_NAME', userDetails.name)

  }

  public isLoggedIn() {
    if (localStorage.getItem('ACCESS_TOKEN') !== null && localStorage.getItem('USER_NAME') !== null) {
      return true;
    } else {
      return false;
    }

  }

  public reDirect(router: Router) {
    if (this.isLoggedIn() === true) {
      router.navigateByUrl('/circle-time');
    }
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_NAME');
  }

}

