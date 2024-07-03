import { render } from '@testing-library/react';

import { Footer } from '../../components';

describe('Footer component', () => {
    it('should matchs a snapshot', () => {
        const view = render(<Footer />);
        expect(view).toMatchSnapshot();
    });
});
