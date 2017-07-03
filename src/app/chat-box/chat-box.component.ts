import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatManagerService} from '../chat-manager.service';

@Component({
    selector: 'app-chat-box',
    templateUrl: './chat-box.component.html',
    styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
    chatList = [];
    lastBg:string;

    @Output() bg = new EventEmitter();
    @Output() setting = new EventEmitter();
    constructor(private chatM: ChatManagerService) {
    }

    sendText(text) {
        this.chatList.push({type: 10 , text: text});
        this.chatM.sendText(text).subscribe(
            (data) => {
                data.msg.map(item => {
                    this.chatList.push(item);
                });
                let elem = document.querySelector('.chat-btns:not(.hide)');
                if ( elem && elem.className ) { elem.className += ' hide'; }
                this.scrollToPos();

                if ( data.bg ) {
                    if(this.lastBg !== data.bg){
                        this.bg.emit(data.bg);
                    }
                    this.lastBg = data.bg;
                }

                //if setting
                if(data.status){
                    this.setting.emit({color:data.status.color || null ,process:data.status.percent || null})
                }
            },
            (e) => console.log(e)
        );
    }


    scrollToPos = () => {
        setTimeout(() => {
            let last = <HTMLElement> document.querySelector('.list-loop:last-child');
            let main = <HTMLElement> document.querySelector('.server-res');

            main.scrollTop = last.offsetTop;
        }, 750);

    }


    hideBtns = (e) => {
        let elem = document.querySelector(`.pos-${e}`);
        elem.className += ' hide';
    }
}