import { Component } from '@angular/core';
import { Formulario } from "./models/formulario"
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/views/formulario.html'
})


export class AppComponent{
  public formulario:Formulario;
  public formularioCookie: Formulario;
  public mostrarEncabezado:boolean;

  // Constructor
  constructor(private _cookieService:CookieService){
    //this.formulario= new Formulario("Eduardo","Arevalo", 1018409095,'1986-10-20',"eduardoarevaloco@gmail.com","ditoaforero");
    this.formulario= new Formulario("","", 0,"","","");
    this.formularioCookie=new Formulario("","", 0,"","","");
  }

  onSubmit() { 
    console.log(this.formulario);
    this._cookieService.putObject("cookie",this.formulario);
    // TODO: Aqui ya se volvio tipo Object, Averiguar como hacer Serializable de TypeScript Class
    console.log("Cookie recuperada:");
    console.log(this._cookieService.getObject("cookie"));
    // TODO: Averiguar como se realiza un angular.copy en angular 2
    this.formularioCookie.igualar(this.formulario);
    console.log("Formulario Cookie:");
    console.log(this.formularioCookie);

  }





}
