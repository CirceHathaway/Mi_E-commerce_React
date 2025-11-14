import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setDetail(null);
    setError("");

    (async () => {
      try {
        const res = await fetch(
          `https://690d5f15a6d92d83e851412f.mockapi.io/products/${id}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("No se encontró el producto");
        const data = await res.json();
        setDetail(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message || "Error al cargar el producto");
        }
      }
    })();

    return () => controller.abort();
  }, [id]);

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : detail ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
