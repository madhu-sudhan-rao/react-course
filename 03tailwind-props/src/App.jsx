import './App.css'
import Card from './components/Card'

function App() {

  const obj = {
    name: 'Madhu',
    age: 22,
    job: 'Frontend developer',
    address: {
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India'
    }
  }

  const numArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded'>Vite with Tailwind</h1>
      <Card myArr={numArray} />
      <Card userName='Madhu' />
      <Card userName='Madhu' caste='Frontend developer' />
    </>
  )
}

export default App
