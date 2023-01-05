import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] = [

    new Empleado("Javier", "Orduña", "Presidente", 100000),
    new Empleado("Elisabet", "Farrés", "Presidenta", 100000),
    new Empleado("Eula", "Orduña", "Comilona", 80000),
    new Empleado("Noelle", "Farrés", "Dormilona", 80000),
  ];
  //Recogemos del formulario los datos que el usuario introduzca
  formularioNombre: string = "";
  formularioApellido: string = "";
  formularioCargo: string = "";
  formularioSalario: number = 0;

  agregarEmpleado() {//Con la función que invoca el botón del formulario introducimos los datos en un nuevo empleado
    let nuevoEmpleado = new Empleado(this.formularioNombre, this.formularioApellido, this.formularioCargo, this.formularioSalario);
    //Agregamos al objeto empleados un nuevo empleado con la función push()
    this.empleados.push(nuevoEmpleado)
  }

}
