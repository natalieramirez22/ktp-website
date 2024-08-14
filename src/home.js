import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';

function Home() {
  return (
    <div className='homepage-grid'>
      <div className='glowing-circle z-2'></div>
      <div className='glowing-circle-2 z-1'></div>

      <Header></Header>

      <div className='flex flex-col'>
        {/* Main content */}
        <div className='flex flex-col items-center justify-center z-10'>
          <div className="font-black text-center w-[375px] sm:w-[450px] md:w-[550px] lg:w-[750px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-36" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            We’re the University of Michigan’s premier technology fraternity
          </div>

          <div className='text-[#707070] text-[16px] text-center mt-8 w-[400px] sm:w-[400px] md:w-[450px] lg:w-[500px] text-xs sm:text-sm lg:text-base'>
            <div>Founded in 2012 as the first KTP nationally, we're dedicated to uniting students across the nation for the love of technology</div>
          </div>

          <div className='contact-us text-blue-700 font-semibold text-lg mt-8 flex flex-row items-center justify-center' style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link to="/rush">Rush</Link>
          </div>
        </div>


      </div>

      {/* Images left side */}
      {/* <img
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
      {/* <img
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
      /> */}


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
              top: '160%',
              left: '3%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi.jpg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              top: '160%',
              left: '32%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/ab.jpg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/maria_pic.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/bance.jpg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi.jpg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/ab.jpg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/maria_pic.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
        
          <img
            src={`${process.env.PUBLIC_URL}/bance.jpg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi.jpg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/ab.jpg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/maria_pic.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

        </div>
      </div>

      {/* Life App */}
      <div id='life-app' className='flex flex-row justify-center items-center mb-16'>
        {/* Text */}
        <div className="text-4xl font-bold z-10 mr-24" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
          Kappa Theta Pi Life
          <div className='flex flex-row mt-8'>
            <a href='https://apps.apple.com/us/app/kappa-theta-pi-life/id1641588942' target="_blank" rel="noopener noreferrer" className='mr-4'>
              <img src={`${process.env.PUBLIC_URL}/app_store.svg`} alt="Image" style={{ height: '7vh' }} />
            </a>

            <a href='https://play.google.com/store/apps/details?id=com.ktpumich.ktp_rush&pli=1' target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/google_play.svg`} alt="Image" style={{ height: '7vh' }} />
            </a>
          </div>
        </div>

        {/* Phones */}
        <div className='flex flex-row'>
          <img src={`${process.env.PUBLIC_URL}/phone_frame_3.svg`} alt="Image" style={{ height: '75vh' }} className='mt-12 mr-8'/>
          <img src={`${process.env.PUBLIC_URL}/phone_frame_4.svg`} alt="Image" style={{ height: '75vh' }} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
