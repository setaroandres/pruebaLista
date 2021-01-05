import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AgregarTareaPage } from '../agregar-tarea/agregar-tarea.page';

interface TareaData {
  Titulo: string;
  Descripcion: string;
  Prioridad: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tareasList = [];
  tareaData: TareaData;
  tareaForm: FormGroup;

  prioridadEdit: string;
  editTerminado: boolean;
  Terminado: boolean;
  order: string = 'Date';
  cond: string   = 'asc';

  filtrarPrioridad: string;

  filtradoEstado: boolean = false;
  filtradoPriori: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder,
    public modalController: ModalController
  ) {
    this.tareaData = {} as TareaData;
    
  }

  ngOnInit() {

    this.firebaseService.leer_items(this.order,this.cond).subscribe(data => {

      console.log('Data: from Firestore: ', data )

      this.tareasList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Titulo: e.payload.doc.data()['Titulo'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Prioridad: e.payload.doc.data()['Prioridad'],
          FechaDeCreacion: e.payload.doc.data()['Date'],
          Terminado: e.payload.doc.data()['Terminado'],

        };


      })

    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarTareaPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  RemoverTarea(rowID) {
    this.firebaseService.borrar_item(rowID);
  }

  EditarTarea(record) {
    record.isEdit = true;
    record.EditTitulo = record.Titulo;
    record.EditDesc = record.Descripcion;
    record.prioridadEdit = record.Prioridad;
    record.editTerminado = record.Terminado;
  }

  ActualizarTarea(recordRow) {
    let record = {};
    record['Titulo'] = recordRow.EditTitulo;
    record['Descripcion'] = recordRow.EditDesc;
    record['Prioridad'] = recordRow.prioridadEdit;
    record['Terminado'] = recordRow.editTerminado;

    this.firebaseService.actualizar_item(recordRow.id, record);
    recordRow.isEdit = false;
  }

  getValue(selectValue) {
    this.prioridadEdit = selectValue;
  }

  getValueTerminado(terminadoValue) {
    this.editTerminado = terminadoValue;
  }

  getFiltroPrioridad(selectValue) {
    this.filtrarPrioridad = selectValue;
    console.log(this.filtrarPrioridad);
  }

  orderByEstado(order,cond) {
    this.firebaseService.ordenar_estado(order,cond).subscribe(data => {

      this.tareasList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Titulo: e.payload.doc.data()['Titulo'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Prioridad: e.payload.doc.data()['Prioridad'],
          FechaDeCreacion: e.payload.doc.data()['Date'],
          Terminado: e.payload.doc.data()['Terminado'],
        };
      })

    });
  }

  filterBy(item, cond, proc) {
    if(proc == 'estado')
    {
      this.filtradoEstado = true;
    }
    else {
      this.filtradoPriori = true;
    } 

    this.firebaseService.filterByFcn(item, cond).subscribe(data => {
      

      this.tareasList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Titulo: e.payload.doc.data()['Titulo'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Prioridad: e.payload.doc.data()['Prioridad'],
          FechaDeCreacion: e.payload.doc.data()['Date'],
          Terminado: e.payload.doc.data()['Terminado'],
        };
      })

    });
  }

  removeFilter(order,cond, proc) {

    if(proc == 'estado')
    {
      this.filtradoEstado = false;
    }
    else {
      this.filtradoPriori = false;
    } 

    this.firebaseService.remover(order,cond).subscribe(data => {

      this.tareasList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Titulo: e.payload.doc.data()['Titulo'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Prioridad: e.payload.doc.data()['Prioridad'],
          FechaDeCreacion: e.payload.doc.data()['Date'],
          Terminado: e.payload.doc.data()['Terminado'],
        };
      })

    });
  }

}
