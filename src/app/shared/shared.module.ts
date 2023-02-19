import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



/** Dependencies */
import { MaterialModule } from './dependencies/material';


import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';




@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
   
  ], 
  exports: [
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Dependency modules
    MaterialModule,
    //Components
    LayoutComponent
  ]
})
export class SharedModule { }
