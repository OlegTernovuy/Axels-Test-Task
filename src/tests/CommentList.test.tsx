import { render, screen } from '@testing-library/react';

import { CommentsList } from '../components';

import { mockedComments } from '../mock';

describe('CommentList component', () => {
    it('should render correct number of comments', () => {
        render(<CommentsList comments={mockedComments} />);
        const commentsBlock = screen.getAllByRole('img');
        expect(commentsBlock).toHaveLength(3);
    });

    it('should match a snapshot', () => {
        const view = render(<CommentsList comments={mockedComments} />);
        expect(view).toMatchSnapshot();
    });
});
