import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TastingroompopupPage } from './tastingroompopup.page';

const routes: Routes = [
  {
    path: '',
    component: TastingroompopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TastingroompopupPageRoutingModule {}
