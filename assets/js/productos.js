let URLGET = "assets/productos.json";
let Productos;

$.get(URLGET, function (data) {
  Productos = data;
  ordenarcards();
});

/*PRODUCTOS*/

function ordenarcards() {
  let contenedor = document.getElementById("contenedor");

  for (const producto of Productos) {
    const content = `<div class="work__img-arreglos"> <img src="${producto.Img}" alt=""><p class="text-center">${producto.Descripccion}</p><div><a href="https://api.whatsapp.com/send?phone=+51955502473" class="button">S/${producto.Precio} soles</a></div></div>`;
    contenedor.innerHTML += content;
  }

  /*PRODUCTOS DESTACADOS*/

  let contenedor_destacados = document.getElementById("contenedorDestacados");

  for (const producto of Productos) {
    if (producto.Destacado == "true") {
      const content = `<div class="work__img-destacados">
                        <img src="${producto.Img}" alt="">
                        <p class="text-center">${producto.Descripccion}</p>
                        <div><a  href="https://api.whatsapp.com/send?phone=+51955502473" class="button">S/${producto.Precio} soles</a></div>
                    </div>`;
      contenedor_destacados.innerHTML += content;
    }
  }

  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  /*SCROLL WORK*/
  sr.reveal(".work__img", { interval: 200 });
  sr.reveal(".work__img-destacados", { interval: 200 });
  sr.reveal(".work__img-arreglos", { interval: 200 });
}
