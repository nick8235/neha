import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'my-flight',
    loadChildren: () => import('./pages/my-flight/my-flight.module').then( m => m.MyFlightPageModule)
  },
  {
    path: 'highlight',
    loadChildren: () => import('./pages/highlight/highlight.module').then( m => m.HighlightPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'whiskypic',
    loadChildren: () => import('./pages/whiskypic/whiskypic.module').then( m => m.WhiskypicPageModule)
  },
  {
    path: 'productpage',
    loadChildren: () => import('./pages/productpage/productpage.module').then( m => m.ProductpagePageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./pages/productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./pages/purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'tastingroom',
    loadChildren: () => import('./pages/tastingroom/tastingroom.module').then( m => m.TastingroomPageModule)
  },
  {
    path: 'tastingroompopup',
    loadChildren: () => import('./pages/tastingroompopup/tastingroompopup.module').then( m => m.TastingroompopupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
