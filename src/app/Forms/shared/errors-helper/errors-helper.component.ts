import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-errors-helper',
  templateUrl: './errors-helper.component.html',
  styleUrls: ['./errors-helper.component.css']
})
export class ErrorsHelperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  formErrors: any;

}
