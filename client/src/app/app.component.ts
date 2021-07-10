import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobileapp';
  
  constructor(private service:SharedService) { }
  LoginStatus$!: Observable<boolean>
  ngOnInit(): void {
    this.LoginStatus$ = this.service.isLoggesIn;
    var log = localStorage.getItem("loginStatus")
    console.log(Number(log));
  }
}
