import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  isActive = false;
  @Output() isActiveEmit = new EventEmitter ;
  constructor() { }

  toggelBurger = () => {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.isActiveEmit.emit(true);
    }else {
      this.isActiveEmit.emit(false);
    }
  }

}
