import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

 @Input() List : Array<any>;
 @Output() public emitCedula = new EventEmitter();
  constructor() {
   }

  ngOnInit() {
  }

  emitirCedula(cedula){
  /* console.log(this.emitCedula); */
  this.emitCedula.emit(cedula);

  }

}
