import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {


  @Output()
  /* Emitir evento al padre */
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input() //Puede recibir una property llamada character list
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }]


  onDeleteCharacters(id:string):void{
    //onDelete = Index value: number
    this.onDelete.emit(id);
  }
}
