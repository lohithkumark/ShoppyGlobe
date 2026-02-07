import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSearch } from "../redux/searchSlice";
import { toggleTheme } from "../redux/themeSlice";
import { setCurrency } from "../redux/currencySlice";

function Header() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const dark = useSelector(state => state.theme.dark);
  const currency = useSelector(state => state.currency.code);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  function handleCurrencyChange(e) {
    const value = e.target.value;

    if (value === "USD") {
      dispatch(setCurrency({ code: "USD", rate: 1 }));
    }

    if (value === "INR") {
      dispatch(setCurrency({ code: "INR", rate: 83 }));
    }

    if (value === "EUR") {
      dispatch(setCurrency({ code: "EUR", rate: 0.9 }));
    }
  }

  return (
    <header className="header">

      {/* Logo */}
      <h2>ShoppyGlobe</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          onChange={e =>
            dispatch(setSearch(e.target.value))
          }
        />
      </div>

      {/* Navigation */}
      <nav>

        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({totalItems})
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        {/* Currency Selector */}
        <select
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="USD">🇺🇸 USD</option>
          <option value="INR">🇮🇳 INR</option>
          <option value="EUR">🇪🇺 EUR</option>
        </select>

        {/* Theme Toggle */}
        <button
          className="theme-btn"
          onClick={() => dispatch(toggleTheme())}
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </nav>

    </header>
  );
}

export default Header;
