import { render, screen, waitFor, act } from '@testing-library/react'
import App from './App'

// Mock the @auth0/auth0-react module
vi.mock("@auth0/auth0-react", () => {
  return {
    Auth0Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useAuth0: () => ({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      loginWithRedirect: vi.fn().mockResolvedValue(undefined), // 👈 return a Promise
      logout: vi.fn().mockResolvedValue(undefined),
    }),
  };
});

describe('Main page', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });
  });
  it('renders website title in header', () => {
    expect(screen.getByRole('heading', { name: /TeaBee/i})).toBeInTheDocument();
  });
  it('renders mission statement', () => {
    expect(screen.getByText(/Mission Statement/i)).toBeInTheDocument();
  });
  it('renders Flashcards link with the correct href', () => {
    const flashcardsLink = screen.getByRole('link', { name: /Flashcards/i });
    expect(flashcardsLink).toBeInTheDocument();
    expect(flashcardsLink).toHaveAttribute('href', 'https://flashcards.teabee.org');
  });
  it('renders Navigation sidebar', () => {
    expect(screen.getByRole('heading', { name: /Navigation/i})).toBeInTheDocument();
  });
  it('renders Interval Timer link with the correct href', () => {
    const intervalTimerLink = screen.getByRole('link', { name: /Interval Timer/i });
    expect(intervalTimerLink).toBeInTheDocument();
    expect(intervalTimerLink).toHaveAttribute('href', 'https://timer.teabee.org');
  });
});