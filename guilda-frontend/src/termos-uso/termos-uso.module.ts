import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermosUsoComponent } from './termos-uso.component';
import  { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TermosUsoComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:  [ TermosUsoComponent ]
})
export class TermosUsoModule { }
