import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registerForm: FormGroup;
  nombre = new FormControl([], [Validators.required, Validators.minLength(3)]);
  apellido = new FormControl([], [Validators.required]);
  email = new FormControl([], Validators.email);
  texto = new FormControl([], Validators.maxLength(50));

  constructor( public formBuilder : FormBuilder) {
    this.registerForm = formBuilder.group({
      nombre : this.nombre,
      apellido : this.apellido,
      email : this.email,
      texto : this.texto,
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (
      this.registerForm.valid
    ){
    console.log(this.registerForm.value)
    }else {
      this.registerForm.invalid
    }
  }
}
