import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

/* two way data binding: cambio el template tambien cambia el valor en el controlador  */
/* siempre priorizar one way data binding */
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  /* Getter se ve como una propiedad pero es un método */
  get capitalizedName(): string{
    return this.name.toLocaleUpperCase();
  }

  //Si no hay nada es publico por defecto
  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    //Spiderman
    this.name = 'Spiderman';
  }

  changeAge():void{
    //23
    this.age = 23;
  }

  resetForm():void{
    this.age = 45;
    this.name = 'ironman';
  }

}
