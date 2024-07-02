import { render } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound page snapshot component', () => {
    it('NotFound page matches Snapshot', () => {
        const view = render(<NotFound />);
        expect(view).toMatchSnapshot();
    });
});
