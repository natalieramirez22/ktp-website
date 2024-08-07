import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from './CalendarIcon';
import PinIcon from './PinIcon';
import Footer from './Footer.js';

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
            Welcome to Kappa Theta Pi's Fall 2024 Rush! <br></br>Here's our rush schedule, applications will open at the start of rush
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex justify-between">
          {/* Timeline */}
          <div className="relative flex-1 mr-8">
            <div className="border-l-2 border-dotted border-gray-400 absolute h-full left-4 top-0 transform -translate-x-1/2"></div>

            {/* Open House #1*/}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Open House #1</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">Friday, August 30th, 7:00-9:00PM</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Henderson Room (Michigan League)</p></div>
                </p>
                <p className="text-gray-600 flex items-center">Join us for one of our Open Houses! First, we'll give a presentation about what it means to be a brother in KTP. 
                Then, we'll break out into open discussion and you'll have a chance to ask our brothers any questions related to rush, Kappa Theta Pi, or anything else you may be wondering!</p>
              </div>
            </div>

            {/* Open House #2*/}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Open House #2</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">Sunday, September 1st, 7:00-9:00PM</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Kuenzel Room (Michigan Union)</p></div>
                </p>
                {/* <p className="text-gray-600 flex items-center">Join us for one of our Open Houses! First, we'll give a presentation<br></br>about what it means to be a brother in KTP. 
                Then, we'll break out<br></br>into open discussion and you'll have a chance to ask our brothers<br></br>any questions related to rush, Kappa Theta Pi,
                 or anything else<br></br>you may be wondering!</p> */}
              </div>
            </div>

            {/*DEI Panel*/}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">DEI Panel</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">Tuesday, September 3rd, 6:00-8:00 PM</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">NQ 2435</p></div>
                </p>
                <p className="text-gray-600 flex items-center">In KTP, we love to celebrate our members' diversity and share honest conversations about how the DEI climate can be 
                improved in KTP, on campus, and beyond. At our DEI Panel, you will have the opportunity to hear brothers' experiences as underrepresented minorities in tech. 
                After the panel, we'll break out into open discussion. Come learn about the many people and communities that make up KTP!</p>
              </div>
            </div>

            {/*Virtual Resume and Application Office Hours*/}
            <div className="mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Virtual Resume and Application Office Hours</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">Wednesday, September 4th, 6:00-8:00PM</p> • <div className="flex ml-3"><PinIcon /><p className="ml-1">Virtual (Zoom)</p></div>
                </p>
                <p className="text-gray-600 flex items-center">At this event, we'll offer some tips for crafting a strong resume, then we'll hop into breakout rooms 
                to offer you some help on your KTP Rush Applications!</p>
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
                  <CalendarIcon/><p className="ml-1 mr-3">Friday, September 5th, 11:59pm</p> 
                </p>
                <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg">Apply Here</button>
              </div>
            </div>

            {/* Closed Rush */}
            <div className="relative mb-10 flex items-center relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-700 z-10"></div>
              </div>
              <div className="ml-12 pl-4">
                <h2 className="text-xl font-bold mb-1">Closed Rush</h2>
                <p className="text-gray-600 flex items-center mb-4">
                  <CalendarIcon/><p className="ml-1 mr-3">Monday, September 9th - Thursday, September 19th</p> 
                </p>
                <p className="text-gray-600 flex items-center">Our Closed Rush is invite-only. KTP's closed rush process consists of 1:1 coffee chats, three events for us to get to know each other, and a final round of interviews.</p>
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
      <Footer></Footer>
    </div>
  );
}

export default Rush;
