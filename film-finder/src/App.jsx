import './App.css'


function App() {

  return (
    <>
      <h1 className='text-x1 font-bold text-red-500'>Counter</h1>
      <div className='flex space-x-2'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>-</button>
      </div>
    </>
  )
}

export default App
