import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./Components/Header";

function App() {
  const dark = useSelector(state => state.theme.dark);

  return (
    <div className={dark ? "dark" : ""}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
