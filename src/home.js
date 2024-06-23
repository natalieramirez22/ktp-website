import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div class="blob-c">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
        <div class="shape-blob seven"></div>
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between w-full p-4 z-10">
        {/* Logo */}
        <div className='flex justify-start'>
          <a href='/'>
            <img src={`${process.env.PUBLIC_URL}/ktp_logo.png`} alt="Logo" class="w-32 h-auto"/>
          </a>
        </div>

        {/* Nav */}
        <div className='flex justify-center space-x-20'>
          <Link className="hover:text-blue-700 font-medium" to="/about">About Us</Link>
          <Link className="hover:text-blue-700 font-medium" to="/rush">Rush</Link>
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

      {/* Middle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-4xl font-black z-10" style={{fontFamily: 'Inter, sans-serif'}}>
        <div className='text-center'>
          We're the University of<br />
          Michigan's premiere technology<br />
          fraternity
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/retreat.png`}
        alt="image"
        style={{
          position: 'absolute',
          top: '15%',
          left: '12%',
          width: '15vw',
          height: 'auto'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/gameday.png`}
        alt="image"
        style={{
          position: 'absolute',
          top: '50%',
          left: '15%',
          width: '15vw',
          height: 'auto'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/gameday.png`}
        alt="image"
        style={{
          position: 'absolute',
          top: '50%',
          left: '15%',
          width: '15vw',
          height: 'auto'
        }}
      />
    </div>
  );
}

export default Home;