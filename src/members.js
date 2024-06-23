import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
// Import images
// Import images from the img folder inside src
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

  return (
    <div>
      <div class="absolute blob-c z-0">
        <div class="shape-blob eight"></div>
        <div class="shape-blob nine"></div>
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between w-full p-4 z-10">
        {/* Logo */}
        <div className='flex justify-start'>
          <a href='/'>
            <img src={`${process.env.PUBLIC_URL}/ktp_logo.png`} alt="Logo" class="w-32 h-auto" />
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
            <img src={`${process.env.PUBLIC_URL}/life_app.png`} alt='Life App' class="w-40 h-auto" />
          </a>
        </div>
      </div>
      <div className="px-32">
        {/* Page content */}

        <div className="relative py-32 z-10">
          {/* Header */}
          <div className="flex flex-col text-center">
            <h1 className="text-4xl font-bold">We Are A Team of <ReactTyped
              strings={['monkeys', 'i hate jerushas bitchass', '@curl-d on tiktok 🔥💯', 'Designers']}
              typeSpeed={60}
              backSpeed={50}
              backDelay={1500}
              loop
            /></h1>
            <p className="mt-4 mb-20" style={{ color: 'gray' }}>
              What makes our community strong is our shared passion for technology and our unique backgrounds meshing together as one.
            </p>
          </div>
        </div>

        {/* Category filter buttons */}
        <div className="relative flex justify-start space-x-32 mb-8 z-10">
          {categories.map((category) => (
            <button
              key={category} // Unique key for each category
              // Apply border style if the category is selected
              className={`px-4 py-2 ${selectedCategory === category ? 'text-black font-bold border-b-2 border-black' : 'text-gray-400'}`}
              onClick={() => setSelectedCategory(category)} // Set selected category on click
            >
              {category}
            </button>
          ))}
        </div>

        {/* Members grid */}
        <div className="relative grid grid-cols-6 gap-4 z-10">
          {members
            .filter((member) => member.category === selectedCategory) // Filter members by selected category
            .map((member) => (
              <div key={member.name} className="text-left">
                {/* Member image with width and height */}
                <img src={member.imageUrl} alt={member.name} className="w-52 h-52 object-cover" />
                <p className="mt-2">{member.name}</p> {/* Member name */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
