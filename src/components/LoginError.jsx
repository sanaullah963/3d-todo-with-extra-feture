import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  let login = false;
  return (
    <main>
    {(()=>{
      if(login == false){
        return(
          <div className="border-2 m-2 px-20 border-red-900 bg-red-600 py-2 text-white flex justify-between items-center">
        <p className="flex items-center gap-2">please
         <Link className="text-white bg-gray-950 px-4 rounded-md py-1"
            href={"/login"}
          >Login</Link>your account</p>
            
          
          
        
        <div className="flex items-center gap-5">
          <p>You don't have account please</p>
          <Link
            className="text-white bg-gray-950 px-4 rounded-md py-1"
            href={"/signup"}
          >
            Signup
          </Link>
        </div>
      </div>
         )
      }
      else if(login == true){
        return <p></p>
      }
    })()}
      <Toaster/>
    </main>
  );
}

export default Login;
