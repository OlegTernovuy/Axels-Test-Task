import { RouterProvider } from 'react-router-dom';

import { Footer, Header } from './components';
import { AppDiv } from './styled/StyledApp';

import { routes } from './routes/routes';

function App() {
  return (
    <AppDiv>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </AppDiv>
  );
}

export default App;
