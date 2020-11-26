import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../index'
import { Router } from '@angular/router';
import { Pillow } from 'src/app/models';
@Component({
  selector: 'app-circle-time',
  templateUrl: './circle-time.component.html',
  styleUrls: ['./circle-time.component.sass']
})
export class CircleTimeComponent implements OnInit {

  personSpeaking;
  localUser;

  pillows : Pillow[] = [
    {image: "../../../assets/pillow_blue.png", name: "Harry Styles"},
    {image: "../../../assets/pillow_green.png", name: "Amy Smyth"},
    {image: "../../../assets/pillow_magenta.png", name: "Aleks Stanek"},
    {image: "../../../assets/pillow_purple.png", name: "Sofie Ludwig"},
    {image: "../../../assets/pillow_red.png", name: "Mateusz Molga"},
    {image: "../../../assets/pillow_turquoise.png", name: " "}
  ];

  images = [
    "../../../assets/handup.png",
    "../../../assets/teddy.png",
    "../../../assets/ellipse.png"
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.reDirect(this.router);
    this.personSpeaking = 'Jill Smith';
    this.pillows[5].name = localStorage.getItem('USER_NAME');
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  dragItem(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dropItem(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    let parentElement = document.getElementById(data).parentElement;
    this.personSpeaking = this.pillows[parentElement.id].name;
  }

  userTypeCheck() {
    if (localStorage.getItem('ACCESS_TOKEN') === 'access_token_pupil') {
      return true;
    } else {
      return false;
    }
  }

}

