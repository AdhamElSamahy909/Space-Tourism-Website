import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import NavLinks from './NavLinks';
import SideNav from './SideNav';
import { useScreenWidth } from '../hooks/useScreenWidth';

function AppLayout() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [bgImage, setBgImage] = useState('/home/background-home-mobile.jpg');
  const location = useLocation();
  const { screenWidth } = useScreenWidth();

  console.log('location', location, location.pathname);

  const locationName =
    location.pathname !== '/'
      ? location.pathname === '/destinations'
        ? 'destination'
        : location.pathname.slice(1)
      : 'home';

  console.log('LN: ', locationName);

  useEffect(() => {
    setShowSideNav(false);
    setBgImage([
      `/${locationName}/background-${locationName}-mobile.jpg`,
      `/${locationName}/background-${locationName}-tablet.jpg`,
      `/${locationName}/background-${locationName}-desktop.jpg`,
    ]);
  }, [locationName]);

  function openSideNav() {
    setShowSideNav(true);
  }

  function closeSideNav() {
    setShowSideNav(false);
  }

  return (
    <>
      <header className="p-[24px] sm:flex sm:min-h-[9.4vh] sm:items-center sm:p-0 lg:box-content lg:pt-[2.5rem]">
        <nav className="flex items-center justify-between gap-[-32px] sm:h-full sm:w-full">
          <Link
            to="/"
            className="pointer-events-none gap-[] sm:pl-[2.5rem] lg:ml-[4rem] lg:flex lg:flex-grow lg:items-center lg:gap-[4rem] lg:pl-0 lg:after:flex-grow lg:after:border-b-[1px] lg:after:border-solid lg:after:border-b-white lg:after:opacity-[0.25] lg:after:content-['']"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              className="pointer-events-auto"
            >
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </Link>

          <button onClick={openSideNav} className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </button>

          {showSideNav && <SideNav onClose={closeSideNav} />}

          <ul className="hidden h-full gap-[3rem] bg-[rgba(255,255,255,0.05)] pl-[4.5rem] pr-[2.5rem] text-white sm:flex lg:px-[4rem] lg:backdrop-blur-[35px]">
            <NavLinks />
          </ul>
        </nav>
      </header>

      <main
        className={`box-border flex-grow p-[24px] sm:p-[2.5rem] ${locationName === 'home' ? 'sm:py-[8rem]' : ''} ${locationName === 'technology' ? 'lg:px-0 lg:py-[3rem]' : ''}`}
        onMouseEnter={() => console.log(screenWidth)}
      >
        <img
          src={
            screenWidth < '768'
              ? bgImage[0]
              : screenWidth < '1440'
                ? bgImage[1]
                : bgImage[2]
          }
          alt="home"
          className="absolute inset-0 z-[-1] h-full w-full object-cover"
        />

        {locationName !== 'home' ? (
          <div
            className={`flex h-full flex-col gap-[1.5rem] ${locationName === 'technology' ? 'lg:ml-auto lg:max-w-[80rem]' : 'lg:mx-auto lg:max-w-[70rem]'}`}
          >
            <div
              className={`flex h-full flex-col gap-[1.5rem] ${locationName === 'technology' ? 'lg:max-w-[80rem]' : 'lg:max-w-[70rem]'}`}
            >
              <Outlet />
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-[1.5rem]">
            <Outlet />
          </div>
        )}
      </main>
    </>
  );
}

export default AppLayout;
