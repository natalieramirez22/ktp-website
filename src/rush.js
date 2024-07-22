import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from './CalendarIcon';
import PinIcon from './PinIcon';

function Rush() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between w-full p-4">
        {/* Logo */}
        <div className='flex justify-start'>
          <a href='/'>
            <img src={`${process.env.PUBLIC_URL}/ktp_logo.png`} alt="Logo" className="w-32 h-auto"/>
          </a>
        </div>

        {/* Nav */}
        <div className='flex justify-center space-x-20'>
          <Link className="hover:text-blue-700 font-medium" to="/about">About Us</Link>
          <Link className="text-blue-700 font-medium" to="/rush">Rush</Link>
          <Link className="hover:text-blue-700 font-medium" to="/members">Members</Link>
          <Link className="hover:text-blue-700 font-medium" to="/nationals">Nationals</Link>
        </div>

        {/* Life App */}
        <div className='flex justify-end'>
          <a href='/lifeapp'>
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' className="w-40 h-auto"/>
          </a>
        </div>
      </div>
      
      <div className="px-32">
      {/* Page content */}

        <div className="relative py-32 z-10">
          {/* Header */}
          <div className="flex flex-col text-center">
            <h1 className="text-5xl font-black">Learn about Rushing!</h1>
            <p className="text-xl mt-4 mb-16 font-medium" style={{ color: 'grey' }}>
              Applications open in the fall, come back later for a set timeline and to learn more about KTP! Here's our rush schedule:
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex justify-between">
          {/* Timeline */}
          <div className="relative flex-1 mr-8">
            <div className="border-l-2 border-dotted border-gray-400 absolute h-full left-4 top-0 transform -translate-x-1/2"></div>

            {/* Open House */}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Open House</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">January 22nd</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Blau Auditorium</p></div>
                </p>
                <p className="text-gray-600 flex items-center">Join us for one of our Open Houses! First, we'll give<br></br>a presentation about what it means to be a brother in KTP.</p>
              </div>
            </div>

            {/* Application Deadline */}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Application Deadline</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">January 22nd</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Blau Auditorium</p></div>
                </p>
                <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg">Submit on Forms</button>
              </div>
            </div>

            {/* Meet & Greet */}
            <div className="relative mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Meet & Greet</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">January 22nd</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Blau Auditorium</p></div>
                </p>
                <p className="text-gray-600 flex items-center">Meet the brothers of KTP!</p>
              </div>
            </div>
          </div>

          {/* Rush Video */}
          <div className="absolute blob-c z-0">
            <div className="shape-blob rush-static-green"></div>
            <div className="shape-blob rush-static-blue"></div>
          </div>
          <div className="w-1/3 relative rounded-xl p-2">
            <iframe 
              className="rounded-xl"
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/WuihbLVE6Zo?si=7lMqZdXYe162kOob" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>  
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rush;
