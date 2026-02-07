import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { addToCart } from "../redux/cartSlice";
import { toggleWish } from "../redux/wishlistSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishlist);

  const isLiked = wishlist.find(
    item => item.id === product.id
  );

  function handleAddCart() {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  }

  function handleWishlist() {
    dispatch(toggleWish(product));
    toast.success("Wishlist updated");
  }

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
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

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        <button onClick={handleAddCart}>
          Add to Cart
        </button>

        <button
          onClick={handleWishlist}
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
