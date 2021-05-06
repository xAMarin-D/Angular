import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{


    private _personajes:Personaje[] = [
        {
        nombre:'Goku',
        poder: 15000,
      },
      {
        nombre:'Vegeta',
        poder: 9000,
      }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes]
    }

    constructor(){
    }

    //EN EL SERVICE SE PUEDEN INYECTAR OTROS SERVICIOS

    agregarPersonaje( personaG:Personaje ){
        this._personajes.push( personaG );
    }

    





}