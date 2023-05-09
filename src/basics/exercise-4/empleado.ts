/**
 * Clases abstractas en Typescript es una clase de la que no se puede crear instancias
 * (No se puede crear objetos)solo puede ser heredad
 * Y que puede contener propiedades o metodos abstractos que deben ser implementados 
 * en la subclase(Interface). Tambien puede tener metodos o propiedades que tengan ya una implementacion
 * y los cuales seran heredadeos por la subclase. (Herencia). Tambien se puede
 * sobreescribir los metodos y se pueden marcar con la palabra reservada OVERRIDE.
 * Ademas permite el uso de modificadores de acceso.
 * 
 */

export abstract class Empleado{

    abstract tipoEmpleado: string;
    
    constructor( public nombre: string, public id: number ){
    }

    public mostrarInformacion():void{
        console.log(`Nombre: ${this.nombre}, ID: ${this.id}`);
    }
    //Quien use la clase debe implementar
    public abstract calcularSalario():number;//una firma de un metodo
}