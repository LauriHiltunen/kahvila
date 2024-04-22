import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Etusivu</Link>
          </li>
          <li>
            <Link to="/tuotteet">Tuotteet</Link>
          </li>
          <li>
            <Link to="/tietoa">Meistä</Link>
          </li>
          <li>
            <Link to="/yhteystiedot">Yhteystiedot</Link>
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