import './App.css'
import Header from './components/layout/Header';
import { useAuth } from './contexts/AuthContext.tsx';
function App() {

  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (

    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      {/* Body container */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen w-1/5 bg-slate-900 p-5 overflow-y-auto">
          <h2 className="text-[clamp(1rem,2vw,3rem)] mt-8 text-center self-center py-5 w-full">Navigation</h2>
        </div>
        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-green-900 to-green-700">
          <div className="flex flex-col gap-2 justify-center w-full py-5">
            <p className="text-[clamp(1rem,4vw,3rem)] text-center px-5">Mission Statement:</p>
            <p className="text-[clamp(1rem,2vw,3rem)] text-center px-5">To provide free, high-quality productivity and self improvement resources to all.</p>
            <p className="text-[clamp(1rem,2vw,3rem)] text-center px-5">This page will hold links to many tools and trackers I find useful.</p>
          </div>
          {/* All links here */}
          <div className="flex flex-col gap-5 justify-center w-full items-center">
            <a className="text-[clamp(1rem,4vw,3rem)] hover:text-green-600" href="https://flashcards.teabee.org">Flashcards</a>
          </div>
          <div className="flex flex-col gap-5 justify-center w-full items-center">
            <a className="text-[clamp(1rem,4vw,3rem)] hover:text-green-600" href="https://timer.teabee.org">Interval Timer</a>
          </div>
          <div>
            {user ? <p>Welcome, {user.displayName || user.email}</p> : <p>Please sign in</p>}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
