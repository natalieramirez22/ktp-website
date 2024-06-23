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
            <img src={`${process.env.PUBLIC_URL}/ktp_logo.png`} alt="Logo" class="w-32 h-auto"/>
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
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' class="w-40 h-auto"/>
          </a>
        </div>
      </div>
      
      <div className="px-32">
      {/* Page content */}

        <div className="relative py-32 z-10">
          {/* Header */}
          <div className="flex flex-col text-center">
            <h1 className="text-5xl font-black">Learn about Rushing!</h1>
            <p className=" text-xl mt-4 mb-32 font-medium" style={{ color: 'grey' }}>
              Applications open on xyz, learn more about KTP. Here's our rush schedule.
            </p>
          </div>
        </div>

        {/* Main Content */}

        {/* Timeline */}

        {/* Open House */}
        <div className="relative">
          <div className="border-l-4 border-blue-700 absolute h-full left-4 top-0"></div>
          <div className="mb-10 flex items-center">
            <div>
              <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center relative left-0.5 -ml-5" />
            </div>
            <div className="ml-12">
              <h2 className="text-xl font-bold mb-1">Open House</h2>
              <p className="text-gray-600 flex items-center mb-4">
                <CalendarIcon className="mr-4"/> January 22nd • <PinIcon className="ml-2 mr-2"/> Blau Auditorium
              </p>
              <p className="text-gray-600 flex items-center">Join us for one of our Open Houses! First, we'll give a presentation about what it means to be a brother in KTP.</p>
            </div>
          </div>

          {/* Application Deadline */}
          <div className="mb-10 flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center relative left-0.5 -ml-5">
            </div>
            <div className="ml-12">
              <h2 className="text-xl font-bold mb-1">Application Deadline</h2>
              <p className="text-gray-600 flex items-center mb-4">
                <CalendarIcon className="mr-4"/> January 22nd • <PinIcon className="ml-2 mr-2"/> Blau Auditorium
              </p>
              <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg">Submit on Forms</button>
            </div>
          </div>

          {/* Meet & Greet */}
          <div className="relative">
          <div className="border-l-4 border-blue-700 absolute h-full left-4 top-0"></div>
          <div className="mb-10 flex items-center">
            <div>
              <div className="w-4 h-4 rounded-full bg-blue-700 text-white flex items-center justify-center relative left-0.5 -ml-5" />
            </div>
            <div className="ml-12">
              <h2 className="text-xl font-bold mb-1">Meet & Greet</h2>
              <p className="text-gray-600 flex items-center mb-4">
                <CalendarIcon className="mr-4"/> January 22nd • <PinIcon className="ml-2 mr-2"/> Blau Auditorium
              </p>
              <p className="text-gray-600 flex items-center">In this event you can meet the brothers & xyz.</p>
            </div>
          </div>
          </div>
        </div>

        {/* Rush Video */}
        <div className="mt-10 flex justify-center">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/WuihbLVE6Zo?si=7lMqZdXYe162kOob" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>  
          </iframe>
        </div>

      </div>
    </div>

  );
}

export default Rush;
