import ProductItem from "../Components/ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

function Home() {
  const { products, error, loading } = useFetchProducts();

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>All Products</h2>

      <div style={grid}>
        {products.map(item => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px"
};

export default Home;
