import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchOne() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchOne();
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>{product.title}</h2>

      <img src={product.thumbnail} />

      <p>{product.description}</p>

      <h3>₹{product.price}</h3>
    </div>
  );
}

export default ProductDetail;
