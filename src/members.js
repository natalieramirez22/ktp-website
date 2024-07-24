import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { parseCsv } from './parseCsv'; // Import the parseCsv function
import memberListCsv from './memberList.csv'; // Adjust the path based on the actual location of the CSV file

// Import images
import LogoImages from './img/LogosHover.png';
import defaultImage from './img/default.jpg'; // Adjust the path based on your project structure



// Categories for the members
const categories = ['Actives', 'E-Board', 'Directors', 'Alumni'];

// Define the alumni variable
const hardcodedAlumni = [
  { pledgeClass: 'Founders', names: ['Brian Mansfield', 'Denny Tsai', 'Jacqueline Fontaine', 'Jing Guo', 'Julie Varghese', 'Louise Vongphrachanh', 'Nisha Dwivedi'] },
  { pledgeClass: 'Α', names: ['Andy Kolean', 'Chris Hong', 'Dan Miller', 'Hanwenbo Yang', 'Patrick Riggs', 'Phil Park'] },
  { pledgeClass: 'Β', names: ['Jay Raina', 'Jeremy Wdowik', 'Juliana Mi', 'Justin Anderson', 'Kate Findlay', 'Nick Felicidario'] },
  { pledgeClass: 'Γ', names: ['Aya Mimura', 'Ben Krawitz', 'Connor Waldo', 'Dan Sofferman', 'Dom Parise', 'Evan Stoddard', 'Greg Nelson', 'Jackie Franklin', 'Linglu Zhou', 'Louie Cordon', 'Megan Yee', 'Sam Bolin', 'Sarah Beadle', 'Shelby Lewin'] },
  { pledgeClass: 'Δ', names: ['Aadi Krishna', 'Abbey Lepisto', 'Angela Damato', 'Christine Yu', 'Colleen Miller', 'Dinker Ambe', 'Ellen Anderson', 'Greg Azevedo', 'Jaclyn Jaffe', 'Kelly Yuen', 'Kevin Cai', 'Lizzy Pratt', 'Melanie Kipke', 'Nicole Zeffer', 'Ryan Povall', 'Sonia Doshi'] },
  { pledgeClass: 'Ε', names: ['Andrew Riggs', 'Chris Elie', 'Dean Chenensky', 'Drew Dyer', 'Elisa Shibley', 'Isha Gupta', 'Jake Wellins', 'Kyle Moynihan', 'Lisa Lyons', 'Owen Yang', 'Patrick Wilson', 'Rebecca Lawson', 'Sam Dallstream', 'Yoav Helfman'] },
  { pledgeClass: 'Ζ', names: ['Alex House', 'Anavir Shermon', 'Ben Rathi', 'Blake Schewe', 'Bryce Beckwith', 'Christie Parkinson', 'Chuckry Vengadam', 'Connie Liu', 'Cooper Anstett', 'Courtney Quell', 'Dan Wilson', 'Kaitlin Singer', 'Maxim Aleksa', 'Michael Vander Lugt', 'Nimesha Muthya', 'Olivia Alge', 'Rishin Doshi'] },
  { pledgeClass: 'Η', names: ['Amos Cone', 'Brady Mathieson', 'Dara Metz', 'Han Na Shin', 'Ismael Halaweh', 'Julia Karpf', 'Kenny Heindel', 'Lauren Krawitz', 'Logan Meyer', 'Mark Strader', 'Merri Zervas', 'Neal Parikh', 'Pascal Sturmfels', 'Rosa Wu', 'Terrence Green'] },
  { pledgeClass: 'Θ', names: ['Arya Taylor', 'Colleen Feola', 'Gage Glupker', 'Grace Kim', 'Hyunjae Kim', 'Imani Williams', 'Jill Davidson', 'Josie Elordi', 'Lukas Trierweiler', 'Mackenzie Chyatte', 'Nikil Ramanathan', 'Ramana Keerthi'] },
  { pledgeClass: 'Ι', names: ['Ash Varma', 'Ava Randa', 'Billy Kryska', 'Brendan Paul', 'Daniel Chandross', 'Danielle Colbert', 'Esther Yan', 'Ethan Cartwright', 'Hannah Jenkins', 'Joana Rushiti', 'Joe Kunnath', 'Juli Polise', 'Kevin Huang', 'Kiera Krashesky', 'Rebecca Henry'] },
  { pledgeClass: 'Κ', names: ['Aliya Khan', 'Angel Tsai', 'Ankita Avadhani', 'Benjamin Zeffer', 'Dania Abdulhamid', 'David Nguyen', 'Jessica Borin', 'Linda Sun', 'Mary Douglass Baum', 'Paige Mittenthal', 'Pranav Ajith', 'Rachel Sartori', 'Ricky Diaz Gomez', 'Sadie Staudacher', 'Taylor Wynn'] },
  { pledgeClass: 'Λ', names: ['Adam Konig', 'Aditya Chaudhry', 'Alby Thomas', 'Ben Maddux', 'Caleb Fisher', 'Evan Batsell', 'Fee Christoph', 'Jacob Kirsch', 'Jess Sickles', 'Jessica Toma', 'Neal Matta', 'Nicole Ackerman-Greenberg', 'Prachi Gokhale', 'Sabine Hutter', 'Sarah Corbe', 'Seungyeon Shin', 'Tyler Eastman', 'Vivian Wu', 'Will Chatterson', 'Zoé Hunter'] },
  { pledgeClass: 'Μ', names: ['Anne Lin', 'Arjun Ramanathan', 'Chris Knebel', 'Edward Knighton', 'Jack Zeligson', 'Kelsey Toporski', 'Kristen Basgall', 'Liz Fu', 'Michael Wilson', 'Michele Gee', 'Nathan Brown', 'Nick Dong', 'Sam Lu', 'Shaelyn Albrecht', 'Shameek Ray', 'Shashank Murching', 'Stefen Misovski', 'Sydnie Bodzianowski', 'Vinay Revankar'] },
  { pledgeClass: 'Ν', names: ['Alec Brandel', 'Andrew Bunt', 'Anjali Justice', 'Bhumika Jain', 'Damian Tenuta', 'Fernando Carretero', 'Jaroslaw Kawa', 'Juliet Levesque', 'Matthew Chen', 'Mike Trame', 'Rana Makki', 'Rosemary Wilson', 'Simrun Buttar', 'Svetha Subbiah', 'Wesley Toma'] },
  { pledgeClass: 'Ξ', names: ['Annika Zdon', 'Eli Masjedi', 'Flannery O\'Donnell', 'Izzy Williams', 'Kyle Johnson', 'Louis Gouirand', 'Maya Khanna', 'Natalie Cieslak', 'Sahil Patel', 'Tyler Jackson', 'Shreya Datta', 'Aditya Ravi'] },
  { pledgeClass: 'Ο', names: ['Aashia Mehta', 'Eldon Tsoi', 'Junho Park', 'Kelley Sweitzer', 'Michael Barsky', 'Michael Flanagan', 'Samast Varma', 'Taylor Denby', 'Sarah Addo', 'Jonah Azoulay', 'Anusha Bohra', 'Simran Chowdhry', 'Annika Dahlmann', 'Andy Dazzo', 'Emily Dershowitz', 'Jeremy Dou', 'Chris Lee', 'Cameron Oglesby', 'Sanya Verma'] },
  { pledgeClass: 'Π', names: ['Alice Ying', 'Rea Parocaran', 'Ben Arteaga', 'Sydney Bruce', 'Darian Chang', 'Rahul D\'Costa', 'Kyle Floersch', 'Caleb Harris', 'Shan Jiang', 'Katie Lawton', 'Sophie Loesberg', 'Roland Park', 'Vineet Parvathala', 'Brooke Powning', 'Harvey Reeves', 'Maya Subramanian', 'Jessica Zhang', 'Chinmay Savanur', 'Claire Waldron'] },
  { pledgeClass: 'Ρ', names: ['Eric Andrews', 'Rithik Aggarwal', 'Maya Chalker', 'Courtney Fortin', 'Olivia Garrahan', 'Robert Gibbons', 'Ashvin Kumar', 'Max Mittleman', 'William Yang', 'Rohan Barad', 'Prateek Bhola', 'Chase Goldman', 'Aashni Khatri', 'Michelle Liu', 'Advay Muchoor', 'Parth Pandit', 'Divya Ramamoorthy', 'Alyssa Russell', 'Medha Sripada'] },
  { pledgeClass: 'Σ', names: ['Logan Ross', 'Daniel Medina', 'Aayush Agarwal', 'Fizza Ahmed', 'Nacho Barreras', 'Ronald Chan', 'Aashil Dixit', 'Julie Frary', 'Melanie Howarth', 'Ananya Joshi', 'Andrew Li', 'Jason Moy', 'Evan Weissburg', 'Laura Zichi', 'Lucas Felpi'] },
  { pledgeClass: 'Τ', names: ['Rohan Erasala', 'Anne George', 'Raffy Millado', 'Salil Nadkarni', 'Kelsey Peregord', 'Nishanth Reddy', 'Manasi Sridhar', 'Miffy Tani', 'Juan Miguel Thompson', 'Christian Wong'] },
  { pledgeClass: 'Υ', names: [''] },
  { pledgeClass: 'Φ', names: ['Benjamin Jin', 'Arez Aziz'] }
];


// Eboard and Directors
const hardcodedMembers = [
  { name: 'Lily Medway', imageUrl: require('./img/members/Medway_Lily.jpg'), category: 'E-Board', role: 'President', description: 'Oversees large scale changes in KTP and runs the Executive Board.' },
  { name: 'Thomas Joppich', imageUrl: require('./img/members/Joppich_Thomas.jpg'), category: 'E-Board', role: 'VP of External Affairs', description: 'Responsible for senior experience, feedback, and nationals.' },
  { name: 'Agnes Mar', imageUrl: require('./img/members/Mar_Agnes.jpg'), category: 'E-Board', role: 'VP of Internal Affairs', description: 'Manages membership data, reserves spaces for chapter and events.' },
  { name: 'Shrey Pandya', imageUrl: require('./img/members/Pandya_Shrey.jpg'), category: 'E-Board', role: 'VP of Finance', description: 'Budgets and plans various events, facilitates corporate sponsorships.' },
  { name: 'Ronith Ganjigunta', imageUrl: require('./img/members/Ganjigunta_Ronith.jpg'), category: 'E-Board', role: 'VP of Technical Development', description: 'Oversees committees, plans technical workshops and hackathons.' },
  { name: 'Archana Chandran', imageUrl: require('./img/members/Chandran_Archana.JPG'), category: 'E-Board', role: 'VP of Membership', description: 'Focuses on expanding rush to make it more inclusive.' },
  { name: 'Sujay Mehta', imageUrl: require('./img/members/Mehta_Sujay.jpg'), category: 'E-Board', role: 'VP of Marketing', description: 'Establishes consistent branding and develops marketing strategies.' },
  { name: 'Qayf Rasul', imageUrl: require('./img/members/Rasul_Qayf.jpg'), category: 'E-Board', role: 'VP of Engagement', description: 'Plans brotherhood events to engage active members.' },
  { name: 'Kelly Zhang', imageUrl: require('./img/members/Zhang_Kelly.jpg'), category: 'E-Board', role: 'VP of Professional Development', description: 'Facilitates educational workshops and provides career resources.' },
  { name: 'Lucas DiGiuseppe', imageUrl: require('./img/members/DiGiuseppe_Lucas.jpg'), category: 'Directors', role: 'Director of Community Service & Philanthropy', description: 'Coordinates community service events and philanthropic efforts.' },
  { name: 'Jill Uy', imageUrl: require('./img/members/Uy_Jill.JPG'), category: 'Directors', role: 'Co-Director of Women\'s Empowerment', description: 'Empowers women through various initiatives and events.' },
  { name: 'Marley Dodenhof', imageUrl: require('./img/members/Dodenhof_Marley.jpg'), category: 'Directors', role: 'Co-Director of Women\'s Empowerment', description: 'Empowers women through various initiatives and events.' },
  { name: 'Natalie Ramirez', imageUrl: require('./img/members/Ramirez_Natalie.jpg'), category: 'Directors', role: 'Director of Website Development', description: 'Develops and maintains the KTP website.' },
  { name: 'Ashley Glabicki', imageUrl: require('./img/members/Glabicki_Ashley.jpg'), category: 'Directors', role: 'Co-Director of App Development', description: 'Develops and maintains KTP mobile applications.' },
  { name: 'Flynn Lyon', imageUrl: require('./img/members/Lyon_Flynn.jpg'), category: 'Directors', role: 'Co-Director of App Development', description: 'Develops and maintains KTP mobile applications.' },
  { name: 'Rishitha Talluri', imageUrl: require('./img/members/Talluri_Rishitha.jpg'), category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'Ryan Foster', imageUrl: require('./img/members/Foster_Ryan.jpg'), category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'Neelufar Jaberi', imageUrl: require('./img/members/Jaberi_Neelufar.jpg'), category: 'Directors', role: 'Co-Director of Digital Strategy & Social Media', description: 'Manages digital strategy and social media presence.' },
  { name: 'AJ Das', imageUrl: require('./img/members/Das_Arinjoy.JPG'), category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
  { name: 'Jenny Ni', imageUrl: require('./img/members/Ni_Jenny.jpg'), category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
  { name: 'Miles Vasquez', imageUrl: require('./img/members/Vasquez_Miles.jpg'), category: 'Directors', role: 'Co-Director of Social Engagement', description: 'Organizes social events and activities.' },
];


const greekLetters = ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω'];
function Members() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [selectedCategory, setSelectedCategory] = useState('Actives');
  const [selectedGreekLetter, setSelectedGreekLetter] = useState(null);
  const [activeMembers, setActiveMembers] = useState([]);
  const [eBoardMembers, setEBoardMembers] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const categoryRefs = useRef([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (categoryRefs.current[selectedIndex]) {
      const { offsetLeft, offsetWidth } = categoryRefs.current[selectedIndex];
      document.querySelector('.underline').style.left = `${offsetLeft}px`;
      document.querySelector('.underline').style.width = `${offsetWidth}px`;
    }
  }, [selectedCategory]);

  const pledgeClassMapping = {
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω'
  };

  useEffect(() => {
    parseCsv(memberListCsv, (data) => {
      console.log('Parsed Data:', data); // Debugging statement
      const currentYear = new Date().getFullYear();

      const filteredData = data.filter(member => member.First && member.Last);

      const parsedMembers = filteredData.map(member => {
        let imagePath;
        const filename = `${member.Last || 'unknown'}_${member.First || 'unknown'}`; // Construct filename without extension
        try {
          imagePath = require(`./img/members/${filename}.jpg`);
        } catch (error1) {
          try {
            imagePath = require(`./img/members/${filename}.JPG`);
          } catch (error2) {
            imagePath = defaultImage; // Fallback image
          }
        }

        const firstName = member.First || 'First Name';
        const lastName = member.Last || 'Last Name';
        const category = member.Category || 'Actives';
        const role = member['Pledge Class'] || 'Member';
        const description = member['Grad Year'] ? `Grad Year: ${member['Grad Year']}, Linkedin: ${member.Linkedin || 'N/A'}` : 'No Description';

        const isAlumni = member['Grad Year'] && member['Grad Year'] <= currentYear;

        return {
          name: `${firstName} ${lastName}`,
          imageUrl: imagePath,
          category: category,
          role: role,
          description: description,
          pledgeClass: pledgeClassMapping[member['Pledge Class']] || 'Unknown',
          gradYear: member['Grad Year'] || currentYear + 1,
          isAlumni,
          linkedin: member.Linkedin || '#'
        };
      });

      const actives = parsedMembers.filter(member => !member.isAlumni && member.category === 'Actives');
      const eBoard = parsedMembers.filter(member => !member.isAlumni && member.category === 'E-Board');
      const directors = parsedMembers.filter(member => !member.isAlumni && member.category === 'Directors');
      const alumniFromCsv = parsedMembers.filter(member => member.isAlumni && member.pledgeClass !== 'Unknown');

      const alumniMap = {};
      alumniFromCsv.forEach(member => {
        if (!alumniMap[member.pledgeClass]) {
          alumniMap[member.pledgeClass] = [];
        }
        alumniMap[member.pledgeClass].push(member.name);
      });

      const combinedAlumni = [...hardcodedAlumni];
      Object.keys(alumniMap).forEach(pledgeClass => {
        const existingAlumni = combinedAlumni.find(alumni => alumni.pledgeClass === pledgeClass);
        if (existingAlumni) {
          existingAlumni.names.push(...alumniMap[pledgeClass]);
        } else {
          combinedAlumni.push({ pledgeClass, names: alumniMap[pledgeClass] });
        }
      });

      setActiveMembers(actives);
      setEBoardMembers(eBoard);
      setDirectors(directors);
      setAlumni(combinedAlumni);

      setTimeout(() => {
        document.querySelectorAll('.active-member').forEach(el => el.classList.add('visible'));
        document.querySelectorAll('.e-board-member').forEach(el => el.classList.add('visible'));
        document.querySelectorAll('.director-member').forEach(el => el.classList.add('visible'));
      }, 100);

    });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Actives') {
      setTimeout(() => {
        document.querySelectorAll('.active-member').forEach(el => el.classList.add('visible'));
      }, 100);
    } else if (selectedCategory === 'E-Board') {
      setTimeout(() => {
        document.querySelectorAll('.e-board-member').forEach(el => el.classList.add('visible'));
      }, 100);
    } else if (selectedCategory === 'Directors') {
      setTimeout(() => {
        document.querySelectorAll('.director-member').forEach(el => el.classList.add('visible'));
      }, 100);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedGreekLetter(null);
  };

  const handleGreekLetterClick = (letter) => {
    setSelectedGreekLetter(letter);
    setTimeout(() => {
      const targetId = letter ? `pledgeClass-${letter}` : 'pledgeClass-Founders';
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Adjust the delay as needed
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
              strings={['Developers', 'Designers', 'Leaders', 'Engineers', 'Innovators', 'Problem Solvers']}
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

          {/* Company logos image */}
          {selectedCategory === 'Alumni' && (
            <div className="flex justify-center items-center">
              <div className="relative logo-container" onMouseMove={handleMouseMove} style={{ width: '100%', height: 'auto', position: 'relative' }}>
                <img src={LogoImages} alt="Company logos" className="w-4/6 h-1/12 logo-image grayscale mx-auto" />
                <div
                  className="logo-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 60px, rgba(255, 255, 255, 0.8) 101px)`,
                    pointerEvents: 'none',
                  }}
                ></div>
              </div>
            </div>
          )}

          {/* Members grid */}
          {selectedCategory === 'E-Board' ? (
            <div className="grid grid-cols-2 gap-4">
              {hardcodedMembers
                .filter((member) => member.category === 'E-Board')
                .map((member) => (
                  <div key={member.name} className="flex items-center p-4 e-board-member">
                    <img src={member.imageUrl} alt={member.name} className="w-40 h-40 object-cover mr-4" />
                    <div className="info">
                      <p className="text-lg font-semibold">{member.name}</p>
                      <p className="text-blue-600">{member.role}</p>
                      <p>{member.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedCategory === 'Directors' ? (
            <div className="grid grid-cols-2 gap-4">
              {hardcodedMembers
                .filter((member) => member.category === 'Directors')
                .map((member) => (
                  <div key={member.name} className="flex items-center p-4 director-member">
                    <img src={member.imageUrl} alt={member.name} className="w-40 h-40 object-cover mr-4" />
                    <div className="info">
                      <p className="text-lg font-semibold">{member.name}</p>
                      <p className="text-blue-600">{member.role}</p>
                      <p>{member.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedCategory === 'Alumni' ? (
            <div>
              <div className="grid grid-cols-1 gap-4">
                {filteredAlumni.map((group, index) => (
                  <div key={index} id={`pledgeClass-${group.pledgeClass}`} className="alumni-section mb-4">
                    <div className="alumni-letter">{group.pledgeClass}</div>
                    <div className="alumni-names">
                      {group.names.map((name, nameIndex) => (
                        <p key={nameIndex}>{name}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-6 gap-4">
              {activeMembers.map((member, index) => (
                <div key={index} className="text-left p-4 active-member">
                  <div className="relative w-48 h-48">
                    <img src={member.imageUrl} alt={member.name} className="object-cover w-full h-full" />
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-logo-container">
                      <img src={require('./img/linkedin.jpg')} alt="LinkedIn" className="w-10 h-10" />
                    </a>
                    <div className="pledge-class">{member.pledgeClass}</div>
                  </div>
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
