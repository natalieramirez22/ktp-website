import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample members data with name, image URL, and category
const members = [
  { name: 'Faye Stover', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },
  { name: 'Name', imageUrl: 'https://via.placeholder.com/50', category: 'Actives' },

  // Add more members as needed
];

// Categories for the members
const categories = ['Actives', 'E-Board', 'Directors', 'Alumni'];

function Members() {
  // State to manage the selected category, default is 'Actives'
  const [selectedCategory, setSelectedCategory] = useState('Actives');

  return (
    <div className="px-32">

      {/* Navigation links */}
      <div className='flex justify-center space-x-16 mt-8'>
        <Link className="hover:text-blue-700" to="/about">About Us Page</Link>
        <Link className="hover:text-blue-700" to="/rush">Rush Page</Link>
        <Link className="hover:text-blue-700" to="/members">Members Page</Link>
        <Link className="hover:text-blue-700" to="/nationals">Nationals Page</Link>
      </div>

      {/* Page content */}
      <div className="py-32">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center">We Are A Team of Designers</h1>
        <p className="text-center mt-2 mb-20">
          What makes our community strong is our shared passion for technology and our unique backgrounds meshing together as one.
        </p>

        {/* Category filter buttons */}
        <div className="flex justify-start space-x-32 mb-8">
          {categories.map((category) => (
            <button
              key={category} // Unique key for each category
              // Apply border style if the category is selected
              className={`px-4 py-2 ${selectedCategory === category ? 'border-b-2 border-black' : ''}`}
              onClick={() => setSelectedCategory(category)} // Set selected category on click
            >
              {category}
            </button>
          ))}
        </div>

        {/* Members grid */}
        <div className="grid grid-cols-4 gap-16">
          {members
            .filter((member) => member.category === selectedCategory) // Filter members by selected category
            .map((member) => (
              <div key={member.name} className="text-left">
                {/* Member image with width and height */}
                <img src={member.imageUrl} alt={member.name} className="w-full h-36 object-cover" />
                <p className="mt-2">{member.name}</p> {/* Member name */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
