import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermosUsoComponent } from '../termos-uso/termos-uso.component';

const routes: Routes = [
    {
        path: 'termos-uso',
        component: TermosUsoComponent
    }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }