import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getmodel() {
    throw new Error('Method not implemented.');
  }
  readonly ApiUrl = "http://127.0.0.1:8000/"
  constructor(private http:HttpClient, private router: Router) { }
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  token:any;
  
  login(loginData:any): Observable<any> { 
    return this.http.post<any>(`${this.ApiUrl}api/token/`, loginData).pipe(
      
      map(result => {
        // login successful if there's a jwt token in the response
        if (result && result.token)
        {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.loginStatus.next(true);
            localStorage.setItem('loginStatus', '1');
            localStorage.setItem('token', result.token);
  
        }
  
        return result;
  
  
      })
  
      );
  }

  getbrandList():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + 'brand/');
  }
 
  getmodelList():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + 'model/');
  }

  addbrand(val:any){
    return this.http.post(this.ApiUrl + 'brand/', val);
  }
  registor(val:any){
    return this.http.post(this.ApiUrl + 'api/user/create/', val);
  }

  updatebrand(val:any){
    return this.http.put(this.ApiUrl + 'brand/', val);
  }

  deletebrand(val:any){
    return this.http.delete(this.ApiUrl + 'brand/'+val);
  }


  addmodel(val:any){
    return this.http.post(this.ApiUrl + 'model/', val);
  }

  updatemodel(val:any){
    return this.http.put(this.ApiUrl + 'model/', val);
  }

  deletemodel(val:any){
    return this.http.delete(this.ApiUrl + 'model/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.ApiUrl+'SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'department/');
  }

  
  logout() 
    {
        // Set Loginstatus to false and delete saved jwt cookie
        this.loginStatus.next(false);
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        localStorage.setItem('loginStatus', '0');
        this.router.navigate(['/']);
        console.log("Logged Out Successfully");

    }

    getUserProfile(){
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.get<any[]>(`${this.ApiUrl}profile`, httpOptions );
    }

    checkLoginStatus() : boolean 
    {
    
          var loginCookie = localStorage.getItem("loginStatus");
      if(loginCookie == "1") 
        {
          
            return (true);
            
        } 
        return false;
       }

       get isLoggesIn() 
       {
           return this.loginStatus.asObservable();
       }
}
