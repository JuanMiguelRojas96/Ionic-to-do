import { Injectable } from '@angular/core';
import { Lista } from '../model/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();
  }

  crearLista( titulo: string ) {

    const nuevaLista = new Lista(titulo);

    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  
  }

  guardarStorage() {

    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    const data = localStorage.getItem('data');
    if (data) {
      this.listas = JSON.parse(data);
    } else {
      this.listas = [];
    }
  }




}
