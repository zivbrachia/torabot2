import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  @Input() isActive;
  constructor() {

  }
}
