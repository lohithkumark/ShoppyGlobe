import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatPrice } from "../utils/formatPrice";

function ProductDetail() {
  const { id } = useParams();

  const currency = useSelector(state => state.currency);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchOne() {
      const res = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await res.json();

      setProduct(data);
    }

    fetchOne();
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="container product-detail">

      <h2>{product.title}</h2>

      <img
        src={product.thumbnail}
        alt={product.title}
        className="detail-img"
      />

      <p>{product.description}</p>

      <h3>
        {formatPrice(product.price, currency)}
      </h3>

    </div>
  );
}

export default ProductDetail;
