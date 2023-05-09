//Solo se puede heredar de una sola clase

class Animal {
    color!: string;
    especie!: string;
    peso!: number;
    tamanio!: string;

    constructor() {
        console.log('creando un animal');
    }

    alimentarse(): void {
        console.log('Alimentandome');
    }
}

//La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {
    constructor() {
        super();
        console.log('creando un gato a partir de animal')
        
    }
}