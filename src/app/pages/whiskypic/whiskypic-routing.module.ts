import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiskypicPage } from './whiskypic.page';

const routes: Routes = [
  {
    path: '',
    component: WhiskypicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiskypicPageRoutingModule {}
