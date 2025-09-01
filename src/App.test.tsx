import { render, screen } from '@testing-library/react'
import App from './App'

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