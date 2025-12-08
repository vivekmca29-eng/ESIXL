import React from 'react'

function Navbar() {
  return (
    <div class="max-w-screen-xl mx-auto border-b-[1px] py-2 px-4 flex items-center justify-between">
            <h1 className='text-lg'>APS Group</h1>
            <button className='border rounded  text-semibold leading-none tracking-tight py-2 px-4 capitalize'>
                sign out
            </button>
       </div>            
  )  
}
export default Navbar
