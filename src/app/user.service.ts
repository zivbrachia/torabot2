import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  $cUser = new BehaviorSubject(null);
  constructor() { }

  setUser({name,pic,id}){
    this.$cUser.next(
        { name, pic, id }
    );

  }

  getUser =()=> this.$cUser;
}
