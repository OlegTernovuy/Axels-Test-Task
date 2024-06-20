import { Footer, Header } from './components';
import ProductsPage from './pages/productsPage/ProductsPage';

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
