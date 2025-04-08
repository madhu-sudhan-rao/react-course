
import './App.css'
import InputBox from './components/InputBox';



function App() {

  const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/055/781/145/small_2x/fire-color-in-the-white-smoke-stream-on-a-solid-black-background-free-video.jpg';

  return (
    <>
         <div className='flex justify-center items-center h-screen w-full flex-wrap bg-cover bg-no-repeat'
          style={{backgroundImage: `url(${backgroundImageUrl})`}}
         >
            <h1 className='text-4xl font-bold text-white'>Currency Converter</h1>
            <InputBox/>
         </div>
      
    </>
  )
}

export default App
