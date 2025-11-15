const BASE_URL = "https://690d5f15a6d92d83e851412f.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("No se pudo crear el producto");
  return res.json();
};

export const getProducts = async (category) => {
  const url = category ? `${BASE_URL}?category=${encodeURIComponent(category)}` : BASE_URL;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al listar products");
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("No se encontró el producto");
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT", // o PATCH si preferís parcial
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("No se pudo actualizar el producto");
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("No se pudo eliminar el producto");
  return res.json();
};