let usuario = "";



class rubro {

    constructor(nombre, peso, cantidad, precio) {
        this.nombre = nombre;
        this.peso = peso;
        this.cantidad = cantidad;
        this.precio = precio;
    }


    valorTotal = () => {
        let a = this.cantidad;
        let b = this.precio;


    }

    escribir() {
        let valorTotal2 = this.cantidad * this.precio;

        document.getElementById('precio').innerHTML = `${this.precio}`;
        document.getElementById('cantidad').innerHTML = `${this.cantidad}`;
        document.getElementById('TotalProducto').innerHTML = `${valorTotal2}`;
        document.getElementById('articulo').innerHTML = `${this.nombre}`;



    }



}



let arroz = new rubro('arroz', 1, 32, 43);
let pasta = new rubro('pasta', 1, 12, 13);
let harina = new rubro('harina', 1, 22, 23);
let lentejas = new rubro('lentejas', 1, 32, 13);

let quesoBlanco = new rubro('quesoBlanco', 12, 12, 143);
let mantequilla = new rubro('mantequilla', 1, 12, 43);
let fiambre = new rubro('fiambre', 14, 11, 73);
let jamonPavo = new rubro('jamon de Pavo', 17, 12, 93);

let chocolate = new rubro('chocolate', 1, 22, 23);
let galletas = new rubro('galletas', 1, 12, 11);
let gomitas = new rubro('gomitas', 1, 14, 8);
let caramelos = new rubro('caramelos', 1, 19, 3);



function clickaction(b) {

    objetoId = b.id;



    switch (b.id) {
        
        //Cereales
        case 'lentejas':
            lentejas.escribir();
            break;

        case 'arroz':
            arroz.escribir();
            break;

        case 'harina':
            harina.escribir();
            break;


        case 'pasta':
            pasta.escribir();
            break;


            //charcuteria

        case 'quesoBlanco':
            quesoBlanco.escribir();
            break;

        case 'mantequilla':
            mantequilla.escribir();
            break;

        case 'fiambre':
            fiambre.escribir();
            break;


        case 'jamonPavo':
            jamonPavo.escribir();
            break;


        default:
            alert("no son lentejas");

            //Chucherias

            case 'chocolate':
            chocolate.escribir();
            break;

        case 'galletas':
            galletas.escribir();
            break;

        case 'gomitas':
            gomitas.escribir();
            break;


        case 'caramelos':
            caramelos.escribir();
            break;


    }
};




// var elemento = document.getElementsByTagName('li')[0].id;