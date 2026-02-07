import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Header from "./Components/Header";

function App() {
  const dark = useSelector(state => state.theme.dark);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
