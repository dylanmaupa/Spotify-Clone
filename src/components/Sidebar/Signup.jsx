import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className='fixed bottom-0 signup_bar flex text-sm items-center justify-between px-4 py-2 mx-2'>
        <div>
            <p className="uppercase">
                preview on spotify
            </p>
            <p className='font-bold'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed </p>
        </div>
        <button className="rounded-full text-black mt-4 px-8 py-2 text-lg bg-white font-semibold">Signup Free</button>
    </div>
  )
}

export default Signup