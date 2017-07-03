import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  backImg = 'https://s12.postimg.org/9weuz3svx/bkg_img.jpg';
  color:string = 'color3';
  progress:number =.15;

  constructor() { }

  ngOnInit() {
  }

   setBg(e){
    this.backImg = e;
   }

    setNewSetting(e){
       this.color = e.color ? e.color : this.color ;
       this.progress = e.process ? e.process : this.progress;
    }
}
