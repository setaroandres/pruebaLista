import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

interface TareaData {
  Titulo: string;
  Descripcion: string;
  Prioridad: string;
  //FechaDeCreacion: Date;
  terminado: boolean;
}

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})
export class AgregarTareaPage {

  tareasList = [];
  tareaData: TareaData;
  tareaForm: FormGroup;

  FechaDeCreacion: number = Date.now();
  /*titulo: string;
  desc: string;*/
  prioridad: string;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder,
    public modalCtrl: ModalController
  ) {
    this.tareaData = {} as TareaData;
  }

  ngOnInit() {
    //this.date = new Date();

    this.tareaForm = this.fb.group({
      Titulo: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      //Prioridad: ['', [Validators.required]]
    })
    
  }

  getValue(selectValue) {
    //console.log(selectValue);
    this.prioridad = selectValue
  }

  CrearTarea() {
    console.log("Data form form", this.tareaForm.value);
    //this.firebaseService.crear_item(this.tareaForm.value, this.date, false).then(resp => {
    this.firebaseService.crear_item(this.tareaForm.value.Titulo, this.tareaForm.value.Descripcion, this.prioridad, this.FechaDeCreacion, false).then(resp => {
      this.tareaForm.reset();
    })
      .catch(error => {
        console.log(error);
      });

      this.modalCtrl.dismiss()
  }

}
