import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserType } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  userLogin = new FormGroup(
    {
      userEmail: new FormControl(
        [Validators.required, Validators.minLength(4)]
      ),
      userPassword: new FormControl(
        Validators.required
      )
    }
  );

  users: User[] = [
    { email: 'jillsmith02@c2kni.org', password: 'password123', userType: UserType.Teacher },
    { email: 'joebloggs01@c2kni.org', password: 'password456', userType: UserType.Teacher },
    { email: 'ollieowens04@c2kni.org', password: 'password789', userType: UserType.Pupil },
    { email: 'miamurray07@c2kni.org', password: 'password1011', userType: UserType.Pupil },
  ];



  ngOnInit(): void {
    // Clear localStorage to prevent navigation
    localStorage.clear();

  }

  authenticateUser() {

  }


  loginToCircleTime() {
    // If user is in either teacher or user array
    // Accept user -> Store in localStorage -> Navigate to Consent -> Dashboard
    // Else, Decline User -> Show Error Message
    this.router.navigateByUrl('/consent');
  }

}
