class AutoPause  {
    constructor() {
        this.threshold = 0.25;
    }

    return(player) {
        this.player = player;
        /*  Funcion que recibe como PRIMER parametro que hubo una interseccion 
            en el objeto que se esta observando, y el SEGUNDO es un objeto de
            configuracion => detecta que porciento de pantalla se esta observando
        */
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });

        observer.observe(player.media);
    }

    handlerIntersection(entries) {
        const entry = entries[0];
        console.log(entry);

        const isVisible = entry.intersactionRatio >= this.threshold

        if(isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

    }

}

export default AutoPause;