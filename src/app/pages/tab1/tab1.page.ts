import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/model/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor( public deseosService: DeseosService, private router: Router, private alertController : AlertController) {

    this.listas = this.deseosService.listas;
  }


  async agregarLista() {


    //this.router.navigateByUrl('tabs/tab1/agregar');

    const alert = await this.alertController.create({

      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Crear',
          handler: (data) => {

            if (data.titulo.length === 0) {
              return;
            }
            this.deseosService.crearLista(data.titulo);

            //this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
            
          }
        }
      ]

      
    });
    
    alert.present();

  }



}
