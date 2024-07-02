import { render, screen } from '@testing-library/react';

import CommentsList from './CommentsList';

import { mockedComments } from '../../mock';

describe('CommentList component', () => {
    test('renders correct number of comments', () => {
        render(<CommentsList comments={mockedComments} />);
        const commentsBlock = screen.getAllByRole('img');
        expect(commentsBlock).toHaveLength(3);
    });

    it('CommentList matches Snapshot', () => {
        const view = render(<CommentsList comments={mockedComments} />);
        expect(view).toMatchSnapshot();
    });
});
