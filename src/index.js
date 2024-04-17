import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PageTitle from "./PageTitle";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import NoPage from "./NoPage";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
          <> 
            <Helmet>
              <title>KahviKulma | Kahvila</title>
              <meta name="description" content="Kahvila KahviKulma tarjoaa laadukasta kahvia sekä herkullisia leivonnaisia."/>
            </Helmet>
            <Home/> 
          </>} />
          <Route path="tuotteet" element={
          <>
            <Helmet>
              <title>Kahvila | Tuotteet</title>
              <meta name="description" content="Selaa herkullisia tuotteitamme. Tuotteet ostetaan kahvilastamme."/>
            </Helmet>
            <Products/> 
          </>} />
          <Route path="yhteystiedot" element={
          <>
            <Helmet>
              <title>Kahvila | Yhteystiedot</title>
              <meta name="description" content="Fredrikinkatu 32, 00120 Helsinki. Puh 1234567890. Tänään avoinna 8-16."/>
            </Helmet>
            <Contact/> 
          </>} />
          <Route path="*" element={
          <>
            <Helmet>
              <title>404 | Sivua ei löytynyt</title>
            </Helmet>
            <NoPage/>
          </>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);