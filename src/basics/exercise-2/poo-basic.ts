class Auto {
    //Atributos o propiedades de la clase
    color: string = 'negro';//inicializar directamente - Evitar realizar esto, no es buena practica
    puertas: number;//se pueden inicializar en el constructor
    marca?: string;//se pueden marcar como opcionales


    //constructor: encargado de hacer las inicializaciones de la clase - Metodo que se ejecuta al realizar una instacia de la clase
    constructor(marca?:string){
        this.puertas = 4;//Con this, accesdo a todas las propiedades y metodos de la clase
        this.marca = marca;
    }

    //Metodos de la clase
    accelerar(){
        console.log('acelerando');
    }

    frenar (){
        console.log('frenando');
    }

    prender(){
        console.log('prendiendo');
    }
}

let ferrari: Auto = new Auto();//instacia de la clase Auto - Objeto

console.log(ferrari);
console.log(ferrari.marca);
ferrari.marca = 'Ferrari';
console.log(ferrari.marca);
console.log(ferrari);

let lambo = new Auto('Lamborghini');
console.log(lambo);
lambo.puertas = 2;
lambo.color = 'Exotico';
console.log(lambo);




//En Typescript hay otra forma de crear otra clase
class Auto2{
    //primer clase de encapsulamiento - PUBLICO
    color: string = 'Negro';//forma inplicita - por defecto es publico
    public puertas: number;//Forma explicita para colocar una propiedad publica


    //En el constructor puedo crear propiedades de la clase
    //Si y solo si tienen el modificador de accesso (Puclic, private, protected
    
    //Los parametros que son opcionales, siempre deben ir al final de cualquier metodo o funcion)
    //En este caso el constructor es un metodo
    constructor(public peso:number, public marca?:string){ // Los parametros opcionales siempre debe ir al final
        this.puertas = 4;
        this.encender();
    }

    apagar(){
        console.log('apagando');
    }
    private encender(){
        console.log(`Bienvenido ${this.marca}, tu color es ${this.color},tu peso es: ${this.peso} y tienes ${this.puertas}`);
    }
}

let ford = new Auto2(500, 'Ford');
console.log(ford)
ford.apagar();