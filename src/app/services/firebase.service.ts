// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'ToDoList';

  constructor(
    public firestore: AngularFirestore
  ) { }

  crear_item(Titulo, Descripcion, Prioridad, Date, Terminado) {
    return this.firestore.collection(this.collectionName).add({
      Titulo, Descripcion, Prioridad, Date, Terminado });
  }

  leer_items(order, cond) {
    console.log(order + ' ' + cond);
    return this.firestore.collection(this.collectionName, ref => ref.orderBy(order, cond)).snapshotChanges();
  }

  leer_item(id, cond) {
    return this.firestore.collection(this.collectionName, ref => ref.where(id, "==", cond)).snapshotChanges();
  }

  actualizar_item(item_id, item) {
    this.firestore.doc(this.collectionName + '/' + item_id).update(item);
  }

  borrar_item(item_id) {
    this.firestore.doc(this.collectionName + '/' + item_id).delete();
  }

  ordenar_estado(order, cond) {
   return this.firestore.collection(this.collectionName, ref => ref.orderBy(order, cond)).snapshotChanges();
  }

  filterByFcn(item, cond) {
    return this.firestore.collection(this.collectionName, ref => ref.where(item, "==", cond)).snapshotChanges();
  }

  remover(order, cond) {
    return this.firestore.collection(this.collectionName, ref => ref.orderBy(order, cond)).snapshotChanges();
   }
}
