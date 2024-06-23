import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="blob-c">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
        <div className="shape-blob three"></div>
        <div className="shape-blob four"></div>
        <div className="shape-blob five"></div>
        <div className="shape-blob six"></div>
        <div className="shape-blob seven"></div>
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between w-full p-4 z-10">
        {/* Logo */}
        <div className='flex justify-start'>
          <a href='/'>
            <img src={`${process.env.PUBLIC_URL}/ktp_logo.png`} alt="Logo" className="w-32 h-auto" />
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
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' className="w-40 h-auto" />
          </a>
        </div>
      </div>

      {/* Middle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-5xl font-black z-10" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className='text-center'>
          We're the University of<br />
          Michigan's premier technology<br />
          fraternity
        </div>
      </div>

      {/* Images */}
      <img
        src={`${process.env.PUBLIC_URL}/cross.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '15%',
          left: '6%',
          width: '15vw',
          height: 'auto',
          transform: 'rotate(15deg)',
          borderRadius: '10px'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/rock.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '55%',
          left: '6%',
          width: '15vw',
          height: 'auto',
          transform: 'rotate(-19deg)',
          borderRadius: '10px'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/paddle.jpg`}
        alt="image"
        style={{
          position: 'absolute',
          top: '4%',
          left: '93%',
          width: '12vw',
          height: 'auto',
          transform: 'rotate(20deg)',
          borderRadius: '10px'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/retreat.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '37%',
          left: '80%',
          width: '16vw',
          height: 'auto',
          transform: 'rotate(20deg)',
          borderRadius: '10px'
        }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/hug.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '55%',
          left: '96%',
          width: '16vw',
          height: 'auto',
          transform: 'rotate(20deg)',
          borderRadius: '10px'
        }}
      />
    </div>
  );
}

export default Home;
