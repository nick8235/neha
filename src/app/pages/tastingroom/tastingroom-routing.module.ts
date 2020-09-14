import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TastingroomPage } from './tastingroom.page';

const routes: Routes = [
  {
    path: '',
    component: TastingroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TastingroomPageRoutingModule {}
