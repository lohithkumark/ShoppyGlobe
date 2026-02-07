import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSearch } from "../redux/searchSlice";
import { toggleTheme } from "../redux/themeSlice";

function Header() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const dark = useSelector(state => state.theme.dark);

  const total = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <header className="header">
      <h2>ShoppyGlobe</h2>

      <div className="search-box">
        <input
        placeholder="Search products..."
        onChange={e => dispatch(setSearch(e.target.value))}
    />
        </div>


      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({total})
        </Link>

        <button onClick={() => dispatch(toggleTheme())}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
