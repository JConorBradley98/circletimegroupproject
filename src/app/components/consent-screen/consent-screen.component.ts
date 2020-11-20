import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent-screen',
  templateUrl: './consent-screen.component.html',
  styleUrls: ['./consent-screen.component.sass']
})
export class ConsentScreenComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  loginToCircleTime() {
     this.router.navigateByUrl('/circle-time')
   }

}
