import { render, screen, waitFor, act } from '@testing-library/react'
import App from './App'
import { AuthProvider } from './contexts/AuthContext';

vi.mock("firebase/app", () => ({
  initializeApp: vi.fn(() => ({})),
  getApps: vi.fn(() => []),
  getApp: vi.fn(() => ({})),
}));

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn((_auth, callback) => {
    // Fake user state for tests
    callback(null); // unauthenticated
    // callback({ uid: "123", email: "test@teabee.org" }); // logged in
    return () => {};
  }),
  signInWithPopup: vi.fn(() => Promise.resolve({ user: { uid: "123" } })),
  signOut: vi.fn(() => Promise.resolve()),
}));

describe('Main page', () => {
  beforeEach(async () => {
    await act(async () => {
      render(
      <AuthProvider>
          <App />
      </AuthProvider>
      );
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