import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightSharpIcon from '@mui/icons-material/NightlightSharp';


function Navbar({ modes, color }) {

  return (
    <>
      <div className='flex justify-center  py-7'>
        <div className='w-9/12 flex justify-between items-center '>
          <h3 className='text-2xl font-bold'>DEVELOPED</h3>
          <div className='flex'>
            <p
              onClick={() => modes()}
              className='text-xl cursor-pointer' >

              {
                (color === "dark")
                  ? <LightModeIcon />
                  : <NightlightSharpIcon />
              }
            </p>
            <h3 className='text-white font-semibold text-xl ml-5 px-3 py-1 border-0 rounded-md bg-[#06b6d4] cursor-pointer '>Resume</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar