import { IPersona } from "./ipersona_poo";


export class hombre implements IPersona{
    nombre: string;
    apellido: string;
    edad!: number;
    
    constructor(nombre?: string, apellido?: string){
        this.nombre = nombre ?? "";
        this.apellido = apellido ?? "";
    }
    
    nombre_completo(): string {
        return this.nombre + ' ' + this.apellido 
    }

    hablar_futbol(equipo: string, minutos:number): void {
        console.log(`hablemos sobre el  ${equipo}${minutos} ps esta jugando como los dioses`)
    }

}