import { comercial } from './comercial.poo';
import { construccion } from './construccion.poo';
import { hombre } from './hombre_poo';
import { IPersona } from './ipersona_poo';
import { mujer } from './mujer_poo';
import { resindencial } from './residencial.poo';

const hombre1: IPersona = new hombre('rayffer', 'rua');
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new hombre('yerssey jara');
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new hombre(undefined, 'ray');
hombre3.edad = 18;
hombre3.nombre_completo();

const mujer1: IPersona = new mujer();
mujer1.edad = 100

const mujer2: IPersona = new mujer();
mujer1.edad = 1000

const mujer3: IPersona = new mujer();
mujer1.edad = 10000

const residencial1 = new resindencial(3);
console.log('impuestos de residencia 1 ', residencial1.impuestos());
residencial1.agregar_habitante(hombre1);
residencial1.agregar_habitante(hombre2);
residencial1.listar_habitantes();

const comercial1 = new comercial(10,20);
console.log('impuestos de comercial 1', comercial1.impuestos());


console.log(`La constructora bienes y buenes hizo ${construccion.edificios_contador()} construcciones`)