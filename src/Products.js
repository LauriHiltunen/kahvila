import { Link } from "react-router-dom";
import ListProducts from "./ListProducts";
import Sort from "./Sort.js"
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
    <div className="dropdown">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg>
  <Sort sortOptions={[{labelText:"Hinta pienin - suurin"},{labelText:"Hinta suurin - pienin"}]} onSelectedIndexChange={(e) => {console.log(e)}} radioBtnName="drinks"/>
</div>
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