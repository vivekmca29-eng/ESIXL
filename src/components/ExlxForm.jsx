import React from 'react'

function ExlxForm() {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <h2>ExlsForm</h2>
        <div className='w-full border'>
          <div className='border h-32 p-4 gap-2 flex'>
                <div className='border inline-block h-32 w-32 basis-1/3 rounded'></div>
                <div className='border h-32 w-32 basis-1/3'></div>
                <div className='border h-32  w-32 basis-1/3'></div>
          </div>
             <div className='border flex p-4 gap-2'>
                <div className='border basis-1/3 rounded'>
                    <div className='border flex h-32 p-4 gap-2'>
                    <div className='border basis-1/3 rounded'></div>
                    <div className='border basis-1/3'></div>
                    <div className='border basis-1/3'></div>
                </div>
                </div>
                <div className='border basis-1/3'></div>
                <div className='border basis-1/3'></div>
          </div>
        </div>
    </div>
  )
}
export default ExlxForm
