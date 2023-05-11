import { hombre } from './hombre_poo';
import { IPersona } from './ipersona_poo';
import { construccion } from "./construccion.poo";
import { mujer } from './mujer_poo';

export class resindencial extends construccion{

private _habitantes: Array<IPersona> = [];

constructor(pisos:number){
    super(pisos)
}

public override impuestos(): number{
    return this.pisos * 1500000;
}

public numero_habitantes(): number{
    return this._habitantes.length;
}

public agregar_habitante(persona: IPersona): void{
    this._habitantes.push(persona)
}

public listar_habitantes(){
    this._habitantes.forEach((persona) => {
        console.log(persona.nombre_completo())
        if (persona instanceof hombre){
            persona.hablar_futbol('Nacional', 30);
            
        }else if (persona instanceof mujer){
            persona.ir_cine('2', 'Te veo');
            
        }
    })
}

}