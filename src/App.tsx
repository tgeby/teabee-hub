import './App.css'

function App() {

  return (

    <div className="relative w-screen h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-1/5 bg-slate-900 overflow-y-auto">
        {/* Sidebar could go here in the future */}
        <h2 className="text-[clamp(1rem,2vw,3rem)] mt-8 text-center self-center py-5 w-full">Navigation</h2>
      </div>
      {/* Main content */}
      <div className="ml-[20vw] w-[80vw] h-screen overflow-y-auto flex flex-col justify-start items-center bg-gradient-to-b from-green-900 to-green-700">
        <h1 className="text-[clamp(1rem,6vw,3rem)] mt- text-center self-center py-5 w-full bg-slate-800">TeaBee</h1>

        <div className="flex flex-col gap-2 justify-center w-full py-5">
          <p className="text-[clamp(1rem,4vw,3rem)] text-center px-5">Mission Statement:</p>
          <p className="text-[clamp(1rem,2vw,3rem)] text-center px-5">To provide free, high-quality productivity and self improvement resources to all.</p>
          <p className="text-[clamp(1rem,2vw,3rem)] text-center px-5">This page will hold links to many tools and trackers I find useful.</p>
        </div>
        {/* ...rest of your content... */}
        {/* All your Flashcards links here */}
        <div className="flex flex-col gap-5 justify-center w-full items-center">
          <a className="text-[clamp(1rem,4vw,3rem)] hover:text-green-600" href="https://flashcards.teabee.org">Flashcards</a>
        </div>
      </div>
    </div>

  )
}

export default App
