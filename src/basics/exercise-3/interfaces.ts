//Interface: Me sirve para generar la estructura de un objeto o definir un contrato para una clase.
// los atributos solo se pueden poner opcional en las interfaces o inicializarlas en la clase
interface IContrato {

    //Propiedades opcionales 
    salario?: number;
    fechaInicio?: Date;

    //propiedades obligatorias - Deben escribirse en la implementacion
    role: role;

    //Solo se crea la firma de los metodos, quien implemente debe definir su funcionalidad
    //Metodos obligatorios
    pagar(): number;
    suspender(cantidad: number): void;
    //metodos opcionales
    cancelar?(): void;
}

interface IClausula{
    cumplirObjetivos():boolean;

}

interface IClausulaJunior extends IClausula{
    levantarManoTiempo():boolean;
}

interface IClausulaMedium extends IClausula{
    apoyarProcesosCriticos():boolean;
}

interface IClausulaSenior extends IClausula {
    apoyarFormacion():boolean;
}

enum role {
    junior,
    middle,
    senior
}

enum TipoContrato {
    Indefinido,
    TerminoFijo,
}

class ContratoUltraCredit implements IContrato {
    salario?: number;
    role: role;

    //atributos propios
    tipoContrato: TipoContrato;

    constructor() {
        this.tipoContrato = TipoContrato.Indefinido;
        this.role = role.junior;
    }


    pagar(): number {
        return 1000000;
    }
    suspender(cantidad: number): void {
        console.log(`estas suspendido ${cantidad}dias`);
        console.log('Informacion del contrato')
        //?? Nullish coalescing operator - valida que la expresion de la izquierda sea diferente
        //de null o undefined. Si es null o undefined devolvera la expresion de la derecha,
        //de lo contrario retorna el valor de la expresion de la izquieda
        console.log(`tu salario es ${this.salario ?? 1000} `);
        //Validando null, undefined, 0, falso, ''vacio, NaN
        console.log(`tu salario es ${this.salario ? this.salario : 1000} `);
    }

}
//con las clases puedo tener multiples implementaciones
class ContratoGlobal implements IContrato, IClausula {

    salario?: number;
    fechaInicio?: Date;
    role: role;

    constructor() {
        this.role = role.middle;
    }
    cumplirObjetivos(): boolean {
        throw new Error("Method not implemented.");
    }

    pagar(): number {
        return 2000000;
    }
    suspender(cantidad: number): void {
        console.log(`Estas suspendido por ${cantidad} meses`)
    }
    cancelar?(): void {
        console.log('contrato cancelado');
    }

}

//Polimorfismo usando interfaces
//Son dos objetos de diferentes clases (implementaciones) pero de la misma interface
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new ContratoUltraCredit();

const listaContratos = [ contratoJuan, contratoJuana ];

listaContratos.forEach(( contrato:IContrato ) => {

    console.log('================================================================')
    contrato.suspender(3);
    console.log( typeof contrato );

    if (contrato instanceof ContratoUltraCredit){
        console.log(contrato.tipoContrato);
    }else if( contrato instanceof ContratoGlobal ){
        contrato.cancelar!();
    }
    
    console.log('================================================================')

}); 

