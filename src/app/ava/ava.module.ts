import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaRoutingModule } from './ava-routing.module';
import { AvaComponent } from './ava.component';


@NgModule({
  declarations: [
    AvaComponent
  ],
  imports: [
    CommonModule,
    AvaRoutingModule
  ]
})
export class AvaModule { }
