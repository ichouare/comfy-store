import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [regiter, setRegister ] = useState(true)
  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
  const [username, setusername] = useState("")


  const createUser = () => {
    console.log("data", username, pass, email)
  }
  const loginuser = () => {
    console.log("data: ", pass, email)
  }

  if(regiter)
  {
    return (
      <section className='w-full min-h-screen  grid place-content-center  '>
            <div className='w-[380px] h-[540px] bg-white rounded-xl flex flex-col    py-6 shadow '>
              <h1 className=' text-[#50637C] capitalize text-3xl font-bold tracking-wide self-center'>login</h1>
              <form action='/Home' method='POST' className=' flex h-full flex-col justify-around  p-6 '>
                <div className='flex flex-col '>
              <label htmlFor='email' className='capitalize text-[#50637C] text-base tracking-wide mb-3'>email</label>
              <input name='email' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                </div>
                <div className='flex flex-col '>
              <label htmlFor='password' className='capitalize text-[#50637C] text-base tracking-wide mb-3'>password</label>
              <input name='password' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='password' 
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              
              />
                </div>
                <button className='w-full p-3 text-center text-white bg-blue-600 rounded-lg text-base uppercase tracking-wider font-medium
                 '>login</button>
                <button className='w-full p-3 text-center text-white bg-[#473AA2] rounded-lg text-base uppercase tracking-wider font-medium
                 '>guest user</button>
                <div className='flex flex-row items-center justify-center'>
                    <p className='capitalize tracking-wider'>Not a member yet?<span onClick={() => setRegister(!regiter)}  className='text-blue-500 cursor-pointer'> Register </span>  </p>
                </div>
              </form>
            </div>
      </section >
    )
  }
  else
  {
    return(<section className='w-full min-h-screen  grid place-content-center  '>
    <div className='w-[380px] h-[540px] bg-white rounded-xl flex flex-col    py-6 shadow '>
      <h1 className=' text-[#50637C] capitalize text-3xl font-bold tracking-wide self-center'>login</h1>
      <form  action="http://localhost:8000/register/" method='POST' className=' flex h-full flex-col justify-around  p-6 '>
        <div className='flex flex-col '>
      <label htmlFor='username' className='capitalize text-[#50637C] text-base tracking-wide mb-3'>username</label>
      <input name='username' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='text' 
      value={username}
      onChange={(e) => setusername(e.target.value)}
      />
        </div>
        <div className='flex flex-col '>
      <label htmlFor='email' className='capitalize text-[#50637C] text-base tracking-wide mb-3'>email</label>
      <input name='email' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='email' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
        </div>
        <div className='flex flex-col '>
      <label htmlFor='password' className='capitalize text-[#50637C] text-base tracking-wide mb-3'>password</label>
      <input name='password' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='password' 
      value={pass}
      onChange={(e) => setpass(e.target.value)}
      />
        </div>
        <button className='w-full p-3 text-center text-white bg-blue-600 rounded-lg text-base uppercase tracking-wider font-medium
         '>regiter</button>
        <div className='flex flex-row items-center justify-center'>
            <p className='capitalize tracking-wider'>Already a member?<span onClick={() => setRegister(!regiter)} className='text-blue-500 cursor-pointer'> login </span>  </p>
        </div>
      </form>
    </div>
</section >)
  }
}

export default Login