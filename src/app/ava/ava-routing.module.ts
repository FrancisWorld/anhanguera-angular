import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaComponent } from './ava.component';
import { Unidade1Component } from './unidade1/unidade1.component';

const routes: Routes = [
  // do a route for the component
  {path: 'unidade1', component: Unidade1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaRoutingModule { }
