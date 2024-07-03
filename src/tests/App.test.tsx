import App from '../App';

import { renderWithProviders } from './utils/utils-test';

describe('App component', () => {
    it('should match a snapshot', () => {
        const view = renderWithProviders(<App />);
        expect(view).toMatchSnapshot();
    });
});
