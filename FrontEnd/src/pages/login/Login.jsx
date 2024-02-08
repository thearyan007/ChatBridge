import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = ()=> {
  const [userName, setUserName]= useState("");
  const [password, setPassword] = useState("");
  const {loading, login} = useLogin()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(userName, password);
  }

  return(<div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className='text-yellow-500'> ChatBridge</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>

        <Link to='/signup' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block '>Dont't have an account? SignUp</Link>
        <div>
          <button className='btn btn-block btn-sm mt-2' disabled={loading} >{
            loading?<span className='loading loading-spinner text-white'></span>:"Login"
          }</button>
        </div>
      </form>

    </div>
  </div>)
}

export default Login


/* STARTER FILE

const Login = ()=> {
  return(<div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className='text-yellow-500'> ChatBridge</span>
      </h1>
      <form>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
        </div>

        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
        </div>

        <a href='#' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block '>Dont't have an account? SignUp</a>
      </form>

      <div>
        <button className='btn btn-block btn-sm mt-2'>Login</button>
      </div>
    </div>
  </div>)
}

export default Login

*/