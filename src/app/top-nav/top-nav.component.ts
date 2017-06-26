import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  isSideOpen = false;
  constructor() { }

  sideOpen = (e) => {this.isSideOpen = e; console.log(e)};

}
