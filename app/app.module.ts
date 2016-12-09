import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  providers:    [ CookieService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
