import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FotterComponent } from './components/fotter/fotter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { TopbarComponent } from './components/topbar/topbar.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IndexComponent },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, IndexComponent, NavbarComponent, FotterComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class HomeModule { }
