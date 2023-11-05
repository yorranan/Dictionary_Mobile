import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWordPageRoutingModule } from './view-word-routing.module';

import { ViewWordPage } from './view-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWordPageRoutingModule
  ],
  declarations: [ViewWordPage]
})
export class ViewWordPageModule {}
