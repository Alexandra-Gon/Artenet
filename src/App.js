import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

//PAGES
import InicioPage from "./Pages/InicioPage/InicioPage";
import ServiciosPage from "./Pages/ServiciosPage/ServiciosPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ItemDetailPage from "./Pages/ItemDetailPage/ItemDetailPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";



//CONTEXT
import { ItemsProvider } from "./Context/Context";

const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/productos/:categoryID" element={<ProductsPage />} />
            <Route path="/detail/:id" element={<ItemDetailPage />} />
            <Route path="/shop/" element={<ShopPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;
