import './App.css';
import Navbar from './components/Navbar';
import ExpenseTracker from './components/ExpenseTracker'

function App() {
  return (
    <div className="bg-purple-100 flex flex-col justify-center items-center min-h-screen">
      <header className='w-full'>
        <Navbar />
      </header>
      <main className="container max-w-screen-lg overflow-x-hidden m-4 bg-white text-[#181028] p-8 shadow-lg rounded-lg">
        <ExpenseTracker />
      </main>
    </div>
  );
}

export default App;
