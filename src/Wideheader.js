import React from 'react';
import { Link } from 'react-router-dom';

const WideHeader = () => (
    <div>
        <div className="relative flex items-center justify-between w-full p-4 z-10">
            {/* Logo */}
            <div className='flex justify-start ml-16'>
                <a href='/'>
                    <img src={`${process.env.PUBLIC_URL}/ktp_logo.svg`} alt="Logo" className="w-24 h-auto mb-2" />
                    <img src={`${process.env.PUBLIC_URL}/ktp_alpha_chapter.svg`} alt="Logo" className="w-24 h-auto" />
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
            <div className='flex flex-row justify-end mr-16'>
                <a href='#life-app' className='flex flex-row justify-center items-center'>
                    <img src={`${process.env.PUBLIC_URL}/ktp_life_app.svg`} alt='Life App' className="w-8 h-auto mr-2" />
                    <p style={{ fontFamily: 'Inter', color: '#215EB1', fontWeight: '500' }}>KTP Life App</p>
                </a>
            </div>
        </div>
    </div>
);

export default WideHeader;
