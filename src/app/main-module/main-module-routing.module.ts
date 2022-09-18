import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutComponent } from './mainComponent/about/about.component';
import { HomeComponent } from './mainComponent/home/home.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,
children:[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
