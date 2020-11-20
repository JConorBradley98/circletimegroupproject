import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-time',
  templateUrl: './circle-time.component.html',
  styleUrls: ['./circle-time.component.sass']
})
export class CircleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

  }
}
