import { Component } from '@angular/core';

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
  
  //Para simular la entrada de una base de datos definimos un array de strings
  entradas: Array<{titulo:string}>

  constructor(){//El constructor serian los strings que recibiria este array
                //de la base de datos

    this.entradas=[

      {titulo:"El maravilloso lenguaje de Java"},
      {titulo:"El excelente lenguaje de html"},
      {titulo:"El peculiar lenguaje de css"},
    ]
  }

  registrarUsuario(){

    this.mensaje ="El usuario " +this.nombre+" "+this.apellido+" ha sido registrado."
    this.registrado=true;

  }
}
