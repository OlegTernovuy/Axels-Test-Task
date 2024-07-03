import { render } from '@testing-library/react';

import { Header } from '../../components';

describe('Header component', () => {
    it('should match a snapshot', () => {
        const view = render(<Header />);
        expect(view).toMatchSnapshot();
    });
});
