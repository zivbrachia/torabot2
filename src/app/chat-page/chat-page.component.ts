import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  backImg = 'https://s12.postimg.org/9weuz3svx/bkg_img.jpg';

  constructor() { }

  ngOnInit() {
  }

   setBg(e){
    this.backImg = e;
   }
}
