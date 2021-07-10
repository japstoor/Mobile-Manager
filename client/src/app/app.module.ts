import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { ShowBrandComponent } from './brand/show-brand/show-brand.component';
import { AddEditBrandComponent } from './brand/add-edit-brand/add-edit-brand.component';
import { ModelComponent } from './model/model.component';
import { ShowModelComponent } from './model/show-model/show-model.component';
import { AddEditModelComponent } from './model/add-edit-model/add-edit-model.component';
import {SharedService} from './shared.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AuthInterceptor } from './auth/authguard.interceptor';
import { AuthGuard } from './auth/authguard.guard';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ShowBrandComponent,
    AddEditBrandComponent,
    ModelComponent,
    ShowModelComponent,
    AddEditModelComponent,
    LoginComponent,
    RegistrationComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [SharedService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[AddEditBrandComponent]
})
export class AppModule { }
