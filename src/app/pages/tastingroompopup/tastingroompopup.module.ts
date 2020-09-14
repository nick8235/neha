import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TastingroompopupPageRoutingModule } from './tastingroompopup-routing.module';

import { TastingroompopupPage } from './tastingroompopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TastingroompopupPageRoutingModule
  ],
  declarations: [TastingroompopupPage]
})
export class TastingroompopupPageModule {}
