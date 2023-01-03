import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Registro de usuario';
  nombre:string="";
  apellido:string="";
  mensaje:string="";
  registrado:boolean=false;

  registrarUsuario(){

    this.mensaje ="El usuario " +this.nombre+" "+this.apellido+" ha sido registrado."
    this.registrado=true;

  }
}
