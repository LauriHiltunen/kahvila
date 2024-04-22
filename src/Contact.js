import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

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
</main>
  };
  
  export default Contact;