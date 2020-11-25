import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../index'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  logoutOfCircleTime(){
    this.authService.logout(this.router);
  }


}
