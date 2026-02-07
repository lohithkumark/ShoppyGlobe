import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
  }

  return (
    <div style={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        style={styles.img}
      />

      <Link to={`/product/${product.id}`}>
        <h4>{product.title}</h4>
      </Link>

      <p>₹{product.price}</p>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center"
  },

  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
};

export default ProductItem;
