import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registerForm: FormGroup;
  nombre = new FormControl([], [Validators.required, Validators.minLength(3), this.validadorPersonalizado()]);
  apellido = new FormControl([], [Validators.required,Validators.minLength(3)]);
  email = new FormControl([], [Validators.email, Validators.required]);
  texto = new FormControl([], Validators.maxLength(50));

  constructor() {
    this.registerForm = new FormGroup({
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
    }
  }

  validadorPersonalizado(): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null =>{
      if (control.value.includes('superman')){
        return {
          validadorPersonal : true
        }
      }
     return null;
    }
  }
}
