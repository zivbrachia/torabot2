import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  @Input() colorSetting:string ='color1';
  @Input() presentSet:number = 0.6;
  isSideOpen = false;
  constructor() { }

  sideOpen = (e) => {this.isSideOpen = e; console.log(e)};

}
