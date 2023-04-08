import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorsHelperModule} from "../shared/errors-helper/errors-helper.module";



@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsHelperModule
  ],
  exports:[
    ReactiveFormsComponent
  ]
})
export class ReactiveFormsDesafioModule { }
