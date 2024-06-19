import "./App.css";
import { Footer, Header } from "./components";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsPage />
      <Footer/>
    </div>
  );
}

export default App;
