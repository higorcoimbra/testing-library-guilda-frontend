import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermosUsoComponent } from './termos-uso.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TermosUsoComponent],
  imports: [
    CommonModule
  ],
  exports:  [ TermosUsoComponent ]
})
export class TermosUsoModule { }
