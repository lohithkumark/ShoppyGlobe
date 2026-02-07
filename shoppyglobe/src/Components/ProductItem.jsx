import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { addToCart } from "../redux/cartSlice";
import { toggleWish } from "../redux/wishlistSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishlist);

  const isLiked = wishlist.some(
    item => item.id === product.id
  );

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <Link to={`/product/${product.id}`}>
        <h4>{product.title}</h4>
      </Link>

      <p>₹{product.price}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>

        <button
          onClick={() => dispatch(toggleWish(product))}
          style={{
            background: isLiked ? "#ef4444" : "#111827"
          }}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>
    </motion.div>
  );
}

export default ProductItem;
