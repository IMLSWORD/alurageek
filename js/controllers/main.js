import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-productos]");
const form = document.querySelector("[data-form]");

function createCard(nombre, precio, imagen, id) {
  const card = document.createElement("div");
  card.classList.add("contenedor-card");

  card.innerHTML = `
    <img class="imagen-producto" src="${imagen}" alt="${nombre}" />
    <h1 class="nombre-producto">${nombre}</h1>
    <div class="precio-seccion-eliminar">
        <p class="precio-producto">${precio}</p>
        <button  id="${id}" class="eliminar-producto" data-eliminar>
          <img loading="lazy" src="./imagenes/iconos/borrar.png" alt="boton eliminar" class="icono-borrar">
        </button>
    </div>
  `;

  const deleteButton = card.querySelector("[data-eliminar]");
  deleteButton.addEventListener("click", (event) => {
    const productId = event.currentTarget.id;
    servicesProducts
      .eliminaProductos(productId)
      .then(() => {
        card.remove();
      })
      .catch((err) => console.error("Error deleting product:", err));
  });

  return card;
}

const render = async () => {
  try {
    const listProduct = await servicesProducts.listaProductos();
    listProduct.forEach((product) => {
      const card = createCard(
        product.nombre,
        product.precio,
        product.imagen,
        product.id
      );
      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error rendering products:", error);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  console.log(imagen);

  if (!imagen || !precio || !nombre) {
    alert("Ingrese Todos los datos");
    return;
  }

  const esUrl = imagen.includes("http://") || imagen.includes("https://");
  if (!esUrl) return alert("Ingresa una url válida para la imagen");

  servicesProducts
    .creaProductos(nombre, precio, imagen)
    .then((res) => {
      if (res) {
        const newCard = createCard(res.nombre, res.precio, res.imagen, res.id);
        productContainer.appendChild(newCard);
      }
      window.location.reload();
    })
    .catch((err) => console.error("Error creating product:", err));
});

render();
