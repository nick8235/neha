import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiskypicPageRoutingModule } from './whiskypic-routing.module';

import { WhiskypicPage } from './whiskypic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiskypicPageRoutingModule
  ],
  declarations: [WhiskypicPage]
})
export class WhiskypicPageModule {}
