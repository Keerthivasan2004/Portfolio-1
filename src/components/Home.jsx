import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <p className='text-pink-600'>Hi, my name is</p> */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Mark Elliot Zuckerberg
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          CEO of Facebook.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am American businessman and philanthropist. 
        I have co-founded the social media service Facebook, along with his Harvard roommates in 2004, and its parent company Meta Platforms (formerly Facebook, Inc.),
         of which I am the executive chairman, chief executive officer and controlling shareholder.
        </p>
        <div>
          <a href='/'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;