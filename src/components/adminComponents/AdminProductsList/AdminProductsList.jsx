import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../../services/products";
import { Link } from "react-router-dom";
import "./AdminProductsList.css";

export const AdminProductsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onDelete = async (id) => {
    const ok = confirm("¿Eliminar este producto?");
    if (!ok) return;
    try {
      await deleteProduct(id);
      setItems((prev) => prev.filter((p) => p.id !== id));
      alert("Producto eliminado");
    } catch (e) {
      alert(e.message || "No se pudo eliminar");
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <section className="admin-list">
      <h2>Productos</h2>
      {items.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id}>
                <td><img src={p.imageUrl} alt={p.name} /></td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td className="actions">
                  <Link className="btn" to={`/admin/editar/${p.id}`}>Editar</Link>
                  <button className="btn danger" onClick={() => onDelete(p.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="toolbar">
        <Link className="btn" to="/admin/alta-productos">+ Crear Producto </Link>
        <Link className="btn" to="/"> Home </Link>
      </div>
    </section>
  );
};