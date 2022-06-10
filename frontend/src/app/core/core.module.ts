import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponent],
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  providers: [],
})
export class CoreModule { }
