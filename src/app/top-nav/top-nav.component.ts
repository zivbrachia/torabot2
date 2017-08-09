import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit{

  user:any;

  @Input() colorSetting:string ='color1';
  @Input() presentSet:number = 0;
  @Input () bookSetting:Object;

  isSideOpen = false;
  constructor(private userS:UserService) { }

  ngOnInit(){
    this.userS.$cUser.subscribe(
        data => this.user = data ,
        error => console.log('error ',error)
    )
  }

  sideOpen = (e) => {this.isSideOpen = e; console.log(e)};

}
