interface IPersona{
    readonly name: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
}