import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

    heroes:string[] = ["Spiderman","Ironman","Hulk","Thor","Capitan America"];
    heroeBorrado:string = ' ';

    borrarHeroe(){
      console.log('Borrando..')
      //this.heroes.length = this.heroes.length -1; //Esto borra el ultimo elemento del array
      this.heroeBorrado = this.heroes.shift() || '';

    }




}
