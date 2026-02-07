import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { addToCart } from "../redux/cartSlice";
import { toggleWish } from "../redux/wishlistSlice";
import { formatPrice } from "../utils/formatPrice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const wishlist = useSelector(state => state.wishlist);
  const currency = useSelector(state => state.currency.currency);
  const rate = useSelector(state => state.currency.rate);

  const isLiked = wishlist.some(
    item => item.id === product.id
  );

  const price = product.price * rate;

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.thumbnail} alt={product.title} />

      <Link to={`/product/${product.id}`}>
        <h4>{product.title}</h4>
      </Link>

      <p>{formatPrice(price, currency)}</p>

      <div className="actions">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Added to cart");
          }}
        >
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
