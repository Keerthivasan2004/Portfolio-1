import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mark Elliot Zuckerberg, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm passionate about connecting people and building technologies that enable meaningful social interactions. 
                I believe in the power of innovation to create positive change in the world, 
                and I'm excited about the future of technology and its potential to bring people together.
                I'm dedicated to building products that empower people to share and connect in new ways, 
                while also addressing the challenges that come with such a connected world.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;