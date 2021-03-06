import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BurgerComponent } from './burger/burger.component';
import { SideComponent } from './side/side.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {ChatManagerService} from "./chat-manager.service";
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {UserService} from "./user.service";
import {CarouselModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    BurgerComponent,
    SideComponent,
    ChatBoxComponent,
    ChatPageComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [ChatManagerService ,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
