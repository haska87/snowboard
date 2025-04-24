import { useState } from 'react';
import HomePage from './components/HomePage';
import BoardSelector from './components/BoardSelector';
import BindingsSetup from './components/BindingsSetup';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100">
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'board' && <BoardSelector setPage={setPage} />}
      {page === 'bindings' && <BindingsSetup setPage={setPage} />}
    </div>
  );
}

export default App;