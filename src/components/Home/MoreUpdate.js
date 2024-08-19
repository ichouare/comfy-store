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
    <div className='w-full h-full bg-black rounded-3xl p-4  flex flex-col items-center justify-center'>
        <h2 className=" w-full text-white text-center text-3xl font-bold font-Satoshi-LightItalic leading-9">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <Form >
      <form  className="space-y-8">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default MoreUpdate