class AutoPause  {
    constructor() {
        this.threshold = 0.25;
        // Pasamos el this a la instancia del objecto usando bind
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }

    run(player) {
        this.player = player;
        /*  Funcion que recibe como PRIMER parametro que hubo una interseccion 
            en el objeto que se esta observando, y el SEGUNDO es un objeto de
            configuracion => detecta que porciento de pantalla se esta observando
        */
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);
    }

    handlerIntersection(entries) {
        const entry = entries[0];
        console.log(entry);

        /*  Verificamos si esta en foco y sino pausamos
            y si si reproducimos
        */
        console.log(entry.isIntersecting);
        if(entry.isIntersecting) {
            this.player.play();
        } else {
            this.player.pause();
        }

    }

}

export default AutoPause;