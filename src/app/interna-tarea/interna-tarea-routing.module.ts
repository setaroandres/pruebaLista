import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternaTareaPage } from './interna-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: InternaTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternaTareaPageRoutingModule {}
