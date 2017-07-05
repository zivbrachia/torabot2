import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {UserService} from "../user.service";

declare var Fingerprint2:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Object = {};
  pic = ['user_fish','user_yael','user_owl','user_bunny','user_lizzard']

  constructor(private userService:UserService , private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    new Fingerprint2().get((result, components)=>{
      // console.log(result); //a hash, representing your device fingerprint
      // console.log(components); // an array of FP components
      let newUser ={
        name:this.user['name'],
        pic:this.user['pic'],
        id:result
      }
      this.userService.setUser(newUser)
      this.router.navigateByUrl('/chat');
    })
  }

}
