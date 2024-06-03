import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';


//Decorador(Una clase) Injectable le va decir a angular que lo trate como un servicio
@Injectable({ providedIn: 'root' }) /* La propiedad es para un singleton en toda la aplicación(valor como esta en ese mismo momento) */
export class DbzService {

  //Va pasar por referencia en singleton
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    }, {
      name: 'Goku',
      power: 9500,
    }, {
      name: 'Vegeta',
      power: 7500,
    }
  ];

  onNewCharacter(character: Character): void {
    this.characters = [...this.characters, character];
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1); //Borrar solo un elemento
  }

  constructor() { }

}
