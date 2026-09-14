// Layout.jsx
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
}

export default Layout;