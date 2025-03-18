import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe('App Routing', () => {
    test('renders navigation links', () => {
        render(
            <App />
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    test('links have correct href attributes', () => {
        render(
            <App />
        );

        const homeLink = screen.getByText('Home');
        const aboutLink = screen.getByText('About Us');
        const cartLink = screen.getByRole('link', {name: /🛒/i})

        expect(homeLink).toHaveAttribute('href', '/');
        expect(aboutLink).toHaveAttribute('href', '/about-us');
        expect(cartLink).toHaveAttribute('href', '/cart-details');
    });

    test('renders Home component on initial route', () => {
        render(
            <App />
        );
        const heading = screen.getByRole('heading', { name: 'Product List' });

        expect(heading).toBeInTheDocument();
    });

    test('navigates to About page when clicking About link', async () => {
        render(
            <App />
        );

        fireEvent.click(screen.getByText('About Us'));
        await waitFor(() => {
            const heading = screen.getByRole('heading', { name: 'About Us' });
            expect(heading).toBeInTheDocument();
        });
    });

    test('navigates to Cart page when clicking Cart Icon', async () => {
        render(
            <App />
        );

        fireEvent.click(screen.getByRole('link', {name: /🛒/i}));
        await waitFor(() => {
            expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
        });
    });

    test('navigates back to Home page when clicking Home link', async () => {
        render(
            <App />
        );

        fireEvent.click(screen.getByText('Home'));
        await waitFor(() => {
            const heading = screen.getByRole('heading', { name: 'Product List' });
            expect(heading).toBeInTheDocument();
        });
    });
});
