import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer.js';

function Home() {
  return (
    <div className='homepage-grid'>
      {/* <div class="blob-c">
        <div class="shape-blob six"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob two"></div>
      </div> */}
      <div className='glowing-circle z-2'></div>
      <div className='glowing-circle-2 z-1'></div>

      {/* Main content */}
      <div className='homepage-content'>
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
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
          <div className="text-5xl font-bold z-10 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
            <div className='mb-2'>We’re the University of</div>
            <div className='mb-2'>Michigan’s premier technology</div>
            <div>fraternity</div>
          </div>

          <div className='text-[#707070] text-[16px] text-center mt-12'>
            <div>Founded in 2012 as the first KTP nationally, we're dedicated to uniting</div>
            <div>students across the nation for the love of technology</div>
          </div>

          <div className='contact-us text-blue-700 font-semibold text-lg mt-12 flex flex-row items-center justify-center' style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* <img src={`${process.env.PUBLIC_URL}/umich.png`} alt="Logo" className="w-8 h-auto" /> */}
            <Link to="/rush">Rush</Link>
          </div>
        </div>
      </div>

      {/* Images left side */}
      <img
        src={`${process.env.PUBLIC_URL}/yummers.jpeg`}
        alt="image"
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '14vw',
          height: 'auto',
          transform: 'rotate(15deg)',
          borderRadius: '25px'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/rock.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '55%',
          left: '10%',
          width: '14vw',
          height: 'auto',
          transform: 'rotate(-19deg)',
          borderRadius: '25px'
        }}
      />

      {/* Images right side */}
      <img
        src={`${process.env.PUBLIC_URL}/paddle.jpg`}
        alt="image"
        style={{
          position: 'absolute',
          top: '0%',
          left: '90%',
          width: '13vw',
          height: 'auto',
          transform: 'rotate(13deg)',
          borderRadius: '25px'
        }}
      />

      <img
        src={`${process.env.PUBLIC_URL}/retreat.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '45%',
          left: '81%',
          width: '15vw',
          height: 'auto',
          transform: 'rotate(13deg)',
          borderRadius: '25px'
        }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/hug.JPEG`}
        alt="image"
        style={{
          position: 'absolute',
          top: '70%',
          left: '95%',
          width: '15vw',
          height: 'auto',
          transform: 'rotate(13deg)',
          borderRadius: '25px'
        }}
      />


      {/* HOMEPAGE 2 -- Sabrina */}

      <div className='homepage-content'>
        <div className='flex items-start justify-center min-h-screen'>
          <div className='w-3/4 flex justify-end'>
            <div className='text-section p-12 mt-40'>

              <div className='text-[#707070] text-[16px] text-left'>
                <div>Founded in 2012, we are, </div>
              </div>

              <div className="text-4xl font-bold text-left mt-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
                <div className='mb-2'>The first technology</div>
                <div className='mb-2'>fraternity in the nation.</div>
              </div>

              <div className='more-about-us font-semibold text-sm mt-12 flex flex-row items-center justify-center' style={{ fontFamily: 'Inter, sans-serif' }}>
                <Link className="hover:text-blue-700 font-medium" to="/about">
                  More About Us 
                  <svg className="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      

      {/* Images for homepage2*/}
      <div className='flex flex-wrap justify-center mt-10'>
        <img
          src={`${process.env.PUBLIC_URL}/lucas.jpg`}
          alt="Image 6"
          style={{
            position: 'absolute',
            top: '105%', 
            left: '3%',
            height: '48vh',
            width: 'auto'
          }}
        />

        <img
          src={`${process.env.PUBLIC_URL}/oldies.jpg`}
          alt="Image 7"
          style={{
            position: 'absolute',
            top: '105%',
            left: '23%',
            height: '48vh',
            width: 'auto'
          }}
        />

        <div className='scrolling-images'>
          <img
            src={`${process.env.PUBLIC_URL}/bance.jpg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              left: '3%',
              height: '19vw',
              width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi.jpg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              left: '32%',
              height: '19vw',
              width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/ab.jpg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/maria_pic.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/bance.jpg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi.jpg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/ab.jpg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/maria_pic.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              height: '19vw',
              width: 'auto',
            }}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}


export default Home;
