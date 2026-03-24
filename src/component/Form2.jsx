import { useState } from "react"
import { Eye } from 'lucide-react';

const Form2 = () =>{
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) =>{
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            console.log(formData)
        } catch (error) {
           console.log(error.message) 
        }
    }

    

    return(
        <div className="min-h-screen w-full flex items-center bg-slate-200 justify-center">
            <form onSubmit={handleSubmit} className="min-w-lg rounded-md bg-white flex flex-col gap-4 px-10 py-14">
                <input name="username" value={formData.username} onChange={handleInputChange} placeholder="username" type="text" className="placeholder:text-sm placeholder:font-light placholder:text-amber-400 py-2 px-3 rounded-full w-full ring-amber-300 ring-1"  />
               <div className="relative"> 
                <input name="password" value={formData.password} onChange={handleInputChange} placeholder="password" type="password" className=" placeholder:text-sm placeholder:font-light placholder:text-amber-400 py-2 px-3 rounded-full w-full ring-amber-300 ring-1" />
                <Eye className="absolute top-[30%] right-[5%]" /> 
               </div>
                <button type="submit" className="bg-amber-400 py-2 px-4 rounded-full text-white text-sm mt-5">Submit</button>
            </form>
        </div>
    )
}


export default Form2