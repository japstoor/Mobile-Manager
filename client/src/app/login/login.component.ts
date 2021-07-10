import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  ActivateAddEditRegistrationComp:boolean=false;

  constructor(private formBuilder: FormBuilder,

    private router: Router,
    private service:SharedService) { }
    ModalTitle: string="";
    bran:any;

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.router.navigate(['/brand']);
      
    }
    this.loginForm = this.formBuilder.group({ 
      user_name:['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
   }
   addClick(){
    this.bran={
      user_name:"",
      password:""
    }
    this.ModalTitle="Registration";
    this.ActivateAddEditRegistrationComp=true;

  }
  closeClick(){
    this.ActivateAddEditRegistrationComp=false;
    
  }
   onSubmit(){
     
     if (this.loginForm.invalid) {
      return;
    }

     const loginData = {
      user_name: this.loginForm.controls.user_name.value,
      password: this.loginForm.controls.password.value
    };

    this.service.login(loginData).subscribe((data: any) =>{
      
      this.message = data;
      
     // console.log(data.token);
      if(data.access) {
          localStorage.setItem('token', data.access);
          localStorage.setItem('refresh', data.refresh);
          this.router.navigate(['brand']);
          window.location.reload();
       } else {
         this.invalidLogin = true;
        // alert('a' + data.message);
       }
     });
 
     localStorage.setItem('loginStatus','1');

   }
  }