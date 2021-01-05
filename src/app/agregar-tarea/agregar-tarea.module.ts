import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTareaPageRoutingModule } from './agregar-tarea-routing.module';

import { AgregarTareaPage } from './agregar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTareaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarTareaPage]
})
export class AgregarTareaPageModule {}
