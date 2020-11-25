import { Injectable } from '@angular/core';
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

  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

