import React from 'react';
import port_img_1 from './Images/web1.png';
import port_img_2 from './Images/web2.png';
import port_img_3 from './Images/web3.png';
import port_img_4 from './Images/web4.png';
import port_img_5 from './Images/web5.png';
import port_img_6 from './Images/web6.png';
 
function Portfolio() {
  return (
    <>
      <div className='px-[80px] py-32'>

        <div>
          <h3 className='text-4xl text-start my-5'>Services I offer</h3>
          <p className='text-xl text-start my-3'>Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className='text-[#06b6d4] ' >agencies</span> consulted for <span className='text-[#06b6d4]'>startups</span> and collaborated with talanted people to create digital products for both business and consumer use.</p>
          <p className='text-xl text-start mb-10'>I offer from a wide range of services, including brand design, programming and teaching.</p>
        </div>

        <div className='grid grid-cols-2 gap-11'>
          <div>
            <img src={port_img_1} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
          <div>
            <img src={port_img_2} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
          <div>
            <img src={port_img_3} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
          <div>
            <img src={port_img_4} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
          <div>
            <img src={port_img_5} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
          <div>
            <img src={port_img_6} alt="Portfolio-1" className='border-0 rounded-3xl h-80 w-[700px]' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Portfolio