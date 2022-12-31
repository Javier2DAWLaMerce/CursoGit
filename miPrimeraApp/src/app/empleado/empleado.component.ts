import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = "Juan";
  apellido = "Diaz";
  edad = 18;
  empresa ="Píldoras Informáticas";

  activarBoton = false;
  trabajadorAutorizado=false;
  registro="Sin usuarios registrados.";
  sexo="No hay usuarios registrados";


  introducirEmpresa(value: String) {

  }
  autorizarTrabajador(){
    this.trabajadorAutorizado=true;
  }
  registrOk(){
    //alert("Usuario registrado correctamente");
  this.registro="El usuario se acaba de registrar.";
  }
  /*getEdad(){
    return this.edad;
  }
  */
 sexoUsuario(event:Event){
  if((<HTMLInputElement>event.target).value=="hombre"){
    this.sexo="El usuario es un hombre";
  }else{
    this.sexo="El usuario es una mujer.";
  }
  

 }
}
