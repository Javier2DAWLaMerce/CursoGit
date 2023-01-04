//Creamos la clase empleado

export class Empleado{

    //con sus atributos
    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;

    //y su constructor
    constructor(nombre:string, apellido:string, cargo:string, salario:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
        
    }
   
}