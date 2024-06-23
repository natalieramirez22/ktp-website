import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
// Import images
import jerushaImage from './img/jerusha.jpg';
import danielImage from './img/Headshot.jpeg';
// Import more images as needed

// Sample members data with name, local image import, and category
const members = [
  { name: 'Jerusha Manoj', imageUrl: jerushaImage, category: 'Actives' },
  { name: 'Daniel Yang', imageUrl: danielImage, category: 'Actives' },
  { name: 'Jerusha Manoj', imageUrl: jerushaImage, category: 'Actives' },
  { name: 'Daniel Yang', imageUrl: danielImage, category: 'Actives' },
  { name: 'Jerusha Manoj', imageUrl: jerushaImage, category: 'Actives' },
  { name: 'Daniel Yang', imageUrl: danielImage, category: 'Actives' },
  { name: 'Jerusha Manoj', imageUrl: jerushaImage, category: 'Actives' },
  { name: 'Daniel Yang', imageUrl: danielImage, category: 'Actives' },
  // Add more members and their corresponding images as needed
];

// Categories for the members
const categories = ['Actives', 'E-Board', 'Directors', 'Alumni'];

function Members() {
  // State to manage the selected category, default is 'Actives'
  const [selectedCategory, setSelectedCategory] = useState('Actives');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const categoryRefs = useRef([]);

  useEffect(() => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (categoryRefs.current[selectedIndex]) {
      const { offsetLeft, offsetWidth } = categoryRefs.current[selectedIndex];
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category);
    const { offsetLeft, offsetWidth } = categoryRefs.current[index];
    setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
  };

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
              strings={['Developers','Alcoholics', 'Daniel Haters', 'Designers', 'Leaders']}
              typeSpeed={60}
              backSpeed={50}
              backDelay={1500}
              loop
            /></h1>
            <p className=" text-xl mt-4 mb-32 font-medium" style={{ color: 'grey' }}>
              What makes our community strong is our shared passion for technology and our <br></br>unique backgrounds meshing together as one.
            </p>

          </div>

          {/* Category filter buttons */}
          <div className="relative mb-8">
            <div className="flex justify-start space-x-32 border-b-2 border-gray-300">
              {categories.map((category, index) => (
                <button
                  key={category} // Unique key for each category
                  className={`relative px-4 py-2 ${selectedCategory === category ? 'text-black font-bold' : 'text-gray-400'}`}
                  onClick={() => handleCategoryClick(category, index)} // Set selected category on click
                  ref={el => categoryRefs.current[index] = el}
                >
                  {category}
                </button>
              ))}
            </div>
            <div
              className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
              style={{ ...underlineStyle }}
            ></div>
          </div>

          {/* Members grid */}
          <div className="relative grid grid-cols-6 gap-4 z-10">
            {members
              .filter((member) => member.category === selectedCategory) // Filter members by selected category
              .map((member) => (
                <div key={member.name} className="text-left">
                  {/* Member image with width and height */}
                  <img src={member.imageUrl} alt={member.name} className="w-52 h-52 object-cover" />
                  <p className="mt-2 mb-4">{member.name}</p> {/* Member name */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
