enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde'
}

/*  Las interfaces definine la forma exacta que debe tener un objecto, y se pueden
    ocupar como tipos para declarar variables
*/

interface Rectangulo {
    ancho: number
    alto: number
    // La interfaz puede tener parametros opcionales
    color?: Color
}

/*  Como color es opcional no hay problema si al declararlo se le pasa o no
 */
let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color? `Un rectangulo ${this.color}` : 'Un rectangulo';
}