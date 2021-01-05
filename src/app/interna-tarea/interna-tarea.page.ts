import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-interna-tarea',
  templateUrl: './interna-tarea.page.html',
  styleUrls: ['./interna-tarea.page.scss'],
})
export class InternaTareaPage implements OnInit {

  tarea: any;
  titulo: string;
  fechaCreacion: any;
  descripcion: string;
  prioridad: string;
  terminado: string;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,

  ) { 
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    var docRef = this.firebaseService.firestore.collection('ToDoList').doc(id).get()
      .subscribe(data => {

        console.log('Data: from Firestore: ', data )
  
        if(data.exists) {
          console.log(data.data());
          this.tarea = data.data();
        }

        this.titulo = this.tarea['Titulo'];
        this.fechaCreacion = this.tarea['Date'];
        this.descripcion = this.tarea['Descripcion'];
        this.prioridad = this.tarea['Prioridad'];
        this.terminado = this.tarea['Terminado'];
  
      });

  }

}
