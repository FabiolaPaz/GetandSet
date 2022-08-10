class Animal {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    getPeso() {
        return this.peso;
    }

    getAltura() {
        return this.altura;
    }

    setPeso(novoPeso) {
        this.peso = novoPeso;
    }

    setAltura(novaAltura) {
        this.altura = novaAltura;
    }

}