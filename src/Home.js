import { Link } from "react-router-dom"
import MostSold from "./MostSold"
import cafecounter from "./pexels-photo-12689350.jpeg"
import cafeImg1 from "./craiyon_134620_brown_and_beige_empty_boring_restaurant_interier.png"
import cafeImg2 from "./craiyon_134531_modern_cafe.png"

const Home = () => {
    return <main>
      <section id="intro" className="content">
        <div className="fling-minislide">
          <img alt="ruokailutila" src={cafeImg1}></img>
          <img alt="kahvio" src={cafeImg2}></img>
        </div>
        <h1>Tervetuloa Kahvila KahviKulmaan!</h1>
        <p>Kahvilamme tarjoaa laadukasta kahvia ja herkullisia leivonnaisia.</p>
      </section>
      <section id="products" className="content">
        <h2>Tuotteemme</h2>
        <div className="responsive-image-text-grid">
          <div className="image_container">
            <img src={cafecounter} alt="kahvilan kassapiste"/>
            <p>Leivonnaisemme ovat leivottu niiden tarjoilupäivinään</p>
          </div>
          <div className="text_container">
            <p>Laajaan valikoimaamme kuuluu myös laktoosittomia- ja 100% vegaaneja tuotteita. Kahvimme on tuotettu mahdollisimman ympäristöystävällisillä tekniikoilla.</p>
            <MostSold/>
            <p>Tuotteistamme voit nauttia sekä kahvilassa että mukaan otettuina</p>
            <Link to="/yhteystiedot">Aukioloajat &rarr;</Link>
          </div>
        </div>
      </section>
    </main>
  };
  
export default Home
  