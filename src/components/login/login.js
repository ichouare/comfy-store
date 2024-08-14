import apiInstance from '../../axois/axios'
import React, { useState , useRef, useEffect, useContext} from 'react'
import Notification from '../notification/Notification'
import { toast } from 'react-toastify'
import AuthContext from '../../context/AuthProvider'
import { useNavigate , useLocation } from 'react-router-dom';

const Login = () => {
  const [regiter, setRegister ] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
  const [username, setusername] = useState("")
  const [error , setError] = useState('')
  const focusRef = useRef(null)
  const {auth, setAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if(auth?.login === true)
      {
        navigate(from, {replace : true})   
    }
    else
    focusRef?.current?.focus()
  }, [])


  useEffect(()=> {
    setError('')
  }, [username, email, pass])

  const CreateNewUser = async (e) => {
    e.preventDefault();
    if(username &&  pass &&  email)
      {
        setError('')
        try{
          const response = await apiInstance.post('register/', {
            username,
            email,
             "password" : pass,
          })
         const {data} = response
         setEmail('')
        setpass('')
        setusername('')
        toast.success("user is successfuly register")
        navigate(from, {replace : true})   
        setTimeout(() => {
          setRegister(true)
        }, 2000)
        
        }catch (error)
        {
            if(!error.response)
                setError("No server Response")
            else if (error.response.status === 409)
              {
                const {data} = error.response
                setError(data)
              }
            else
              setError("Registration Failed")
        }
 
        
      }
    else
    {
      setError("all of fields are required ")
      return;
    }

  }
  const loginuser = async (e) => {
    e.preventDefault();
    if(email && pass){
      try{
        const response = await apiInstance.post('login/',
          {
          "username" : email,
          "password" :  pass,
        },)
        const {refresh, access} = response.data
  
        setAuth({refresh, access, "login" : true})
        setEmail('')
        setpass('')
       toast.success("user is successfuly login")
       navigate(from, {replace : true})   
      //  setTimeout(()=>{
      //  }, 500)
      }catch (error)
      {
        setAuth({
          "login" : false
        })
        toast.error("login Failed")
        setError("login Failed")
      }

    }
    else
    {
      console.log("all fields must be not blank")
    }
  }

   if(regiter)
  {
    return (
      <section className='w-full min-h-screen  grid place-content-center  '>
            <div className='w-[380px] h-[540px] bg-white rounded-xl flex flex-col    py-6 shadow '>
              <h1 className=' text-[#50637C] capitalize text-3xl font-bold tracking-wide self-center' required>login</h1>
              <form className=' flex h-full flex-col justify-around  p-6 ' onSubmit={loginuser}>
                <div className='flex flex-col '>
              <label htmlFor='username' className='capitalize text-[#50637C] text-base tracking-wide mb-3' required  >username</label>
              <input name='email' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='text' 
                value={email}
                ref={focusRef}
                autoComplete={false}
                onChange={(e) => setEmail(e.target.value)}
              />
                </div>
                <div className='flex flex-col '>
              <label htmlFor='password' className='capitalize text-[#50637C] text-base tracking-wide mb-3' required>password</label>
              <input name='password' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='password' 
              value={pass}
              autoComplete={false}
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
            < Notification/>
      </section >
    )
  }
  else
  {
    return(<section className='w-full min-h-screen  grid place-content-center  '>
    <div className='w-[380px] h-[540px] bg-white rounded-xl flex flex-col    py-6 shadow '>
      <h1 className=' text-[#50637C] capitalize text-3xl font-bold tracking-wide self-center'>login</h1>
      <form   className=' flex h-full flex-col justify-around  p-6' onSubmit={CreateNewUser} >
        <div className='flex flex-col '>
      <label htmlFor='username' className='capitalize text-[#50637C] text-base tracking-wide mb-3' required >username</label>
      <input name='username' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='text' 
      value={username}
      autoComplete={false}
      onChange={(e) => setusername(e.target.value)}
      />
        </div>
        <div className='flex flex-col '>
      <label htmlFor='email' className='capitalize text-[#50637C] text-base tracking-wide mb-3' required>email</label>
      <input name='email' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='email' 
      value={email}
      autoComplete={false}
      onChange={(e) => setEmail(e.target.value)}
      />
        </div>
        <div className='flex flex-col '>
      <label htmlFor='password' className='capitalize text-[#50637C] text-base tracking-wide mb-3' required >password</label>
      <input name='password' className='border p-3 rounded-lg outline-offset-4 outline-[#EEE]' type='password' 
      value={pass}
      autoComplete={false}
      onChange={(e) => setpass(e.target.value)}
      />
        </div>
        <button  disabled={ (username && pass && email) ? false : true}className='w-full p-3 text-center text-white bg-blue-600 rounded-lg text-base uppercase tracking-wider font-medium
         '>regiter</button>
        {error && <div className='flex flex-row items-center justify-center' >
            <p className=' tracking-wider text-red-500 first-letter:uppercase'>{error}</p>
        </div>}
        <div className='flex flex-row items-center justify-center'>
            <p className=' tracking-wider first-letter:uppercase'>Already a member?<span onClick={() => setRegister(!regiter)} className='text-blue-500 cursor-pointer'> login </span>  </p>
        </div>
      </form>
    </div>
   < Notification/>
</section >)
  }
}

export default Login