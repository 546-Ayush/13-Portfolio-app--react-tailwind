import React from 'react';
import Img_1 from './Images/design.png';
import Img_2 from './Images/code.png';
import Img_3 from './Images/consulting.png';

function Services() {
  return (
    <>
      <div className='px-[80px]'>

        <div>
          <h3 className='text-4xl text-start my-5'>Services I offer</h3>
          <p className='text-xl text-start my-3'>Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className='text-[#06b6d4] ' >agencies</span> consulted for <span className='text-[#06b6d4]'>startups</span> and collaborated with talanted people to create digital products for both business and consumer use.</p>
          <p className='text-xl text-start mb-10'>I offer from a wide range of services, including brand design, programming and teaching.</p>
        </div>




        <div className='grid grid-cols-3 gap-8'>

          <div className='dark:bg-slate-300 dark:text-black dark:shadow-slate-700 border-0 rounded-3xl p-[50px] text-xl flex justify-center flex-col shadow-lg shadow-black'>
            <div className='w-full flex justify-center'>
              <img src={Img_1} alt="Icon-1" className='h-20 w-20 ' />
            </div>
            <h4 className='text-[25px] text-bold pt-10 pb-4'>Beautiful Designs</h4>
            <p className='pb-5' >Creating elegant designs suited for your needs following core design theory.</p>
            <p className='text-[#06b6d4] font-semibold dark:text-rose-700'>Design Tools I Use</p>
            <ul className='text-[20px]'>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Indesign</li>
            </ul>
          </div>

          <div className='dark:bg-slate-300 dark:text-black dark:shadow-slate-700 border-0 rounded-3xl p-[50px] text-xl flex justify-center flex-col shadow-lg shadow-black'>
            <div className='w-full flex justify-center'>
              <img src={Img_2} alt="Icon-1" className='h-20 w-20' />
            </div>
            <h4 className='text-[25px] text-bold pt-10 pb-4'>Code your dream project</h4>
            <p className='pb-5' >Do you have an idea for your next great website? Let's make it a reality.</p>
            <p className='text-[#06b6d4] font-semibold dark:text-rose-700'>Design Tools I Use</p>
            <ul className='text-[20px]'>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Indesign</li>
            </ul>
          </div>

          <div className='dark:bg-slate-300 dark:text-black dark:shadow-slate-700 border-0 rounded-3xl p-[50px] text-xl flex justify-center flex-col shadow-lg shadow-black'>
            <div className='w-full flex justify-center'>
              <img src={Img_3} alt="Icon-1" className='h-20 w-20' />
            </div>
            <h4 className='text-[25px] text-bold pt-10 pb-4'>Consulting</h4>
            <p className='pb-5' >Are you interested in feedback for your current project? I can give you tips and tricks to level it up.</p>
            <p className='text-[#06b6d4] font-semibold dark:text-rose-700'>Design Tools I Use</p>
            <ul className='text-[20px]'>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Indesign</li>
            </ul>
          </div>
        </div>


      </div>

    </>
  )
}

export default Services