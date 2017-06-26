/**
 * Created by yanai on 21/06/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ChatPageComponent} from './chat-page/chat-page.component';

const routes: Routes = [
    { path: 'chat', component: ChatPageComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: ChatPageComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
