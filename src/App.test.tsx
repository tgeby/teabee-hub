import { render, screen } from '@testing-library/react'
import App from './App'

describe('Main page', () => {
  it('renders website title', () => {
    render(<App />);
    expect(screen.getByText(/TeaBee/i)).toBeInTheDocument();
  });
});