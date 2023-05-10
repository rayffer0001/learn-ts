import { IPersona } from "./ipersona_poo";

enum persona{
    nombre = "",
    apellido = "",
    edad = 21,
}

export class hombre implements IPersona{
    nombre: string;
    apellido: string;
    edad: number;
    
    constructor(nombre?: string, apellido?: string){
        this.nombre = persona.nombre ?? "";
        this.apellido = persona.apellido ?? "";
        this.edad = persona.edad;
    }
    
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido 
    }

    hablar_futbol(equipo: string, minutos:number): void {
        console.log(`hablemos sobre el  ${equipo}${minutos} ps esta jugando como los dioses`)
    }

}