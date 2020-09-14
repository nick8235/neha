import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TastingroomPageRoutingModule } from './tastingroom-routing.module';

import { TastingroomPage } from './tastingroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TastingroomPageRoutingModule
  ],
  declarations: [TastingroomPage]
})
export class TastingroomPageModule {}
