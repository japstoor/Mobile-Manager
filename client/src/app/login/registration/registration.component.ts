import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }
  @Input() bran:any;
  user_name:string="";
  first_name:string="";
  password:string="";
  ngOnInit(): void {
    this.user_name=this.bran.user_name;
    this.password=this.bran.password;
  }
  addUser(){
    var val = { user_name:this.user_name,
                password:this.password};
    this.service.registor(val).subscribe(res=>{
      alert("Registration Successful");
      this.router.navigate(['/login']);
    });
  }
}
