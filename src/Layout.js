import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tuotteet">Products</Link>
          </li>
          <li>
            <Link to="/yhteystiedot">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <p>&copy; 2024 Kahvila KahviKulma</p>
      </footer>
    </>
  )
};

export default Layout;