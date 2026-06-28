const productos = [
  {
    nombre: "Funda para Volante",
    description: "Funda de cuero sintético para volante, universal.",
    categoria: "Accesorios",
    marca: "AutoStyle",
    talle: ["S", "M", "L"],
    precio: 8000,
    web: "https://www.autostyle.com.ar",
    imagen: "auto.png",
  },
  {
    nombre: "Perfumador de Auto",
    description: "Perfumador con aroma a cedro, duración 60 días.",
    categoria: "Accesorios",
    marca: "AutoStyle",
    talle: ["s/talle"],
    precio: 3500,
    web: "https://www.autostyle.com.ar",
    imagen: "auto.png",
  },
  {
    nombre: "Silla para Bebé",
    description: "Silla para bebé homologada, apta de 0 a 18kg.",
    categoria: "Seguridad",
    marca: "SafeDrive",
    talle: ["s/talle"],
    precio: 45000,
    web: "https://www.safedrive.com.ar",
    imagen: "auto.png",
  },
  {
    nombre: "Alarma para Auto",
    description: "Alarma con sensor de movimiento y control remoto.",
    categoria: "Seguridad",
    marca: "SafeDrive",
    talle: ["s/talle"],
    precio: 22000,
    web: "https://www.safedrive.com.ar",
    imagen: "auto.png",
  },
  {
    nombre: "Cámara de Reversa",
    description: "Cámara de reversa con visión nocturna, 170° de ángulo.",
    categoria: "Tecnología",
    marca: "TechCar",
    talle: ["s/talle"],
    precio: 18000,
    web: "https://www.techcar.com.ar",
    imagen: "auto.png",
  },
  {
    nombre: "Kit de Limpieza",
    description: "Kit completo de limpieza interior y exterior para autos.",
    categoria: "Mantenimiento",
    marca: "AutoStyle",
    talle: ["s/talle"],
    precio: 6500,
    web: "https://www.autostyle.com.ar",
    imagen: "auto.png",
  },
];

let mostrarDetalle = (id) => {
  document.getElementById("detalle").style.display = "block";
  document.getElementById("titulo-prod").innerText = productos[id].nombre;
  document.getElementById("descr-prod").innerText = productos[id].description;
  document.getElementById("precio-prod").innerText = formatPrice(productos[id].precio);
};

let cerrarModal = () => {
  document.getElementById("detalle").style.display = "none";
};

let mostrarCatalogo = (prod = productos) => {
  let contenido = "";

  prod.forEach((prod, id) => {
    contenido += `<div>
        <img src="images/${prod.imagen}" alt="${prod.nombre}" />
        <h3>${prod.nombre}</h3>
        <p>${formatPrice(prod.precio)}</p>
        <button type="button" onclick="mostrarDetalle(${id})">Ver Detalle</button>
        <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
      </div>`;
  });

  document.getElementById("catalogo").innerHTML = contenido;
};

let agregarAlCarrito = (id) => {
  let listadoProductos;
  const listaInicial = JSON.parse(localStorage.getItem("carrito"));

  if (listaInicial == null) {
    listadoProductos = [];
  } else {
    listadoProductos = listaInicial;
  }

  listadoProductos.push(id);
  localStorage.setItem("carrito", JSON.stringify(listadoProductos));
  contarProductos();
};

let mostrarCarrito = () => {
  let contenido = "";
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  let total = 0;

  if (carrito != null) {
    const listProd = [];
    const listCant = [];

    carrito.forEach((num) => {
      if (!listProd.includes(num)) {
        listProd.push(num);
        listCant.push(1);
      } else {
        const inx = listProd.indexOf(num);
        listCant[inx] += 1;
      }
    });

    listProd.forEach((num, id) => {
      contenido += `<div>
        <h3>${productos[num].nombre}</h3>
        <p>${formatPrice(productos[num].precio)}</p>
        <p>Cantidad: ${listCant[id]}</p>
        <button type="button" onclick="eliminarProducto(${id})">Eliminar Producto</button>
      </div>`;
      total += productos[num].precio * listCant[id];
    });

    contenido += `<p>Total= ${formatPrice(total)}</p>`;
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`;
    document.getElementById("carrito").innerHTML = contenido;
  }
};

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
};

let eliminarProducto = (id) => {
  const carrito = JSON.parse(localStorage.getItem("carrito"));

  carrito.splice(id, 1);

  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    localStorage.removeItem("carrito");
  }

  window.location.reload();
};

let formatPrice = (price) => {
  const numberFormat = new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    style: "currency",
  });
  return numberFormat.format(price);
};

let contarProductos = () => {
  const getCart = localStorage.getItem("carrito");

  if (getCart != null) {
    document.getElementById("cant-prod").innerText = JSON.parse(getCart).length;
  }
};

let filtrarProducto = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;
  let acc = document.getElementById("accesorios").checked;
  let seg = document.getElementById("seguridad").checked;
  let tec = document.getElementById("tecnologia").checked;
  let man = document.getElementById("mantenimiento").checked;
  let marca = document.getElementById("marca").value;

  let newLista = productos;

  if (searchWord) {
    newLista = newLista.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );
  }
  if (min) {
    newLista = newLista.filter((prod) => prod.precio >= min);
  }
  if (max) {
    newLista = newLista.filter((prod) => prod.precio <= max);
  }

  let category = [];
  acc ? category.push("Accesorios") : "";
  seg ? category.push("Seguridad") : "";
  tec ? category.push("Tecnología") : "";
  man ? category.push("Mantenimiento") : "";

  if (category.length > 0) {
    newLista = newLista.filter((prod) => category.includes(prod.categoria));
  }

  if (marca != "Todas") {
    newLista = newLista.filter((prod) => prod.marca == marca);
  }

  mostrarCatalogo(newLista);
};

let orderCatalog = (order) => {
  let newProducts;

  switch (order) {
    case "menor":
      newProducts = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProducts = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "a-z":
      newProducts = productos.sort((a, b) => {
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    case "z-a":
      newProducts = productos.sort((a, b) => {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
      break;
    default:
      newProducts = productos.sort((a, b) => a.precio - b.precio);
      break;
  }

  mostrarCatalogo(newProducts);
};