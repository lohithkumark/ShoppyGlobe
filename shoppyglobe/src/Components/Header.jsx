import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2>ShoppyGlobe</h2>

      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart (0)</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#222",
    color: "white"
  },

  nav: {
    display: "flex",
    gap: "20px"
  }
};

export default Header;
