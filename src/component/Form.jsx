import { useState } from "react"

const Form = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const handleUsernameChange = (e) =>{
    //     setUsername(e.target.value)
    // }

    // const handlePasswordChange = (e) =>{
    //     setPassword(e.target.value)
    // }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            // console.log({ username: username, password: password })
            console.log({ username, password })
        } catch (error) {
           console.log(error.message) 
        }
    }

    return(
        <div className="min-h-screen w-full flex items-center bg-slate-200 justify-center">
            <form onSubmit={handleSubmit} className="min-w-lg rounded-md bg-white flex flex-col gap-4 px-10 py-14">
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="username" type="text" className="placeholder:text-sm placeholder:font-light placholder:text-amber-400 py-2 px-3 rounded-full w-full ring-amber-300 ring-1" />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" type="password" className="placeholder:text-sm placeholder:font-light placholder:text-amber-400 py-2 px-3 rounded-full w-full ring-amber-300 ring-1" />
                <button type="submit" className="bg-amber-400 py-2 px-4 rounded-full text-white text-sm mt-5">Submit</button>
            </form>
        </div>
    )
}


export default Form