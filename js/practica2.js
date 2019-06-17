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



    }

   

}



let arroz = new rubro('arroz', 1, 32, 43);
let pasta = new rubro('pasta', 1, 12, 13);
let harina = new rubro('harina', 1, 22, 23);
let lentejas = new rubro('lentejas', 1, 32, 13);



function  clickaction(b) {

    objetoId=b.id;

  

    switch (b.id) {

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


        default:
            alert("no son lentejas");


    }
};




// var elemento = document.getElementsByTagName('li')[0].id;




