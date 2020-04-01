// Boolean
let muted: boolean = true;
muted = false;


// Numeros 
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo: string = `Me llamo ${nombre}`;

/*  Arreglos, los arreglos pueden ser de un solo tipo o de varios,
    en Vanilla JS no debes de especificar de que tipo seran lo que se guarde
*/
let people: string[] = [];
people = ['Insable', 'Asas', 'Miekel'];
people.push('as');

// Le decimos que sera un arreglo de string y que tambien puede haber numeros, esto se lo indicamos con el pipe
let peopleAndNumber: Array<string | number > = [];
peopleAndNumber.push('Chas');
peopleAndNumber.push(1);

// Enum, conjunto de valores a los cuales ya no se le pueden agregar mas valores, tipo tuplas en Python
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

/* Los valores de enum son enumerados, entonces al accesar, 
te da el inidice en donde esta guardado, no el valor como tal, es por eso que se tiene que inicializar
 */
let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any, puede ser cualquier tipo de dato, y puede cambiar de tipo al ser sobreescrito
let comodin: any = "Joker";
comodin = {
    type: 'Wildcard'
}

// Object
let someObject: object = {
    type: 'Wildcard'
}