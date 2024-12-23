import React, { useState } from 'react'
import { use } from 'react'

const Regiter = () => {
    const initial = {
        fullName: '',
        address: '',
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(initial)

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data: ", formData);
        setFormData(initial)
    }

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form className='w-[40rem] p-4 rounded-md shadow-md' action="" onSubmit={handleSubmit}>
                <h1 className='text-lg font-bold'>Register</h1>
                <input className='border-b-2 w-full p-1 outline-none mt-2 shadow-sm' value={formData.fullName} type="text" name="fullName" id="" placeholder='Enter your Full Name' onChange={handleChange} />
                <input className='border-b-2 w-full p-1 outline-none mt-2 shadow-sm' value={formData.address} type="text" name="address" id="" placeholder='Enter Address' onChange={handleChange} />
                <input className='border-b-2 w-full p-1 outline-none mt-2 shadow-sm' value={formData.email} type="email" name='email' id='' placeholder='Enter your Email' onChange={handleChange} />
                <input className='border-b-2 w-full p-1 outline-none mt-2 shadow-sm' value={formData.password} type="password" name='password' id='' placeholder='Enter Password' onChange={handleChange} />
                <div className='flex justify-center items-center'>
                    <button className='w-[4rem] bg-green-700 mt-4 p-1 rounded-md' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Regiter