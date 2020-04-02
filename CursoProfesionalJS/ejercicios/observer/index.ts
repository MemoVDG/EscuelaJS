
// Creamos las interfaces
// Observer va a ser quien actualice el elemento, o sea a quien se le notifica que se actualizo un valor
interface Observer {
    update: (data: any) => void;
}

// Subject va a ser el objeto que tiene actualizaciones y los observer se pueden subscribir o no
interface Subject {
    subscribe:  (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

// Bitcon price es el input que sera modificado
class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor () {
        const el:HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }
    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        })
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

// Price class es el texto que se actualiza cuando el bitcoin price se actualiza
class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor() {
        this.el = document.querySelector('#price');
    }
    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => {
    value.unsubscribe(display)
}, 5000)
