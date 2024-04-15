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
              <title>Kahvila | KahviKulma</title>
            </Helmet>
            <Home/> 
          </>} />
          <Route path="tuotteet" element={
          <>
            <Helmet>
              <title>KahviKulma | Tuotteet</title>
            </Helmet>
            <Products/> 
          </>} />
          <Route path="yhteystiedot" element={
          <>
            <Helmet>
              <title>KahviKulma | Yhteystiedot</title>
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