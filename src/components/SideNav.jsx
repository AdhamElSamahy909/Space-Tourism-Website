import NavLinks from './NavLinks';

function SideNav({ onClose }) {
  return (
    <div className="fixed right-0 top-0 z-10 flex min-h-screen w-[66vw] flex-col gap-[3rem] bg-[0B0D17] pl-[2rem] backdrop-blur-2xl">
      <nav className="py-[2rem]">
        <div className="flex justify-end pr-[2rem]">
          <button onClick={onClose} className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </button>
        </div>
      </nav>

      <ul className="flex flex-col gap-[2rem] font-barlow-condensed text-white">
        <NavLinks />
      </ul>
    </div>
  );
}

export default SideNav;
