import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className='homepage-grid'>
      <div className='glowing-circle z-2'></div>
      <div className='glowing-circle-2 z-1'></div>

      <Header></Header>

      <div className='flex flex-col mb-10'>
        {/* Main content */}
        <div className='flex flex-col items-center justify-center z-10'>
          <div className="font-black text-center w-[375px] sm:w-[450px] md:w-[550px] lg:w-[750px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-36" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            We’re the University of Michigan’s premier technology fraternity
          </div>

          <div className='text-[#707070] text-[16px] text-center mt-8 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] text-xs sm:text-sm lg:text-base'>
            <div>Founded as the first KTP chapter, we're dedicated to uniting students across the nation for the love of technology</div>
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

			<div className='flex flex-col z-20'>
				{/* Description */}
				<div className='flex flex-col lg:flex-row lg:justify-center'>
					<div className='flex flex-row justify-center gap-4'>
						<img src={`${process.env.PUBLIC_URL}/lucas.jpg`} alt="Image 1" class='h-48 md:h-64'/>
						<img src={`${process.env.PUBLIC_URL}/oldies.jpg`} alt="Image 2" class='h-48 md:h-64' />
					</div>

					<div className='flex flex-col justify-center items-center lg:ml-16'>
						<div>
							<p className='text-[#888888] text-xs md:text-base mb-4 mt-8 lg:mt-0'>Founded in 2012, we are</p>
							<p className='font-bold text-lg sm:text-2xl md:text-2xl lg:text-4xl lg:w-[400px] mb-4 md:mb-8' style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
								The first technology fraternity in the nation.
							</p>
							{/* More about us button */}
							<div className='more-about-us text-sm flex flex-row items-center justify-center' style={{ fontFamily: 'Inter, sans-serif' }}>
								<Link className="hover:text-blue-700 font-bold" to="/about">
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

      <div className='homepage-container flex'>
        {/* Images for homepage */}
        <div className='homepage-images flex mt-32'>
          <img
            src={`${process.env.PUBLIC_URL}/retreat2.jpg`}
            alt="Lucas Image"
            className='homepage-image'
          />

          <img
            src={`${process.env.PUBLIC_URL}/oldies.jpg`}
            alt="Oldies Image"
            className='homepage-image'
          />
        </div>

        {/* Content Section */}
        <div className='homepage-content'>
          <div className='flex items-start justify-center min-h-screen'>
            <div className='w-3/4 flex justify-end'>
              <div className='text-section p-12 mt-24'>
                <div className='text-[#707070] text-[16px] text-left'>
                  <div>Founded in 2012, we are </div>
                </div>

                <div className="text-4xl font-bold text-left mt-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
                  <div className='mb-2'>The first professional technology fraternity in the nation.</div>
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
        {/* margin fix here */}
        <div className='hidden lg:flex flex-wrap justify-left'> 
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
            src={`${process.env.PUBLIC_URL}/chi_game.jpg`}
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
            src={`${process.env.PUBLIC_URL}/phi.jpeg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/fball.jpeg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/chi2.jpeg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/ab_car.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/alumni.jpg`}
            alt="Image 12"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/pledges.jpg`}
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
              left: '3%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/chi_game.jpg`}
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
            src={`${process.env.PUBLIC_URL}/phi.jpeg`}
            alt="Image 8"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/fball.jpeg`}
            alt="Image 9"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />
          
          <img
            src={`${process.env.PUBLIC_URL}/chi2.jpeg`}
            alt="Image 10"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/ab_car.jpg`}
            alt="Image 11"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/alumni.jpg`}
            alt="Image 12"
            className='scroll-image'
            style={{
              top: '160%',
              // height: '19vw',
              // width: 'auto',
            }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/pledges.jpg`}
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
    </div>

      {/* Network */}
      <div>
        <div className='flex justify-center text-4xl font-bold mb-12'>Our Network</div>
        <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-8 px-8 sm:px-16 md:px-16 lg:px-32' data-aos="fade-up">
          <img src={`${process.env.PUBLIC_URL}/network/google.png`} alt='Google' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/microsoft.png`} alt='Microsoft' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/deloitte.png`} alt='Deloitte' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/jpmorgan.png`} alt='JP Morgan' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/meta.png`} alt='Meta' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/citadel.png`} alt='Citadel' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/capital_one.png`} alt='Capital One' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/spotify.png`} alt='Spotify' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/bloomberg.png`} alt='Bloomberg' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/doordash.png`} alt='Doordash' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/hudson_river_trading.png`} alt='Hudson River Trading' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/amazon.png`} alt='Amazon' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/apple.png`} alt='Apple' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/tiktok.png`} alt='Tiktok' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/nvidia.png`} alt='Nvidia' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/duolingo.png`} alt='Duolingo' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/jane_street.png`} alt='Jane Street' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/pwc.png`} alt='PWC' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/ey.png`} alt='EY' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/accenture.png`} alt='Accenture' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/linkedin.png`} alt='LinkedIn' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/tesla.png`} alt='Tesla' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/ibm.png`} alt='IBM' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/cisco.png`} alt='Cisco' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/asana.png`} alt='Asana' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/slack.png`} alt='Slack' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/figma.png`} alt='Figma' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/bleacher_report.png`} alt='Bleacher Report' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/stripe.png`} alt='Stripe' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/pnc.png`} alt='PNC' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/boeing.png`} alt='Boeing' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/salesforce.png`} alt='Salesforce' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/mongo_db.png`} alt='MongoDB' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/vmware.png`} alt='VMware' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/nike.png`} alt='Nike' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/uber.png`} alt='Uber' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/netskope.png`} alt='Netskope' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/att.png`} alt='AT&T' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/ford.png`} alt='Ford' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/modern_treasury.png`} alt='Modern Treasury' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/indeed.png`} alt='Indeed' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/bank_of_america.png`} alt='Bank of America' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/workday.png`} alt='Workday' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/caterpillar.png`} alt='Caterpillar' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/p&g.png`} alt='P&G' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/viget.png`} alt='Viget' class='h-6 lg:h-8' />
          <img src={`${process.env.PUBLIC_URL}/network/united.png`} alt='United' class='h-6 lg:h-8' />
        </div>
      </div>

      {/* Life App */}
      <div id='life-app' className='bg-light-blue flex flex-col md:flex-row justify-center items-center mt-8'>
        {/* Text */}
        <div className="text-3xl mt-8 md:text-4xl font-bold z-10 md:mr-24 text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '900', letterSpacing: '-0.02em' }}>
          Kappa Theta Pi Life
          <div className='mt-4 font-normal text-[#707070] text-[16px] mt-8 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] text-xs sm:text-sm lg:text-base'>
          The KTP Life App is your one-stop shop for everything KTP! View upcoming events and details personalized to you, never miss important announcements, connect with brothers, learn more about our organization, and so much more!
          </div>
          <div className='flex flex-row justify-center md:justify-start mt-8'>
            <a href='https://apps.apple.com/us/app/kappa-theta-pi-life/id1641588942' target="_blank" rel="noopener noreferrer" className='mr-4'>
              <img src={`${process.env.PUBLIC_URL}/app_store.svg`} alt="Image" className='h-10 md:h-12 lg:h-14' />
            </a>

            <a href='https://play.google.com/store/apps/details?id=com.ktpumich.ktp_rush&pli=1' target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/google_play.svg`} alt="Image" className='h-10 md:h-12 lg:h-14' />
            </a>
          </div>
        </div>

        {/* Phones */}
        <div className='flex flex-row mt-12 md:mt-0 mb-8'>
          <img src={`${process.env.PUBLIC_URL}/phone_frame_3.svg`} alt="Image" className='h-56 md:h-72 lg:h-6 lg:h-80 xl:h-96 2xl:h-[32rem] mr-4 md:mr-8 lg:mt-24' />
          <img src={`${process.env.PUBLIC_URL}/phone_frame_4.svg`} alt="Image" className='h-56 md:h-72 lg:h-6 lg:h-80 xl:h-96 2xl:h-[32rem] lg:mt-12' />
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
}

export default Home;
