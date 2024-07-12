import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="flex h-full flex-col sm:gap-[3rem] lg:flex-row">
      <div className="flex flex-col gap-[1.5rem] text-center sm:mx-auto sm:max-w-[33.75rem] lg:mt-auto lg:items-start lg:text-start">
        <p className="font-barlow-condensed text-[1rem] uppercase tracking-[0.15em] text-accent sm:text-[1.75rem]">
          So, you want to travel to
        </p>
        <h1 className="font-bellefair-regular text-[5rem] uppercase leading-none text-white sm:text-[9rem]">
          Space
        </h1>
        <p className="font-barlow-regular text-[15px] leading-[1.8] text-accent sm:text-[1rem]">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <div className="flex flex-grow items-center justify-center sm:mx-auto sm:max-w-[33.75rem] lg:mt-auto">
        <Link
          to="destinations"
          className="m-auto flex h-[9rem] w-[9rem] cursor-pointer items-center justify-center rounded-full bg-white font-bellefair-regular text-[1.1rem] uppercase ring-[5.5rem] ring-white ring-opacity-0 transition-all ease-in-out hover:ring-opacity-10 focus:ring-opacity-10 sm:h-[17rem] sm:w-[17rem] sm:text-[2rem]"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
