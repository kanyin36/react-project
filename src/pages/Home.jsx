import React, { createContext, useRef, useState } from 'react'
import Header from '../component/Header'

export const ButtonContext = createContext()

const Home = () => {
  const buttonText = 'Duck Duck Go'

  const inputRef = useRef()
  // const [data, setData] = useState('')

  // const handleRef = (e)=>{
  //   e.preventDefault()
  //   inputRef.current.focus()
  // }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // setData(inputRef.current.value)
    console.log(inputRef.current.value)
  }

  return (
    <ButtonContext.Provider value={buttonText}>
      <section className='min-h-screen w-full flex flex-col items-center justify-center'>
          <Header />
          <form className='flex flex-col gap-4'>
            {/* {data} */}
            <input ref={inputRef} type='text' placeholder='Enter Text' className='min-w-lg rounded-full py-2 px-4 ring-1 ring-amber-400 placeholder:text-amber-400' />
            <button onClick={handleSubmit} className='w-fit mx-auto bg-amber-400 hover:bg-amber-500 py-2 px-4 rounded-full text-white'>Submit</button>
          </form>
      </section>
    </ButtonContext.Provider>
  )
}
export default Home