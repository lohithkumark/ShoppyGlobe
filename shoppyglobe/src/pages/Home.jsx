import { useSelector } from "react-redux";

import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "../Components/ProductItem";
import FilterBar from "../Components/FilterBar";

function Home() {
  const { products, loading, error } = useFetchProducts();

  const search = useSelector(state => state.search);
  const filter = useSelector(state => state.filter);

  if (loading) return <h3>Loading products...</h3>;

  if (error) return <h3>{error}</h3>;

  let filtered = products.filter(p =>
    p.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (filter.category !== "all") {
    filtered = filtered.filter(
      p => p.category === filter.category
    );
  }

  filtered = filtered.filter(
    p => p.price <= filter.maxPrice
  );

  if (filter.sort === "low") {
    filtered = [...filtered].sort(
      (a, b) => a.price - b.price
    );
  }

  if (filter.sort === "high") {
    filtered = [...filtered].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <div className="container">
      <h2>Products</h2>

      <FilterBar />

      <div className="product-grid">
        {filtered.length === 0 ? (
          <h3>No products found</h3>
        ) : (
          filtered.map(product => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
