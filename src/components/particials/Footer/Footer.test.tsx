import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
    it('Footer matches Snapshot', () => {
        const view = render(<Footer />);
        expect(view).toMatchSnapshot();
    });
});
