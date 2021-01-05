import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternaTareaPageRoutingModule } from './interna-tarea-routing.module';

import { InternaTareaPage } from './interna-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternaTareaPageRoutingModule
  ],
  declarations: [InternaTareaPage]
})
export class InternaTareaPageModule {}
