import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ListFeedbacks from "./ListFeedbacks";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import "./Contact.css";
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [28, 46],
   iconAnchor: [17, 46]
});

L.Marker.prototype.options.icon = DefaultIcon;
const Contact = () => {
  const mapInteractionOptions = {
    doubleClickZoom: false,
    dragging: false,
    zoomSnap: false,
    touchZoom: false,
    scrollWheelZoom:false
  }
  const position = [60.16555600298087, 24.934924157056518];
  return <main>
  <section id="intro" className="content">
    <h1>Yhteystiedot</h1>
  </section>
  <section id="opentime" className="content">
    <h2>Aukioloajat</h2>

  </section>
  <section id="location" className="content">
    <h2>Sijainti</h2>
    <div>
      <p>Fredrikinkatu 32, 00120 Helsinki</p>
    <div className='leaflet-container'>
<MapContainer center={position} zoom={14} {...mapInteractionOptions}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} />
  </MapContainer>
    </div> 
    </div>
  </section>
  <section id='contact' className='content'>
    <h2>Yhteystiedot</h2>
    <div className='grid-box'>
      <div>
        <p>puh: 0451234567</p>
        <p>contact@kahvikulma.fi</p>
      </div>
      <div>
        <form id='contact-form' action='' method='post'>
          <label>
            <span>Sähköposti</span>
            <input type='email' name='email' placeholder='Sähköposti' required/>
          </label>
          <label>
            <span>Viesti:</span>
            <textarea placeholder="viesti" name='message' required/>
          </label>
          <div className='form-buttons'>
            <button>Lähetä</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section id='feedback' className='content'>
  <h2>Palaute</h2>

  <form id="feedback-form" action="" method="post">
    <label>
      <span>Sähköposti</span>
      <input type='email' name='email' placeholder='Sähköposti' required/>
    </label>
    <label>
      <span>Viesti:</span>
      <textarea placeholder="viesti" name='message' required/>
    </label>
    <div class="rate">
      <input type="radio" id="star5" name="rate" value="5" />
      <label for="star5" title="text"></label>
      <input type="radio" id="star4" name="rate" value="4" />
      <label for="star4" title="text"></label>
      <input type="radio" id="star3" name="rate" value="3" />
      <label for="star3" title="text"></label>
      <input type="radio" id="star2" name="rate" value="2" />
      <label for="star2" title="text"></label>
      <input type="radio" id="star1" name="rate" value="1" />
      <label for="star1" title="text"></label>
    </div>
  </form>
  <ListFeedbacks/>
  </section>
</main>
  };
  
  export default Contact;