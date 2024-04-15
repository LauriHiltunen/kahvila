import { Link } from "react-router-dom";
const Products = () => {
  return <main>
  <section id="intro">
    <h1>Tuotteet</h1>
    <p>Kahvilamme herkut ostetaan meidän kahvilasta.</p>
    <Link to="/yhteystiedot">Yhteystietoihin &rarr;</Link>
  </section>
  <section id="drinks">
    <h2>Juomat</h2>
    <div className="drink_wrapper">

    </div>
  </section>
  <section id="baked-goods">
    <h2>Leivonnaiset</h2>
    <div className="baked_wrapped">

    </div>
  </section>
</main>
  };
  
  export default Products;