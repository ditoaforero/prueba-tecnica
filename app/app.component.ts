import { Component } from '@angular/core';
import { Formulario } from "./models/formulario"


@Component({
  selector: 'my-app',
  templateUrl: 'app/views/formulario.html'
})


export class AppComponent{
  public formulario:Formulario;


  // Constructor
  constructor(){
    this.formulario= new Formulario("Eduardo","Arevalo", 1018409095,'1986-10-20',"eduardoarevaloco@gmail.com","ditoaforero");
  }


  onSubmit() { 
    
    alert(this.formulario);
  }

}
