import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados : Empleado[]=[

    new Empleado("Javier","Orduña","Presidente",100000),
    new Empleado("Elisabet","Farrés","Presidenta",100000),
    new Empleado("Eula","Orduña","Comilona",80000),
    new Empleado("Noelle","Farrés","Dormilona",80000),
  ]
}
