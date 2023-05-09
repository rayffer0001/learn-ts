class Moto {
    public llantas: number;
    public motor: number;
    public color: string;
    public peso?: number;

    constructor(peso?: number){
        this.llantas = 2;
        this.motor = 1200;
        this.color = 'negro';
        this.peso = peso;
        this.encender();
    }

    encender(){
        console.log('encendiendo')
    }

    private accelerar(){
        console.log('acelerando')
    }

    frenar(){
        console.log('frenando')
    }
}

let bmw700: Moto = new Moto(500);
console.log(bmw700)
console.log(`bienvenido: tu moto es tiene ${bmw700.llantas} llantas`)
bmw700.frenar();
console.log('------------------------------------')


enum cargo {
    junior = 'junior',
    senior = 'senior',
    architec = 'architec'
}

let empleados: Array< { name:string, cargo:cargo } > = [
    {
        name: 'Rayffer',
        cargo: cargo.junior
    },
    {
        name: 'Yerssey',
        cargo: cargo.senior
    }
]
console.log(empleados);

console.log(empleados.filter( (empleado) => empleado.cargo === cargo.junior))


function filtrar(){
    const juniorMatches = empleados.filter( (empleado) => empleado.cargo === cargo.junior)
    return juniorMatches
    
}


console.log(filtrar());