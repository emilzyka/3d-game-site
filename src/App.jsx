import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Scene } from './utils/Scene';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Scene />
    </div>
  );
}

export default App;
