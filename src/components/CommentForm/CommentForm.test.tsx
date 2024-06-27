import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import CommentForm from './CommentForm';

describe('Comment form snapshot component', () => {
    test('renders CommentForm correctly', () => {
        render(<CommentForm />);
        expect(screen.getByLabelText(/comment/i)).toBeInTheDocument();
        expect(
            screen.getByRole('radio', { name: /Empty/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /submit/i })
        ).toBeInTheDocument();
    });

    test('shows validation errors on submit with empty fields', async () => {
        render(<CommentForm />);

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(
            await screen.findByText(/comment is required/i)
        ).toBeInTheDocument();
        expect(
            await screen.findByText(/rating is required/i)
        ).toBeInTheDocument();
    });

    test('submits form with correct values', () => {
        render(<CommentForm />);

        fireEvent.change(screen.getByLabelText(/comment/i), {
            target: { value: 'This is a test comment' },
        });
        fireEvent.change(screen.getByRole('radio', { name: /5 Stars/i }), {
            target: { value: 5 },
        });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(
            screen.queryByText(/comment is required/i)
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText(/rating is required/i)
        ).not.toBeInTheDocument();
    });

    test('shows validation error for too short comment', async () => {
        render(<CommentForm />);

        fireEvent.change(screen.getByLabelText(/comment/i), {
            target: { value: '1234' },
        });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(
            await screen.findByText(/Сomment must contain at least 5 char/i)
        ).toBeInTheDocument();
    });

    it('Matches Snapshot', () => {
        const commentFormComponent = renderer.create(<CommentForm />).toJSON();
        expect(commentFormComponent).toMatchSnapshot();
    });
});
