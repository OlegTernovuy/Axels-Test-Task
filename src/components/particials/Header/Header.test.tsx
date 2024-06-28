import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header snapshot component', () => {
    it('Header matches Snapshot', () => {
        const headerComponent = renderer.create(<Header />).toJSON();
        expect(headerComponent).toMatchSnapshot();
    });
});
