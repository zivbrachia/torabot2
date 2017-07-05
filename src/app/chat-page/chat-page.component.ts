import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  backImg = 'https://s12.postimg.org/9weuz3svx/bkg_img.jpg';
  color:string = 'color2';
  progress:number =0;
  bookStatus:object ={
      from:'',
      to:'',
      book:'',
      perek:''
  };

  constructor() { }

  ngOnInit() {
  }

   setBg(e){
    this.backImg = e;
   }

    setNewSetting(e){
       this.color = e.color ? e.color : this.color ;
       this.progress = e.process ? e.process : this.progress;
        this.bookStatus = {
            from: e.from ? e.from : this.bookStatus['from'],
            to: e.to ? e.to : this.bookStatus['to'],
            book:e.book ? e.book : this.bookStatus['book'],
            perek:e.perek ? e.perek : this.bookStatus['perek']
        }

    }
}
