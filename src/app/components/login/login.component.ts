import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserType } from '../../models';
import { AuthService } from '../../index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userLogin;

  loginErrorFlag = false;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.router = router;
    this.authService = authService;
    this.userLogin = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.minLength(4)]],
      userPassword: ['', [Validators.required]]
    });
  }

  users: User[] = [
    { name: 'Jill Smith', email: 'jillsmith02@c2kni.org', password: 'password123', userType: UserType.Teacher },
    { name: 'Joe Bloggs', email: 'joebloggs01@c2kni.org', password: 'password456', userType: UserType.Teacher },
    { name: 'Ollie Owens', email: 'ollieowens04@c2kni.org', password: 'password789', userType: UserType.Pupil },
    { name: 'Mia Murray', email: 'miamurray07@c2kni.org', password: 'password1011', userType: UserType.Pupil },
  ];

  ngOnInit(): void {
    this.authService.reDirect(this.router);

  }

  loginToCircleTime() {
    // If user is in either teacher or user array
    // Accept user -> Store in localStorage -> Navigate to Consent -> Dashboard
    // Else, Decline User -> Show Error Message
    let currentUser = [this.userLogin.get('userEmail').value, this.userLogin.get('userPassword').value];
    for (let index of this.users) {
      if (currentUser[0] === index.email && currentUser[1] === index.password) {
        this.authService.login(index);
        if (index.userType === UserType.Teacher) {
          this.router.navigateByUrl('/circle-time');
        } else {
          this.router.navigateByUrl('/consent');
        }
      } else {
        this.loginErrorFlag = true;
      }
    }
  }

}
