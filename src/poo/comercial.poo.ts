import { construccion } from "./construccion.poo";

export class comercial extends construccion {
    private _cantidad_ingresos!: number;
    private _empleados: number;


    public get cantidad_ingresos(): number {
        return this._cantidad_ingresos;
    }
    public set cantidad_ingresos(cantidad_ingresos: number) {
        this._cantidad_ingresos = cantidad_ingresos;
    }
    


    constructor(pisos: number, empleados: number){
        super(pisos)
        this._empleados = empleados;
    }

    public cantidad_empleados(): number {
        return this._empleados
    }

    


}