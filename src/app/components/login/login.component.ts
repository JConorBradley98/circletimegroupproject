import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from '../../models';

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

  teachers: Teacher[] =
    [
      {email: 'jillsmith02@c2kni.org', password: 'password123'},
      {email:'joebloggs01@c2kni.org', password:'password456'}
    ];

  ngOnInit(): void {
    localStorage.clear();
    this.populateTeachers(this.teachers);
  }

  populateTeachers(array) {
    for (let index in array) {
      localStorage.setItem('teacher' + index, array[index]);
    }
  }

  loginToCircleTime() {
    //if (this.userLogin.get('userEmail').value === this.teachers[0]) {
    //  this.router.navigateByUrl('/consent')
    //}
    this.router.navigateByUrl('/consent')
  }

}
