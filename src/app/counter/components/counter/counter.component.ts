import { Component } from "@angular/core";

/* Templane sin URL  solo usar la palabra template: `<h1>Hola Counter</h1>`*/
/* Hastas 4 lineas es correcto usar template */
@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
`
})

/* Se debe importar en app.module.ts para usarlo */
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
