import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/model/lista.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor( public deseosService: DeseosService ) {

    this.listas = this.deseosService.listas;
  }



}
