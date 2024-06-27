import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer snapshot component', () => {
    it('Matches Snapshot', () => {
        const footerComponent = renderer.create(<Footer />).toJSON();
        expect(footerComponent).toMatchSnapshot();
    });
});
