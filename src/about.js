import React from 'react';
import { Link } from 'react-router-dom';
import PresidentHeadshot from './img/members/Medway_Lily.jpg';
import History from './img/History.jpg';
import Footer from './Footer.js';
import { IoIosAnalytics, IoIosBookmarks, IoIosPaper, IoIosSpeedometer, IoIosGlobe } from 'react-icons/io';

function About() {
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
          <Link className="text-blue-700 font-medium" to="/about">About Us</Link>
          <Link className="hover:text-blue-700 font-medium" to="/rush">Rush</Link>
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
        <div className="relative py-16 z-10">
          {/* Header */}
          <div className="flex flex-col text-center">
            <h1 className="text-5xl font-black">About Us</h1>
            <p className="text-xl mt-4 mb-16 font-medium" style={{ color: 'grey' }}>
              Learn more about who we are at Kappa Theta Pi!
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col space-y-12"> {/* Added flex-col and space-y-12 for spacing between sections */}
          {/* President's Welcome */}
          <div className="flex">
            <div className="w-1/3">
              <img src={PresidentHeadshot} alt="President's Headshot" className="w-1/2 h-auto mx-auto" />
            </div>
            <div className="w-2/3">
              <h2 className="text-4xl font-bold text-ktp-dark-blue text-center pb-6">President's Welcome</h2>
                <p className="text-lg mt-4">Welcome to the Alpha Chapter of Kappa Theta Pi, Michigan’s premier professional technology fraternity. On behalf of our chapter, I am excited to welcome you to our fraternity’s website, where you can catch a glimpse of the passion and excellence that our chapter celebrates.
                                <br/><br/>As the nation’s first technology fraternity, Kappa Theta Pi offers brothers the support and resources to be extraordinary during their time at Michigan. Our brotherhood is centered around five pillars: professional development, alumni connections, social growth, technological advancement, and academic support. From project teams and study groups to professional development workshops and hackathons / design jams, we celebrate a culture of growth where brothers are supported and encouraged to pursue opportunities related to their passions for tech.
                                <br/><br/>Our chapter thrives on its diversity and would not be the same without each and every member contributing their unique experiences and perspectives. In addition to their dedication to KTP, our brothers are also student leaders for other organizations on campus, interns at a plethora of companies, research assistants, and instructional aides for their classes. During rush, we do not discriminate by school, major, gender, ethnicity, sexuality, or background; rather, we celebrate our brotherhood’s diversity and ultimately all come together united by our passion for technology.
                                <br/><br/>Reflecting on my time at Michigan, my involvement in KTP has been the most impactful part of my college experience. As a collective, Kappa Theta Pi fosters a culture of excellence as professionals, brothers, and friends. In KTP, I have witnessed the growth of some of Michigan’s most brilliant and ambitious professionals. I have seen first-hand the incredible things they can do when they put their minds and hearts into it. More importantly, I have been introduced to lifelong friends and connections who serve as a constant source of inspiration and always support me to be my full and best self.
                                <br/><br/>It is my absolute pleasure to serve as KTP’s president this year and I sincerely appreciate your interest in our fraternity. On this website, you will find information about rush and our brotherhood. Enjoy and please do not hesitate to reach out to our E-Board on the contact page if you have any questions!
                                <br/><br/>With love,
                                <br />Lily Medway
                                <br />President, 2024
                </p>
            </div>
          </div>

          {/* History */}
          <div className="flex">
            <div className="w-1/3">
              <img src={History} alt="KTP Founders" className="w-1/2 h-auto mx-auto" />
            </div>
            <div className="w-2/3">
              <h2 className="text-4xl font-bold text-ktp-dark-blue text-center pb-6">History</h2>
              <p className="text-lg mt-4">Kappa Theta Pi takes pride in being the first professional technology fraternity in the country. Our members learn a plethora of skills needed to stay knowledgeable about the tech industry, as well as a strong sense of professional development for future job positions.
                              <br/><br/>KTP was founded on January 10, 2012, with the mission to create a tech community that enthusiastic students could join. In making KTP, the founders set up a strong community that has only grown in the 11 years since its inception.
                              <br/><br/>Our members come from all around campus. We are designers, analysts, computer scientists, engineers, artists, entrepreneurs, economists, philosophers, psychologists, and more. What makes the KTP community strong is our shared passion for technology and our unique backgrounds meshing together as one.
                              <br/><br/>Our alumni are part of an extensive and tight-knit network that stretches across the country. They can be found from Seattle to New York, from Silicon Valley to Detroit, in both startup companies and larger businesses. Our alumni provide valuable insight for our members’ professional development.
              </p>
            </div>
          </div>

          {/* DEI Commitment */}
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-ktp-dark-blue pb-6 text-center">DEI Commitment</h2>
            <p className="text-lg mt-4 max-w-4xl text-left">The world of technology is unique, diverse, and multi-faceted. We believe that our brothers should be too. In Kappa Theta Pi, we’re passionate about cultivating an inclusive community that promotes and values diversity. Our dedication to diversity, equity, and inclusion is unwavering; these values are central to our mission and to our impact. We know that having heterogeneous perspectives helps generate better ideas to solve the nuanced problems of a changing — and increasingly diverse — world.
              <br/><br/>In KTP, we have a responsibility to address structural inequality in our communities as well as the social and cultural dimensions of technology. We are committed to harnessing the best of KTP — our people, platform, and technical innovation — to make lasting change inside and outside of our organization.
            </p>
          </div>

          {/* Pillars */}
          <div className="py-16 px-8 md:px-16 lg:px-32">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-ktp-dark-blue pb-6 text-center">Pillars</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Professional Development */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-650 ease-in-out hover:scale-110 hover:shadow-xl">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <IoIosAnalytics className="text-pink-500 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                <p className="text-gray-600">Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.</p>
              </div>

              {/* Alumni Connections */}
              <div className="bg-white-50 shadow-lg rounded-lg p-6 text-center transform transition-transform duration-650 ease-in-out hover:scale-110 hover:shadow-xl">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <IoIosBookmarks className="text-orange-500 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Alumni Connections</h3>
                <p className="text-gray-600">Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!</p>
              </div>

              {/* Social Growth */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-650 ease-in-out hover:scale-110 hover:shadow-xl">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <IoIosPaper className="text-teal-500 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Social Growth</h3>
                <p className="text-gray-600">The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, retreat, and apple picking.</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* Technical Advancement */}
            <div className="bg-white-50 shadow-lg rounded-lg p-6 text-center transform transition-transform duration-650 ease-in-out hover:scale-110 hover:shadow-xl">
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <IoIosSpeedometer className="text-green-500 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Advancement</h3>
              <p className="text-gray-600">Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.</p>
            </div>

              {/* Academic Support */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-650 ease-in-out hover:scale-110 hover:shadow-xl">
                <div className="flex justify-center items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <IoIosGlobe className="text-blue-500 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Support</h3>
                <p className="text-gray-600">Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      </div>
  );
}

export default About;
