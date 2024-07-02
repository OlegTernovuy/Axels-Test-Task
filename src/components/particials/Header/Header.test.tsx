import { render } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
    it('Header matches Snapshot', () => {
        const view = render(<Header />);
        expect(view).toMatchSnapshot();
    });
});
