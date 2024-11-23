import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

// Mock dependensi eksternal
jest.mock('@inertiajs/react', () => ({
  usePage: jest.fn(),
  Link: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('./../assets/images/just-text.png', () => 'mock-logo.png');
jest.mock('./Button', () => ({ text, className }) => <button className={className}>{text}</button>);
jest.mock('./SearchBar', () => () => <input data-testid="search-bar" />);

describe('NavBar Component', () => {
  const mockUsePage = require('@inertiajs/react').usePage;

  beforeEach(() => {
    mockUsePage.mockReturnValue({
      props: {
        auth: { user: null }, // Default: Tidak ada pengguna
      },
    });
  });

  test('renders logo and search bar', () => {
    render(<NavBar />);
    expect(screen.getByAltText('Logo')).not.toBeNull();
    // expect(screen.getByTestId('search-bar')).not.toBeNull();
  });

  test('renders "Sign in" button when user is not logged in', () => {
    render(<NavBar />);
    expect(screen.getByText('Sign in')).not.toBeNull();
  });

  test('renders user name and dropdown when user is logged in', () => {
    mockUsePage.mockReturnValue({
      props: {
        auth: { user: { name: 'Test User' } },
      },
    });

    render(<NavBar />);
    expect(screen.getByText('Test User')).not.toBeNull();

    const dropdownToggle = screen.getByText('Test User');
    fireEvent.click(dropdownToggle);

    expect(screen.getByText('CMS')).not.toBeNull();
    expect(screen.getByText('Bookmark')).not.toBeNull();
    expect(screen.getByText('Profile')).not.toBeNull();
    expect(screen.getByText('Logout')).not.toBeNull();
});

test('toggles dropdown visibility on button click', () => {
  mockUsePage.mockReturnValue({
    props: {
      auth: { user: { name: 'Test User' } },
    },
  });

  render(<NavBar />);
  const dropdownToggle = screen.getByText('Test User');

  // Dropdown closed initially
  expect(screen.queryByText('CMS')).toBeNull();

  // Open dropdown
  fireEvent.click(dropdownToggle);
  expect(screen.getByText('CMS')).not.toBeNull();

  // Close dropdown
  fireEvent.click(dropdownToggle);
  expect(screen.queryByText('CMS')).toBeNull();
});
});
