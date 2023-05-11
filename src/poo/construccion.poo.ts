export abstract class construccion{
    public static cantidad_edificios: number = 0;
    private _pisos!: number;

    constructor(pisos:number){
        this._pisos = pisos;
        construccion.cantidad_edificios++;
    }

    public impuestos():number{
        return this._pisos * 3000000; 
    }
    //Get y set crean propiedades que son publicas y crear accesibilidad desde afuera
    public get pisos():number{
        return this._pisos;    
    }

    public set pisos(pisos:number){
        this._pisos = pisos;
    }

    public static edificios_contador():number{
        return construccion.cantidad_edificios;
    }

}