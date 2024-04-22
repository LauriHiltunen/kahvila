import { Link } from "react-router-dom";
import ListProducts from "./ListProducts";
const Products = () => {
  return <main>
  <section id="intro" className="content">
    <h1>Tuotteet</h1>
    <p>Kahvilamme herkut ostetaan ja haetaan kahvilastamme.</p>
    <Link to="/yhteystiedot">Yhteystietoihin &rarr;</Link>
  </section>
  <section id="drinks" className="content">
    <h2>Juomat</h2>
    <div className="button_container">
      <button>Hello</button>
    </div>
    <div className="clear"></div>
    <div className="drink_wrapper">
    <ListProducts amount={0} category={1}/>
    </div>
  </section>
  <section id="baked-goods" className="content">
    <h2>Leivonnaiset</h2>
    <div className="baked_wrapped">
      <ListProducts amount={0} category={0}/>
    </div>
  </section>
</main>
  };
  
  export default Products;