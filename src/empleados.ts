class Empleado {
  nombre: string;
  apellido: string;
  salario: number;
  fechaContratacion: Date;

  constructor(nombre: string, apellido: string, salario: number, fechaContratacion: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
    this.fechaContratacion = fechaContratacion;
  }

  calcularSalarioAnual(): number {
    return this.salario * 12;
  }

  obtenerAntiguedad(): number {
    const fechaActual: Date = new Date();
    const diferenciaMilisegundos: number = fechaActual.getTime() - this.fechaContratacion.getTime();
    const antiguedadAnios: number = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365));
    return antiguedadAnios;
  }

  aumentarSalario(porcentaje: number): void {
    const incremento: number = (this.salario * porcentaje) / 100;
    this.salario += incremento;
  }
}

// Prueba de la clase Empleado
const empleado1: Empleado = new Empleado("Walter", "White", 5000, new Date(2019, 0, 1));

console.log("Salario anual de empleado1:", empleado1.calcularSalarioAnual());
console.log("Antigüedad de empleado1:", empleado1.obtenerAntiguedad());

empleado1.aumentarSalario(15);
console.log("Nuevo salario mensual de empleado1:", empleado1.salario);
