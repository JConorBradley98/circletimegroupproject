import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  teachers: (string | string)[] =
    [
      'Jill Smith', 'password123',
      'Joe Bloggs', 'password456'
    ];

  ngOnInit(): void {
    this.loopTeachers(this.teachers);
  }

  loopTeachers(array) {
    for (let index in array) {
      console.log(array[index]);
    }
  }

  //loginToCircleTime(){
  // this.router.navigate('consent')
  //}

}
