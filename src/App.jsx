import ProductsPage from './pages/ProductsPage';
import { Footer, Header } from './components';
import { AppDiv } from './styled/StyledApp';

function App() {
  return (
    <AppDiv>
      <Header />
      <ProductsPage />
      <Footer />
    </AppDiv>
  );
}

export default App;
