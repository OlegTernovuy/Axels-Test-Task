import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { CommentForm } from '../components';

describe('CommentForm component', () => {
    it('should render CommentForm submit button correctly', () => {
        render(<CommentForm />);
        expect(
            screen.getByRole('button', { name: /submit/i })
        ).toBeInTheDocument();
    });

    it('should shows validation errors on submit with empty comment field', async () => {
        render(<CommentForm />);
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(
            await screen.findByText(/Comment is required/i)
        ).toBeInTheDocument();
    });

    it('should submit form with correct rating values', () => {
        render(<CommentForm />);
        fireEvent.change(screen.getByRole('radio', { name: /5 Stars/i }), {
            target: { value: 5 },
        });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(
            screen.queryByText(/rating is required/i)
        ).not.toBeInTheDocument();
    });

    it('should shows validation error for too short comment', async () => {
        render(<CommentForm />);
        fireEvent.change(screen.getByLabelText(/comment/i), {
            target: { value: '1234' },
        });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(
            await screen.findByText(/Сomment must contain at least 5 char/i)
        ).toBeInTheDocument();
    });

    it('should match a snapshot', () => {
        const view = render(<CommentForm />);
        expect(view).toMatchSnapshot();
    });
});
