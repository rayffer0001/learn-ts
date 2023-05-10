export abstract class construccion{
    public static cantidad_edificios: number = 0;
    private pisos!: number;

    constructor(pisos:number){
        construccion.cantidad_edificios++;
        //falta llamar pisos
    }


    public impuestos():number{
        return this.pisos * 3000000; 
    }
    
    // public get_pisos():number{

    // }

    // public set_pisos():number{

    // }

    // public static edificios_contador():number{

    // }

}