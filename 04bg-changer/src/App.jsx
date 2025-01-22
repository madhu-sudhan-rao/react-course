
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive');

  const setBackgroundColor = (hue) => {
    setColor(hue);
  }


  return (
    <div className='h-screen w-full duration-200 bg-black' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setBackgroundColor('#C62300')}
            >Red</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setBackgroundColor('#98D8EF')}
            >Blue</button>
          <button 
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            onClick={() => setColor('#EB5A3C')}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
