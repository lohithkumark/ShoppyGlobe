import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to load product");
        }

        const data = await res.json();

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div style={styles.container}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={styles.img}
      />

      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "20px"
  },

  img: {
    width: "300px",
    borderRadius: "10px"
  }
};

export default ProductDetail;
