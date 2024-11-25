import React from 'react'


const options = [
    {
      id:1,
      name:"Home"
    },
    {
        id:2,
        name:"Features"
    },
    {
        id:3,
        name:"Products"
    },
    {
        id:4,
        name:"Projects"
    },
    {
        id:5,
        name:"About us"
    }
]

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 w-full h-[100px] bg-[rbg(25
    4,254,254)] items-center'>
       <div>
          <h2>Company Logo</h2>
       </div>

       <div className='flex gap-5 list-none font-semibold'>
          {
            options?.map(item => <li key={item?.id}>{item?.name}</li>)
           }
       </div>

       <div>
         <button className='bg-white text-black border-2 font-semibold border-black rounded-lg px-4 py-1'>Contact us</button>
       </div>
    </div>
  )
}

export default Navbar