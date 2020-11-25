import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app';

@Component({
  selector: 'app-consent-screen',
  templateUrl: './consent-screen.component.html',
  styleUrls: ['./consent-screen.component.sass']
})
export class ConsentScreenComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.reDirect(this.router);
  }

  loginToCircleTime() {
    this.router.navigateByUrl('/circle-time')
  }

}
