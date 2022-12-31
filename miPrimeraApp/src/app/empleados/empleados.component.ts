import { Component } from "@angular/core"; //2º--> Automaticamente se crea el import

@Component({ //3º --> se deben crear manualmente el nombre del tag, el decorador y su html css
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent{ //1º--> se crea el export class

}
