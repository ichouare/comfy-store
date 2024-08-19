import { Frown } from 'lucide-react'
import React from 'react'
import { Button } from "../../@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form"
import { Input } from "../../@/components/ui/input"

const MoreUpdate = () => {
  return (
    <div className='w-full  md:w-[90%] md:min-h-[180px] h-full bg-black rounded-3xl px-4 py-3 flex flex-col md:flex-row items-center gap-4 justify-between'>
        <h2 className=" w-full text-white text-center text-3xl font-bold font-Satoshi-LightItalic leading-9">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <Form >
      <form  className="w-full flex flex-col  gap-4 ">
        <input type='email' placeholder='enter your email address' className='h-12 rounded-[12px] w-full p-2  px-6  capitalize font-Satoshi-Regular  font-light bg-white text-black/80 outline-none' /> 
        <Button type="submit" className="h-12 bg-white  cursor-pointer w-full   rounded-[12px]  text-black/50 font-Satoshi-Regular  font-light tracking-wide ">Subscribe to Newsletter</Button>
      </form>text-bla
    </Form>
    </div>
  )
}

export default MoreUpdate