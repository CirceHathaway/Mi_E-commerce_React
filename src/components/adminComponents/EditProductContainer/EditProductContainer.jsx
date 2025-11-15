import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { getProductById, updateProduct } from "../../../services/products";

export const EditProductContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct({
          name: data.name ?? "",
          price: data.price ?? "",
          category: data.category ?? "",
          description: data.description ?? "",
          imageUrl: data.imageUrl ?? "",
        });
      } catch (e) {
        alert(e.message || "No se pudo cargar el producto");
        navigate("/admin/listado", { replace: true });
      } finally {
        setLoading(false);
      }
    })();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    
    const newErrors = validateProduct({ ...product, file }, false);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      let imageUrl = product.imageUrl;
      if (file) {
        imageUrl = await uploadToImgbb(file);
      }

      const payload = {
        name: product.name.trim(),
        price: Number(product.price),
        category: product.category.trim(),
        description: product.description.trim(),
        imageUrl,
      };

      await updateProduct(id, payload);
      alert("Producto actualizado");
      navigate("/admin/listado", { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
    />
  );
};
