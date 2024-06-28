import renderer from 'react-test-renderer';

import App from './App';

describe('App snapshotcomponent', () => {
    it('Matches Snapshot', () => {
        const ProductsPageComponent = renderer.create(<App />).toJSON();
        expect(ProductsPageComponent).toMatchSnapshot();
    });
});
