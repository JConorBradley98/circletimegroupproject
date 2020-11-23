import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-circle-time',
  templateUrl: './circle-time.component.html',
  styleUrls: ['./circle-time.component.sass']
})
export class CircleTimeComponent implements OnInit {

  images = [
    "../../../assets/teddy.png"
  ];

  constructor() { }

  ngOnInit(): void {
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

