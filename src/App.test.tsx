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
  it('renders website title', () => {
    expect(screen.getByText(/TeaBee/i)).toBeInTheDocument();
  });
  it('renders mission statement', () => {
    expect(screen.getByText(/Mission Statement/i)).toBeInTheDocument();
  });
});