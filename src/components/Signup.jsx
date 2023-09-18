'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Toaster } from 'react-hot-toast'

function Signup() {
  // useState
  
  // const [user, setUser]=useState({})
  // dispatch
  const dispatch = useDispatch();
  // useSelector
  const getUsersInfo = useSelector((state)=>state.todo)

  const from=(e) => {
    // send userInfo to local stor
    e.preventDefault()
    const inputData={
      name : e.target.name.value,
      email : e.target.email.value,
      password : e.target.password.value,
    }
    
  }


  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
        <form onSubmit={from}  className='flex flex-col gap-y-3 w-96 bg-sky-400 p-5 mt-10'>
          <input name='name' className='rounded-lg h-10 ps-3' type="text" placeholder='Your name'/>
          <input name='email' className='rounded-lg h-10 ps-3' type="email" placeholder='Your email'/>
          <input name='password' className='rounded-lg h-10 ps-3' type="password" placeholder='Your password'/>
          <button type='submit' className='bg-gray-950 text-white py-3 rounded-lg text-2xl'>signup</button>
        </form>
          <p className='mt-5'>I have an account <Link className='text-blue-500 underline' href={'/login'}>login</Link> </p>
      </div>
      <Toaster/>
    </main>
  )
}

export default Signup