'use client'
import { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useSelector , useDispatch} from "react-redux";
import { deletTodo } from "@/redux/todoSlice";
import Link from "next/link";
function todolist() {
  // useSelectou
  const getData = useSelector((state)=>state.todo.value);
  const dispatch = useDispatch()
  
  return (
    <main>
      <div className="w-2/6 mt-10 mx-auto">
        {
          getData.length > 0 ?
          (getData.map((item,index) => (
            <div key={item.id} className="bg-sky-200 w-4/5 m-auto rounded-md px-3 flex justify-between items-center gap-3 py-2 mb-2">
          <p>{index+1}</p>
          <div>
            <p>{item.text}</p>
          </div>
          <button onClick={() => dispatch(deletTodo(item.id))}>
            <MdDelete />
          </button>
        </div>
          ))) :
          (<div className="flex flex-col items-center gap-y-8">
            <p className="text-center text-red-500 text-2xl border-b-4 border-sky-200 ms-3">Todo list is empty</p>
          <Link href={'/todoin'} className="underline text-blue-600">Go and add todo </Link>
          </div>)
        }
      </div>
      <Toaster />
    </main>
  );
}
export default todolist;
