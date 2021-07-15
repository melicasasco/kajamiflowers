let URLGET = "assets/productos.json"
let Productos  ;

$.get(URLGET, function (data) {
  Productos = data
  ordenarcards()
})

/*PRODUCTOS*/

function ordenarcards(){

        let contenedor = document.getElementById("contenedor")


                for (const producto of Productos)   {
                        const content = `<div> <div class="work__img-arreglos"> <img src="${producto.Img}" alt=""><p class="text-center">${producto.Descripccion}</p><div><a href="https://api.whatsapp.com/send?phone=+51955502473" class="button">S/${producto.Precio} soles</a></div></div></div>`  
                contenedor.innerHTML += content;
                }

/*PRODUCTOS DESTACADOS*/

        let contenedor_destacados = document.getElementById("contenedorDestacados")

                for (const producto of Productos)   {
                    if(producto.Destacado == "true"){
                        const content = `<div class="work__img-destacados">
                        <img src="${producto.Img}" alt="">
                        <p class="text-center">${producto.Descripccion}</p>
                        <div><a  href="https://api.whatsapp.com/send?phone=+51955502473" class="button">S/${producto.Precio} soles</a></div>
                    </div>`  
                contenedor_destacados.innerHTML += content;
                }
                }

}