import { useState } from 'react';
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <p className='text-rose-500 text-3xl underline font-bod text-center m-20'>
        3D game website!
      </p>
    </div>
  );
}

export default App;
