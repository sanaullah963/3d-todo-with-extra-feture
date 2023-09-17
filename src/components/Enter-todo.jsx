'use client'
import React from 'react'
import { MdAssignmentAdd ,MdDelete } from "react-icons/Md";
function Entertodo() {
  return (
    <main className='flex px-4'>
      {/* left */}
      <div className=' flex flex-col justify-center items-start h-screen w-3/5'>
        <div className='flex flex-col bg-slate-800 p-10 mx-auto'>
          <textarea className='min-h-[60px] w-64 p-2 outline-none rounded-lg'></textarea>
          <button className='bg-sky-500 text-white mx-auto py-2 px-8 mt-3 rounded-lg text-3xl'><MdAssignmentAdd className=''/></button>
        </div>
      </div>
      {/* right */}
      <div className='w-2/5 pt-10 border-s-8 border-s-gray-900'>
        {/* item 1 */}
        <div className='bg-sky-200 w-4/5 m-auto rounded-md px-3 flex justify-between items-center gap-3 py-2 mb-2'>
          <p>1</p>
          <div >
            <p>this is som etext</p>
          </div>
          <button><MdDelete/></button>
        </div>
      </div>
    </main>
  )
}

export default Entertodo