import renderer from 'react-test-renderer';

import NotFound from './NotFound';

describe('NotFound page snapshot component', () => {
    it('Matches Snapshot', () => {
        const NotFoundPage = renderer.create(<NotFound />).toJSON();
        expect(NotFoundPage).toMatchSnapshot();
    });
});
