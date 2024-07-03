import { render } from '@testing-library/react';

import NotFound from '../pages/NotFound';

describe('NotFoundPage component', () => {
    it('should match a snapshot', () => {
        const view = render(<NotFound />);
        expect(view).toMatchSnapshot();
    });
});
