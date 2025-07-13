import './App.css'
import { Home } from '@/islands/home/page'

function App() {

  return (
    <>
      <h1 className='font-bold text-gray-800 text-2xl flex items-center justify-center m-4'>
        Grade de Issues
      </h1>
      <div className='m-4'>
      <Home />
      </div>
    </>
  )
}

export default App
