import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelComponent} from './model/model.component';
import {BrandComponent} from './brand/brand.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/authguard.guard';


const routes: Routes = [
{path:'model', component:ModelComponent,canActivate:[AuthGuard]},
{path:'brand', component:BrandComponent,canActivate:[AuthGuard]},
{path:'', component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
