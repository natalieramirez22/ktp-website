import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

// Import images
import jerushaImage from './img/jerusha.jpg';
import danielImage from './img/Headshot.jpeg';
import logo1 from './Logos/path_to_logo1.png';
import logo2 from './Logos/path_to_logo2.png';
import logo3 from './Logos/path_to_logo3.png';
import logo4 from './Logos/path_to_logo4.png';
import logo5 from './Logos/path_to_logo5.png';
import logo6 from './Logos/path_to_logo6.png';
import logo7 from './Logos/path_to_logo7.png';
import logo8 from './Logos/path_to_logo8.png';
import logo9 from './Logos/path_to_logo9.png';
import logo10 from './Logos/path_to_logo10.png';
import logo11 from './Logos/path_to_logo11.png';
import logo12 from './Logos/path_to_logo12.png';
import logo13 from './Logos/path_to_logo13.png';
import logo14 from './Logos/path_to_logo14.png';
import logo15 from './Logos/path_to_logo15.png';
import logo16 from './Logos/path_to_logo16.png';
import logo17 from './Logos/path_to_logo17.png';
import logo18 from './Logos/path_to_logo18.png';
import logo19 from './Logos/path_to_logo19.png';
import logo20 from './Logos/path_to_logo20.png';
import logo21 from './Logos/path_to_logo21.png';
import logo22 from './Logos/path_to_logo22.png';
import logo23 from './Logos/path_to_logo23.png';
import logo24 from './Logos/path_to_logo24.png';
import logo25 from './Logos/path_to_logo25.png';
import logo26 from './Logos/path_to_logo26.png';
import logo27 from './Logos/path_to_logo27.png';
import logo28 from './Logos/path_to_logo28.png';
import logo29 from './Logos/path_to_logo29.png';
import logo30 from './Logos/path_to_logo30.png';

// Importing member images
import LilyMedwayImage from './img/members/Medway_Lily.jpg';
import ThomasJoppichImage from './img/members/Joppich_Thomas.jpg';
import AgnesMarImage from './img/members/Mar_Agnes.jpg';
import ShreyPandyaImage from './img/members/Pandya_Shrey.jpg';
import RonithGanjiguntaImage from './img/members/Ganjigunta_Ronith.jpg';
import ArchanaChandranImage from './img/members/Chandran_Archana.JPG';
import SujayMehtaImage from './img/members/Mehta_Sujay.jpg';
import QayfRasulImage from './img/members/Rasul_Qayf.jpg';
import KellyZhangImage from './img/members/Zhang_Kelly.jpg';
import LucasDiGiuseppeImage from './img/members/Digiuseppe_Lucas.jpg';
import JillUyImage from './img/members/Uy_Jill.JPG';
import MarleyDodenhofImage from './img/members/Filler.jpg';
import NatalieRamirezImage from './img/members/Ramirez_Natalie.jpg';
import AshleyGlabickiImage from './img/members/Glabicki_Ashley.jpg';
import FlynnLyonImage from './img/members/Lyon_Flynn.jpg';
import RishithaTalluriImage from './img/members/Talluri_Rishitha.jpg';
import RyanFosterImage from './img/members/Foster_Ryan.jpg';
import NeelufarJaberiImage from './img/members/Jaberi_Neelufar.jpg';
import AJDasImage from './img/members/Das_Arinjoy.JPG';
import JennyNiImage from './img/members/Ni_Jenny.jpg';
import MilesVasquezImage from './img/members/Vasquez_Miles.jpg';

// Sample members data with name, local image import, and category
const members = [
  { name: 'Lily Medway', imageUrl: LilyMedwayImage, category: 'E-Board', role: 'President', description: 'Oversees large scale changes in KTP and runs the Executive Board.' },
  { name: 'Thomas Joppich', imageUrl: ThomasJoppichImage, category: 'E-Board', role: 'VP of External Affairs', description: 'Responsible for senior experience, feedback, and nationals.' },
  { name: 'Agnes Mar', imageUrl: AgnesMarImage, category: 'E-Board', role: 'VP of Internal Affairs', description: 'Manages membership data, reserves spaces for chapter and events.' },
  { name: 'Shrey Pandya', imageUrl: ShreyPandyaImage, category: 'E-Board', role: 'VP of Finance', description: 'Budgets and plans various events, facilitates corporate sponsorships.' },
  { name: 'Ronith Ganjigunta', imageUrl: RonithGanjiguntaImage, category: 'E-Board', role: 'VP of Technical Development', description: 'Oversees committees, plans technical workshops and hackathons.' },
  { name: 'Archana Chandran', imageUrl: ArchanaChandranImage, category: 'E-Board', role: 'VP of Membership', description: 'Focuses on expanding rush to make it more inclusive.' },
  { name: 'Sujay Mehta', imageUrl: SujayMehtaImage, category: 'E-Board', role: 'VP of Marketing', description: 'Establishes consistent branding and develops marketing strategies.' },
  { name: 'Qayf Rasul', imageUrl: QayfRasulImage, category: 'E-Board', role: 'VP of Engagement', description: 'Plans brotherhood events to engage active members.' },
  { name: 'Kelly Zhang', imageUrl: KellyZhangImage, category: 'E-Board', role: 'VP of Professional Development', description: 'Facilitates educational workshops and provides career resources.' },
  { name: 'Lucas DiGiuseppe', imageUrl: LucasDiGiuseppeImage, category: 'Directors', role: 'Director of Community Service & Philanthropy', description: 'Coordinates community service events and philanthropic efforts.' },
  { name: 'Jill Uy', imageUrl: JillUyImage, category: 'Directors', role: 'Co-Director of Women\'s Empowerment', description: 'Empowers women through various initiatives and events.' },
  { name: 'Marley Dodenhof', imageUrl: MarleyDodenhofImage, category: 'Directors', role: 'Co-Director of Women\'s Empowerment', description: 'Empowers women through various initiatives and events.' },
  { name: 'Natalie Ramirez', imageUrl: NatalieRamirezImage, category: 'Directors', role: 'Director of Website Development', description: 'Develops and maintains the KTP website.' },
  { name: 'Ashley Glabicki', imageUrl: AshleyGlabickiImage, category: 'Directors', role: 'Co-Director of App Development', description: 'Develops and maintains KTP mobile applications.' },
  { name: 'Flynn Lyon', imageUrl: FlynnLyonImage, category: 'Directors', role: 'Co-Director of App Development', description: 'Develops and maintains KTP mobile applications.' },
  { name: 'Rishitha Talluri', imageUrl: RishithaTalluriImage, category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'Ryan Foster', imageUrl: RyanFosterImage, category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'Neelufar Jaberi', imageUrl: NeelufarJaberiImage, category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'AJ Das', imageUrl: AJDasImage, category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
  { name: 'Jenny Ni', imageUrl: JennyNiImage, category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
  { name: 'Miles Vasquez', imageUrl: MilesVasquezImage, category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
];

// Sample alumni data with Greek letter pledge class and names
const alumni = [
  { pledgeClass: 'Α', names: ['Brian Mansfield', 'Denny Tsai', 'Jacqueline Fontaine', 'Jing Guo', 'Julie Varghese', 'Louise Vongphrachanh', 'Nisha Dwivedi'] },
  { pledgeClass: 'Β', names: ['Andy Kolean', 'Chris Hong', 'Dan Miller', 'Hanwenbo Yang', 'Patrick Riggs', 'Phil Park'] },
  { pledgeClass: 'Γ', names: ['Aya Mimura', 'Ben Krawitz', 'Connor Waldo', 'Dan Sofferman', 'Dom Parise', 'Evan Stoddard', 'Greg Nelson', 'Jackie Franklin', 'Linglu Zhou', 'Louie Cordon', 'Megan Yee', 'Sam Bolin', 'Sarah Beadle', 'Shelby Lewin'] },
  { pledgeClass: 'Δ', names: ['Aadi Krishna', 'Abbey Lepisto', 'Angela Damato', 'Christine Yu', 'Colleen Miller', 'Dinker Ambe', 'Ellen Anderson', 'Greg Azevedo', 'Jaclyn Jaffe', 'Kelly Yuen', 'Kevin Cai', 'Lizzy Pratt', 'Melanie Kipke', 'Nicole Zeffer', 'Ryan Povall', 'Sonia Doshi'] },
  { pledgeClass: 'Ε', names: ['Andrew Riggs', 'Chris Elie', 'Dean Chenensky', 'Drew Dyer', 'Elisa Shibley', 'Isha Gupta', 'Jake Wellins', 'Kyle Moynihan', 'Lisa Lyons', 'Owen Yang', 'Patrick Wilson', 'Rebecca Lawson', 'Sam Dallstream', 'Yoav Helfman'] },
  { pledgeClass: 'Ζ', names: ['Alex House', 'Anavir Shermon', 'Ben Rathi', 'Blake Schewe', 'Bryce Beckwith', 'Christie Parkinson', 'Chuckry Vengadam', 'Connie Liu', 'Cooper Anstett', 'Courtney Quell', 'Dan Wilson', 'Kaitlin Singer', 'Maxim Aleksa', 'Michael Vander Lugt', 'Nimesha Muthya', 'Olivia Alge', 'Rishin Doshi'] },
  // Add more alumni pledge classes and names as needed
];

// Categories for the members
const categories = ['Actives', 'E-Board', 'Directors', 'Alumni'];

// Sample company logos
const companyLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18,
  logo19, logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30
];

const greekLetters = ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω'];

function Members() {
  const [selectedCategory, setSelectedCategory] = useState('Actives');
  const [selectedGreekLetter, setSelectedGreekLetter] = useState(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (categoryRefs.current[selectedIndex]) {
      const { offsetLeft, offsetWidth } = categoryRefs.current[selectedIndex];
      document.querySelector('.underline').style.left = `${offsetLeft}px`;
      document.querySelector('.underline').style.width = `${offsetWidth}px`;
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedGreekLetter(null); // Reset the selected Greek letter when changing category
  };

  const handleGreekLetterClick = (letter) => {
    setSelectedGreekLetter(letter);
  };

  const filteredAlumni = selectedGreekLetter ? alumni.filter(group => group.pledgeClass === selectedGreekLetter) : alumni;

  return (
    <div>
      <div className="absolute blob-c z-0">
        <div className="shape-blob eight"></div>
        <div className="shape-blob nine"></div>
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
          <Link className="text-blue-700 font-medium" to="/members">Members</Link>
          <Link className="hover:text-blue-700 font-medium" to="/nationals">Nationals</Link>
        </div>

        {/* Life App */}
        <div className='flex justify-end'>
          <a href='/lifeapp'>
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' className="w-40 h-auto" />
          </a>
        </div>
      </div>
      <div className="px-32">
        {/* Page content */}
        <div className="relative py-32 z-10">
          {/* Header */}
          <div className="flex flex-col text-center">
            <h1 className="text-5xl font-black">We Are A Team of <ReactTyped
              strings={['Developers', 'Designers', 'Leaders']}
              typeSpeed={60}
              backSpeed={50}
              backDelay={1500}
              loop
            /></h1>
            <p className="text-xl mt-4 mb-32 font-medium" style={{ color: 'grey' }}>
              What makes our community strong is our shared passion for technology and our <br />unique backgrounds meshing together as one.
            </p>
          </div>

          {/* Category filter buttons */}
          <div className="relative mb-8">
            <div className="flex justify-start space-x-32 border-b-2 border-gray-300">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`relative px-4 py-2 ${selectedCategory === category ? 'text-black font-bold' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick(category)}
                  ref={el => categoryRefs.current[index] = el}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="underline absolute bottom-0 h-0.5 bg-black transition-all duration-300"></div>
          </div>

          {/* Greek letter navigation */}
          {selectedCategory === 'Alumni' && (
            <div className="relative mb-8">
              <div className="flex justify-center space-x-4 border-b-2 border-gray-300 pb-2">
                <button
                  className={`px-2 py-1 text-gray-700 hover:text-black ${selectedGreekLetter === null ? 'font-bold text-black' : ''}`}
                  onClick={() => handleGreekLetterClick(null)}
                >
                  All
                </button>
                {greekLetters.map((letter) => (
                  <button
                    key={letter}
                    className={`px-2 py-1 text-gray-700 hover:text-black ${selectedGreekLetter === letter ? 'font-bold text-black' : ''}`}
                    onClick={() => handleGreekLetterClick(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Company logos collage */}
          {selectedCategory === 'Alumni' && (
            <div className="flex flex-wrap justify-center space-x-4 mb-8">
              {companyLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Company logo ${index + 1}`} className="h-16 w-16 object-contain m-2" />
              ))}
            </div>
          )}

          {/* Members grid */}
          {selectedCategory === 'E-Board' ? (
            <div className="grid grid-cols-2 gap-4">
              {members
                .filter((member) => member.category === 'E-Board')
                .map((member) => (
                  <div key={member.name} className="flex items-center p-4">
                    <img src={member.imageUrl} alt={member.name} className="w-40 h-40 object-cover mr-4" />
                    <div>
                      <p className="text-lg font-semibold">{member.name}</p>
                      <p className="text-blue-600">{member.role}</p>
                      <p>{member.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedCategory === 'Directors' ? (
            <div className="grid grid-cols-2 gap-4">
              {members
                .filter((member) => member.category === 'Directors')
                .map((member) => (
                  <div key={member.name} className="flex items-center p-4">
                    <img src={member.imageUrl} alt={member.name} className="w-40 h-40 object-cover mr-4" />
                    <div>
                      <p className="text-lg font-semibold">{member.name}</p>
                      <p className="text-blue-600">{member.role}</p>
                      <p className="text-grey-600">{member.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedCategory === 'Alumni' ? (
            <div>
              <div className="grid grid-cols-1 gap-4">
                {filteredAlumni.map((group, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <div className="text-3xl font-bold w-16">{group.pledgeClass}</div>
                    <div className="flex flex-wrap w-full justify-center">
                      <div className="grid grid-cols-2 gap-4">
                        {group.names.map((name, nameIndex) => (
                          <div key={nameIndex} className="flex">
                            <p className="mt-2">{name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-6 gap-4">
              {members
                .filter((member) => member.category === selectedCategory)
                .map((member) => (
                  <div key={member.name} className="text-left p-4">
                    <img src={member.imageUrl} alt={member.name} className="w-48 h-48 object-cover" />
                    <p className="mt-2">{member.name}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members;
