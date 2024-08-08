import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the custom CSS file
import Footer from './Footer.js';

// Import images (replace with actual paths to your logo images)
import MichiganLogo from './img/universities/michigan.png';
import NorthwesternLogo from './img/universities/northwestern.png';
import UChicagoLogo from './img/universities/uchicago.png';
import RutgersLogo from './img/universities/rutgers.png';
import BULogo from './img/universities/bu.png';
import USCLogo from './img/universities/usc.png';
import SyracuseLogo from './img/universities/syracuse.png';
import PittLogo from './img/universities/pitt.png';
import UNCLogo from './img/universities/unc.png';
import MarylandLogo from './img/universities/maryland.png';
import TexasLogo from './img/universities/texas.png';
import ColoradoLogo from './img/universities/colorado.png';

const logos = [
  { src: MichiganLogo, alt: 'University of Michigan' },
  { src: PittLogo, alt: 'University of Pittsburgh' },
  { src: SyracuseLogo, alt: 'Syracuse University' },
  { src: RutgersLogo, alt: 'Rutgers University' },
  { src: BULogo, alt: 'Boston University' },
  { src: USCLogo, alt: 'University of Southern California' },
  { src: NorthwesternLogo, alt: 'Northwestern University' },
  { src: UChicagoLogo, alt: 'University of Chicago' },
  { src: UNCLogo, alt: 'University of North Carolina' },
  { src: MarylandLogo, alt: 'University of Maryland' },
  { src: TexasLogo, alt: 'University of Texas at Austin' },
  { src: ColoradoLogo, alt: 'University of Colorado Boulder' },
];

function Nationals() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between w-full p-4">
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
          <Link className="text-blue-700 font-medium" to="/nationals">Nationals</Link>
        </div>

        {/* Life App */}
        <div className='flex justify-end'>
          <a href='/lifeapp'>
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' className="w-40 h-auto" />
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-row items-center justify-center px-8 py-16">
        <div className="text-left mb-16 w-1/3 ml-32">
          <h1 className="text-5xl font-bold">KTP Nationals</h1>
          <p className="text-lg mt-4 text-gray-600">
            With over 15+ chapters across the <br /> nation KTP grows by day.
          </p>
          <Link to="/start-chapter" className="relative mt-8 inline-block py-2 px-4 rounded-full shadow-md border-2 border-blue-500 text-blue-500 bg-white hover:bg-blue-100 transition">
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                <div className="relative flex items-center" style={{ width: '54px', height: '24px' }}>
                  <img src={UChicagoLogo} alt="University of Chicago" className="absolute w-6 h-6 rounded-md" style={{ left: 0, zIndex: 1 }} />
                  <img src={MichiganLogo} alt="University of Michigan" className="absolute w-6 h-6 rounded-md" style={{ left: '18px', zIndex: 2 }} />
                  <img src={NorthwesternLogo} alt="Northwestern University" className="absolute w-6 h-6 rounded-md" style={{ left: '36px', zIndex: 1 }} />
                </div>
              </div>
              <span className="ml-12">Start a KTP Chapter</span>
            </div>
          </Link>
        </div>
        <div className="logos-grid custom-grid w-full max-w-screen-lg">
          {logos.map((logo, index) => (
            <div key={index} className="logo-container-2">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Nationals;
