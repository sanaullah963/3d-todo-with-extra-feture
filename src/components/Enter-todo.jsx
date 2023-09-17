'use client'
import React, { useState } from 'react'
import { MdAssignmentAdd ,MdDelete } from "react-icons/Md";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, deletTodoItem } from '@/redux/todoSlice';
function Entertodo() {
  // dispatch
  const dispatch = useDispatch()
  //useSelector
 const getData = useSelector((state)=>state.todo.value)
  // useState
  const [text,setText]=useState('');
  const [si,setSi]=useState(0);
  // input textarea
  const input= (e) =>setText(e.target.value)
  // add button
  const addBtn=()=>{
    if(text == ''){
      toast.error('Please enter some text')
    }else{
      setSi(si + 1)
      toast.success('Todo added successfull');
      dispatch(addTodoItem({
        id : Math.random(),
        si : si, 
        text : text,
      }));
      console.log(deletTodoItem);
    }
    setText('');
  }
  return (
    <main className='flex px-4'>
      {/* left */}
      <div className=' flex flex-col justify-center items-start h-screen w-3/5'>
        <div className='flex flex-col bg-slate-800 p-10 mx-auto'>
          <textarea onChange={input} value={text} className='min-h-[60px] w-64 p-2 outline-none rounded-lg'></textarea>
          <button onClick={addBtn} className='bg-sky-500 text-white mx-auto py-2 px-8 mt-3 rounded-lg text-3xl'><MdAssignmentAdd className=''/></button>
        </div>
      </div>
      {/* right */}
      <div className='w-2/5 pt-10 border-s-8 border-s-gray-900'>
        {/* item start*/}
        {
          getData.length>0 ?
          (getData.map((item)=>(
            <div className='bg-sky-200 w-4/5 m-auto rounded-md px-3 flex justify-between items-center gap-3 py-2 mb-2'>
          <p>{item.si}</p>
          <div >
            <p>{item.text}</p>
          </div>
          <button onClick={()=>dispatch(deletTodoItem(item.id))} >
            <MdDelete/>
            </button>
        </div>
          ))):
          (<p className='text-center text-red-500 text-2xl'>Todo list is empty</p>)
        }
        
          
        
      </div>
      <Toaster position="right-bottom"/>
    </main>
  )
}

export default Entertodo