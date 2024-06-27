import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Axels Test Task header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Axels Test Task/i);
  expect(linkElement).toBeInTheDocument();
});

// import renderer from 'react-test-renderer';

// import ProductsPage from './ProductsPage';

// describe('App snapshotcomponent', () => {
//     it('Matches Snapshot', () => {
//         const ProductsPageComponent = renderer.create(<ProductsPage />).toJSON();
//         expect(ProductsPageComponent).toMatchSnapshot();
//     });
// });
