import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  /* Vamos a emitir un evento al padre */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter(): void {

    //debugger; Se para al ejecucion aca
    if (this.character.name.length === 0) return;

    //Emito algo de tipo personaje
    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0};

  }
}
