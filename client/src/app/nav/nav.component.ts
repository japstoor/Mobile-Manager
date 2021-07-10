import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token: any;
  users: any;
  constructor(private service:SharedService,private router : Router) { }
  LoginStatus$!: Observable<boolean>;
  
  ngOnInit(): void {
    this.service.isLoggesIn
    this.LoginStatus$ = this.service.isLoggesIn;
    console.log(this.LoginStatus$);
    this.service.getUserProfile()
    .subscribe( (data : any) => {
        this.users = data;
    });
  }
  logOut(){
       
    this.service.logout();
}
}
