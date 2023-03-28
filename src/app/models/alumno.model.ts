export class Alumno {
  public id: number;
  public nombre:string;
  public apellido:string;
  public notaFinal: number;
  public fechaNacimiento: Date;


  constructor(id: number, nombre: string, apellido:string ,notaFinal: number, fechaNacimiento: Date ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.notaFinal = notaFinal;
    this.fechaNacimiento = fechaNacimiento;
  }
}
