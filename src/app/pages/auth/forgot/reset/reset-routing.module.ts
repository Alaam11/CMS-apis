import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResetComponent} from './reset.component';

const routes: Routes = [
  {
    path: '',
    component: ResetComponent,
    data: {
      title: 'Thank You'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetRoutingModule { }
