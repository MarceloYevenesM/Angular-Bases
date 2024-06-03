import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid' //Cambio el nombre a uuid

import { Character } from '../interfaces/character.interfaces';


//Decorador(Una clase) Injectable le va decir a angular que lo trate como un servicio
@Injectable({ providedIn: 'root' }) /* La propiedad es para un singleton en toda la aplicación(valor como esta en ese mismo momento) */
export class DbzService {

  //Va pasar por referencia en singleton
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  addCharacter(character: Character): void {
    const newCaracter: Character = {
      id: uuid(),
      ...character //Toma todas las propiedades y esparcelas
    }
    this.characters.push(newCaracter)
  }

  //onDeleteCharacter(index: number): void {
  // this.characters.splice(index, 1); //Borrar solo un elemento
  deleteCharacterById(id: string): void {
    /* Si las id son distintas al eliminado la condicion es verdadera y mantiene el elemento */
    this.characters = this.characters.filter(characters => characters.id !== id); /* Filtra todo lo que de falso */
  }

  constructor() { }

}
