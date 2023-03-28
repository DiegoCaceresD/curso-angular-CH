import { Component, OnInit } from '@angular/core';
import {Alumno} from "../models/alumno.model";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public showLista:boolean = false
  constructor() {
  }

  ngOnInit(): void {
  }

  public alumnos: Alumno [] = [
    new Alumno(1,'Pepe', 'Gonzalez', 5, new Date('1986-05-12')),
    new Alumno(2,'Juan', 'Rodriguez',8, new Date('1995-06-20')),
    new Alumno(3,'Pedro', 'Suarez',10, new Date('1993-02-14') ),
    new Alumno(4,'Pancho', 'Hernandez',6, new Date('1994-04-18')),
    new Alumno(5,'Miguel', 'Lopez',4, new Date('1998-05-23')),
    new Alumno(6,'Alex', 'Sanchez',3, new Date('1989-07-10')),
    new Alumno(7,'Jose', 'Gomez',8, new Date('1991-11-5')),
    new Alumno(8,'Luis', 'Fernandez',7, new Date('1988-10-10')),
    new Alumno(9,'Francisco', 'Rugeles',5, new Date('1999-04-9')),
    new Alumno(10,'Andres', 'Acevedo',9, new Date('1996-03-12')),
  ];

  mostrarLista() {
    this.showLista = !this.showLista
  }


}
