import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsDesafioModule} from "./Forms/reactive-forms-desafio/reactive-forms-desafio.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsDesafioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
