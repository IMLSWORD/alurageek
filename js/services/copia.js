// const url = "https://fake-alura-geek.vercel.app/product"

// const productList = async () => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status} ${res.statusText}`);
//     }
//     return await res.json();
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// const createProducts = async (nombre, precio, imagen) => {
//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         nombre,
//         precio,
//         imagen,
//       }),
//     });
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status} ${res.statusText}`);
//     }
//     return await res.json();
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// const deleteProduct = async (id) => {
//   try {
//     const res = await fetch(`${url}/${id}`, {
//       method: "DELETE",
//     });
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status} ${res.statusText}`);
//     }
//     return await res.json();
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// export  const servicesProducts = {
//   productList,
//   createProducts,
//   deleteProduct,
// };
