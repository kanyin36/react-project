import React, { useState } from 'react'

const Main = () => {

  
    const [count, setCount] = useState(0)

     const decrement = ()=>{
    if(count <= 0){
      setCount(0)
     }
      else {
        setCount(count -1)
      }
    }
    const increment = ()=>{
     setCount(count +1)
    }
    
    const reset = ()=>{
      setCount(0)
    }
  
  return (
    <div  className='flex flex-col gap-5 items-center justify-center min-h-screen w-full'>
      <div className='text-6xl font-bold'>{count}</div>
      <div className='flex gap-5'>
       <button onClick={decrement} className='py-1.5 px-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white'>-</button>
       <button onClick={reset} className='py-1.5 px-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white '>Reset</button>
       <button onClick={increment} className='py-1.5 px-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white'>+</button>
      </div>
    </div>
  



  )
}

export default Main