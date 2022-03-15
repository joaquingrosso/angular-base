import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() pjnuevo: Personaje = {
    nombre: '',
    poder: undefined
  };

  //@Output() onNuevoPj: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService ) {}

  agregar(){
    
    if( this.pjnuevo.nombre.trim().length === 0 ){ return; }
    
    //this.onNuevoPj.emit( this.pjnuevo );
    this.dbzService.agregarPersonaje(this.pjnuevo);

    this.pjnuevo = {
      nombre: '',
      poder: 0
    };

  }

}
