import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



/** Dependencies */
import { MaterialModule } from './dependencies/material';
import { HeroIconsModule } from './dependencies/heroicons';


import { LayoutComponent } from './components/layout/layout.component';




@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroIconsModule
   
  ], 
  exports: [
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Dependency modules
    MaterialModule,
    HeroIconsModule,
    //Components
    LayoutComponent
  ]
})
export class SharedModule { }
