import React, { useEffect, useState } from 'react'

const App = () => {

// useEffect(() => {
//   document.title = `kanyinsola ${color}`
// },[color])
// useEffect(() => {}, [])
// useEffect(() => {}, [something])


    const [color, setColor] = useState('B')
    const [colour, setColour] = useState('bg-black')


    useEffect(() => {
  document.title = `kanyinsola ${color}`
 },[color])

    const red =()=>{
     setColor('R')
    setColour(' bg-red-600')
    }
    const blue =()=>{
     setColor('BL')
     setColour('bg-blue-600')
    }
    const yellow =()=>{
     setColor('Y')
     setColour('bg-yellow-600')
    }
    const green =()=>{
     setColor('G')
     setColour('bg-green-600')
    }
    const reset =()=>{
     setColor('B')
     setColour('bg-black')
    }
  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen w-full'>
        <div className={` ${colour}  border-2 bg-black flex items-center justify-center rounded-full w-30 h-30 mb-3 text-white `}>{color}</div>
        <div className='flex gap-3'>
        <button onClick={red} className='border bg-red-600 w-15 h-10 rounded-md'> Red</button>
        <button onClick={blue} className='border bg-blue-600 w-15 h-10 rounded-md'>Blue</button>
        <button onClick={yellow} className='border bg-yellow-600 w-15 h-10 rounded-md'>Yellow</button>
        <button onClick={green} className='border bg-green-600 w-15 h-10 rounded-md'>Green</button>
         </div>
        <button onClick={reset} className='border text-white bg-black w-15 h-10 rounded-md mt-3'>Reset</button>
        
    </div>
  )
}

export default App