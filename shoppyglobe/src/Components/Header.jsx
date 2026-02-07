import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import { toggleTheme } from "../redux/themeSlice";
import { setCurrency } from "../redux/currencySlice";

function Header() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const dark = useSelector(state => state.theme.dark);
  const currency = useSelector(state => state.currency.currency);

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <header className="header">
      <h2>ShoppyGlobe</h2>

      <input
        placeholder="Search products..."
        onChange={e => dispatch(setSearch(e.target.value))}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalQty})</Link>
        <Link to="/orders">Orders</Link>

        <select
          value={currency}
          onChange={e => dispatch(setCurrency(e.target.value))}
        >
          <option value="USD">🇺🇸 USD</option>
          <option value="INR">🇮🇳 INR</option>
          <option value="EUR">🇪🇺 EUR</option>
        </select>

        <button onClick={() => dispatch(toggleTheme())}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
