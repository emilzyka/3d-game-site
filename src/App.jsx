import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <p className='text-rose-500 text-3xl underline font-bod text-center'>
        Hello world
      </p>
    </div>
  );
}

export default App;
