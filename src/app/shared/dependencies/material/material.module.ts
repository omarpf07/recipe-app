import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    
  ]
})
export class MaterialModule { }
