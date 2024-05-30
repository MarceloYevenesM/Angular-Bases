import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component";

//Decorador que permite modularizar mis componentes
@NgModule({
  declarations: [
    CounterComponent
  ],
  /* Decirle al mundo que puede consumir este modulo en app.module.ts debe configurarse tambien*/
  exports:[
    CounterComponent
  ]
})



export class CounterModule{

}
