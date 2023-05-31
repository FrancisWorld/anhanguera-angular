import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaRoutingModule } from './ava-routing.module';
import { AvaComponent } from './ava.component';
import { Unidade1Component } from './unidade1/unidade1.component';


@NgModule({
  declarations: [
    AvaComponent,
    Unidade1Component
  ],
  imports: [
    CommonModule,
    AvaRoutingModule
  ]
})
export class AvaModule { }
