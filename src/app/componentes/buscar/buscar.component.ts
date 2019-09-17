import { Component, OnInit } from '@angular/core';
import { CmcService } from '../../servicios/cmc.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  ListCedu: Array<object>;
  ExistData: boolean;
  constructor( private servicios: CmcService) { }

  ngOnInit() {
  }

  listUsuario(cedula:number) {
    this.servicios.listUsuario(cedula)
      .subscribe((data: Array<object>) => {
          // los [] son para indicar que los datos se envian en forma de array
          this.ListCedu = [ data ];
          if(data){
            this.ExistData = true;
          }
          else{
            this.ExistData = false;
          }
      });
  }

}
