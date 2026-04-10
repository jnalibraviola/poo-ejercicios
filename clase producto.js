class producto{
    constructor(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;

    }

    mostrarprecio(){
        console.log("el producto " + this.nombre + " tiene un valor de " + this.precio + " de pesos")

    }

}

const producto1 = new producto("queso cremoso","4000");
producto1.mostrarprecio();