import { Empleado } from "./empleado";
import { EmpleadoPorHora } from "./empleado_hora";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { tipoEmpleado } from "./tipo_empleado.enum";

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'yhoan',
    123,
    1500000
);
empleadoTiempoCompleto.mostrarInformacion();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`);

//cast
console.log(
    'Cast 1', (empleadoTiempoCompleto as EmpleadoTiempoCompleto ).salarioMensual
);

console.log(
    'Cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto ).salarioMensual
);

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto){
    console.log(empleadoTiempoCompleto.salarioMensual);
}


console.log('================================================================')

const empleadoPorHora: Empleado = new EmpleadoPorHora(
    'Rayffer',
    456,
    tipoEmpleado.POR_HORA,
    100000000000,
    5
);
empleadoPorHora.mostrarInformacion();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`);

