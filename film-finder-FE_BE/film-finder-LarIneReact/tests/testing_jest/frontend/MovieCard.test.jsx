import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../../../../../resources/js/Components/MovieCard';
import { usePage, router, useForm } from '@inertiajs/react';

// Mock external dependencies
jest.mock('@inertiajs/react', () => ({
  usePage: jest.fn(),
  Link: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  router: {
    get: jest.fn(),
    post: jest.fn(),
  },
  useForm: jest.fn(() => ({
    post: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Mock the `route` function
global.route = jest.fn((name, params) => {
  if (name === 'bookmarks.store') {
    return `/bookmarks/store/${params.film_id}`;
  }
  return '/';
});

describe('MovieCard Component', () => {
  const mockUsePage = require('@inertiajs/react').usePage;

  beforeEach(() => {
    mockUsePage.mockReturnValue({
      props: {
        auth: { user: null }, // Default: No user
      },
    });
  });

  test('renders movie card with image, title, and availability', () => {
    render(<MovieCard id={1} imgSrc="test.jpg" title="Test Movie" availability="Available" isBookmarked={false} />);
    expect(screen.getByAltText('Test Movie Image')).not.toBeNull();
    expect(screen.getByText('Test Movie')).not.toBeNull();
    expect(screen.getByText('Available')).not.toBeNull();
  });

  test('handles image error', () => {
    render(<MovieCard id={1} imgSrc="invalid.jpg" title="Test Movie" availability="Available" isBookmarked={false} />);
    const image = screen.getByAltText('Test Movie Image');
    fireEvent.error(image);
    expect(image.src).toBe('https://via.placeholder.com/300');
  });

//   test('toggles bookmark status when clicked', () => {
//     mockUsePage.mockReturnValue({
//       props: {
//         auth: { user: { id: 1, name: 'Test User' } },
//       },
//     });

//     render(<MovieCard id={1} imgSrc="test.jpg" title="Test Movie" availability="Available" isBookmarked={false} />);
//     const bookmarkButton = screen.getByRole('button');
//     fireEvent.click(bookmarkButton);
//     expect(router.post).toHaveBeenCalledWith(
//       '/bookmarks/store/1', // Mocked URL from the `route` function
//       expect.any(Object),
//       expect.any(Object)
//     );
//   });

  test('redirects to login if not authenticated and bookmark is clicked', () => {
    render(<MovieCard id={1} imgSrc="test.jpg" title="Test Movie" availability="Available" isBookmarked={false} />);
    const bookmarkButton = screen.getByRole('button');
    fireEvent.click(bookmarkButton);
    expect(router.get).toHaveBeenCalledWith('/login');
  });
});
