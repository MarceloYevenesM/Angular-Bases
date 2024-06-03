import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',/* Partir con app para que sea uno personalizado */
  templateUrl: 'main-page.component.html'
})

export class MainPageComponente {

  //De tipo del mismo nombre del servicio
  constructor(private dbzService: DbzService) { /* Habilitar en todo el componente del main page la info utilizada en el servicio*/
  /* Debe ser siempre privado para no exponerlo al mundo */
  }

  /* Con esto expongo la info */
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( characters: Character):void{
    this.dbzService.addCharacter(characters);
  }

}
