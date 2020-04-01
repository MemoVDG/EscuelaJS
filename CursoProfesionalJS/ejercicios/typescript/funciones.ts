// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(1, 3);

/*  Funciones que regresan funciones
    "(number) => number" eso inidica que la funcion regresa una funcion
*/
function adder(a: number): (number) => number {
    return function(b: number){
        return b + a;
    }
} 

const addFour = adder(4);
const addPlus = adder(6);

/*  Funcion con parametros opcionales
    "lastName?: string" -> indica que el valor puede ser opcional y sino llega se pasa como undefined
    "lastName: string = "Smith"" -> indica que el valor puede ser opcional y se le da un valor por defecto
*/
function fullName(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`;
}


const richard = fullName("Richar");

console.log(richard);