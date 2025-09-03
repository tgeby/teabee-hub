import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: false,
    user: null,
    isLoading: false,
  }),
}))

describe('Main page', () => {
  beforeEach(() => {
    render(<App />);
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