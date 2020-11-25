import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthService } from '../../index'
import { Router } from '@angular/router';
@Component({
  selector: 'app-circle-time',
  templateUrl: './circle-time.component.html',
  styleUrls: ['./circle-time.component.sass']
})
export class CircleTimeComponent implements OnInit {

  images = [
    "../../../assets/teddy.png",
    "../../../assets/pillow_blue.png",
    "../../../assets/pillow_green.png",
    "../../../assets/pillow_magenta.png",
    "../../../assets/pillow_purple.png",
    "../../../assets/pillow_red.png",
    "../../../assets/pillow_turquoise.png",
    "../../../assets/pillow_yellow.png",
    "../../../assets/handup.png",
    "../../../assets/ellipse.png"
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.reDirect(this.router);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  dragItem(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dropItem(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

  }
}

