import App from './App';

import { renderWithProviders } from './utils/utils-test';

describe('App component', () => {
    it('App matches Snapshot', () => {
        const view = renderWithProviders(<App/>)
        expect(view).toMatchSnapshot();
    });
});
