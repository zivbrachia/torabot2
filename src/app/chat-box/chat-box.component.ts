import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatManagerService} from '../chat-manager.service';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
    selector: 'app-chat-box',
    templateUrl: './chat-box.component.html',
    styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
    chatList = [];
    lastBg: string;
    user: any;
    replies = [];
    hideBtn:boolean = true;

    @Output() bg = new EventEmitter();
    @Output() setting = new EventEmitter();

    constructor(private chatM: ChatManagerService, private userS: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userS.$cUser.subscribe(
            data => {
                if (!data) {
                    this.router.navigateByUrl('/login');
                } else {
                    this.user = data;
                    this.sendText('היי');
                }
            }
        )
    }

    sendText(text) {
        this.hideBtn = true;
        let massageObj = {
            msg: text,
            user: this.user['name'],
            id: this.user['id']
        }
        this.chatList.push({type: 10, text: text});

        this.chatM.sendText(massageObj).subscribe(
            (data) => {
                data.msg.map(item => {
                    this.chatList.push(item);
                });

                //replies
                data.msg.forEach(item=>{
                    if(item.replies){
                      this.replies = item.replies;
                    }
                });

                if(this.replies.length){
                    this.hideBtn = false;
                }


                if (data.bg) {
                    if (this.lastBg !== data.bg) {
                        this.bg.emit(data.bg);
                    }
                    this.lastBg = data.bg;
                }

                //if setting
                if (data.status) {
                    this.setting.emit({
                        color: data.status.color || null,
                        process: data.status.percent || null,
                        from: data.status.from || null,
                        to: data.status.to || null,
                        book:data.status.book ||null,
                        perek :data.status.perek || null
                    })
                }


                this.scrollToPos();

            },

            (e) => console.log(e)
        );
    }


    scrollToPos = () => {
        setTimeout(() => {
           // let last = <HTMLElement> document.querySelector('.list-loop:last-child');
            let main = <HTMLElement> document.querySelector('.server-res');
                main.scrollTop = main.scrollHeight;

        }, 50);

    }



}