import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './mainComponent/home/home.component';
import { AboutComponent } from './mainComponent/about/about.component';
import { HeaderComponent } from './mainComponent/header/header.component';
import { FooterComponent } from './mainComponent/footer/footer.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
