import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center  '>

       <form method="POST" action="https://getform.io/f/8e172066-4931-48a4-bc28-f531825f146d" className='flex flex-col max-w-[600px] w-full mt-8'>
          <div className='=pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 items-center  '>Contact</p>
            <p className='text-gray-300 py-4'>//submit the form below or shoot me an email</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 ' type='text' placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
          <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>






       </form>






    </div>
  )
}

export default Contact