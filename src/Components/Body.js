import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import image from './Images/dev-ed-wave.png';


function Body() {
  return (
    <>
      <div className='px-36 py-12 flex justify-center items-center flex-col'>
        <h1 className='text-7xl mb-8 text-[#06b6d4] '>Ayush</h1>
        <h3 className='text-4xl text-bold mb-5 '>Developer and designer</h3>
        <p className='text-2xl mb-8'> Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</p>
        <div className=''>
          <TwitterIcon className='text-2xl mr-7' />
          <LinkedInIcon className='mr-7 text-3xl'/>
          <YouTubeIcon className='text-3xl' />
        </div>
      </div>

      <div className='flex justify-center items-center py-16  '>
          <img src={image} alt="anime pic" className='border-0 rounded-[50%] w-96 h-96 bg-gradient-to-b from-[#06b6d4] to-white'/>
      </div>
    </>
  )
}

export default Body