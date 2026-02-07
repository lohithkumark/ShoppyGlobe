function ProductItem({ product }) {
  return (
    <div style={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        style={styles.img}
      />

      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button>Add to Cart</button>
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
