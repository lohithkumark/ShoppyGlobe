import useFetchProducts from "../hooks/useFetchProducts";

function Home() {
  const { products, error, loading } = useFetchProducts();

  if (loading) return <h3>Loading products...</h3>;

  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>All Products</h2>

      {products.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
