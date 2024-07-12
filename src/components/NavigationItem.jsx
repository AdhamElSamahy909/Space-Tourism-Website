import { NavLink } from 'react-router-dom';

const className =
  "flex flex-grow sm:after:hidden sm:border-b-[3px] focus:border-opacity-[1] sm:border-b-white sm:border-solid sm:border-opacity-0 hover:border-solid hover:border-opacity-[0.5] items-center gap-[0.75rem] sm:after:border-r-0 transition-all duration-[0.2s] after:ml-auto after:h-[1.5rem] after:border-r-[3px] after:border-solid after:border-r-white after:opacity-0 after:content-[''] hover:after:opacity-[0.5] focus:after:opacity-[1]";

function NavigationLink({ to, children }) {
  return (
    <li className="cursor:pointer flex font-barlow-condensed">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className} ${isActive ? 'after:opacity-[1] hover:after:opacity-[1] sm:border-opacity-[1] hover:sm:border-opacity-[1]' : 'sm:border-opacity-0'}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
