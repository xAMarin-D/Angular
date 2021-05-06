import { Component, INJECTOR, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  nuevo:Personaje = {
    nombre: '',
    poder: 0
  }




  constructor( ){  
  }



 /* La data y el manejo de la data debe estar centralizada en un archivo especializado para ello
 en este caso será en la carpeta services - desde esta se llamaran los endpoints
 de las API Rest */

/* Para hacer debbugs en las APP se puede poner el console log,
 poner la palabra debugger para que haga un breakpoint a modo de prueba 
 en el navegador o hacer el breakpoint manual
*/

}
