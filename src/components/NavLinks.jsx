import NavigationItem from './NavigationItem';

function NavLinks() {
  return (
    <>
      <NavigationItem to="/">
        <span className="text-[1rem] font-bold">00</span>{' '}
        <p className="text-[1rem] font-normal uppercase lg:tracking-[2px]">
          home
        </p>
      </NavigationItem>

      <NavigationItem to="destinations">
        <span className="text-[1rem] font-bold">01</span>{' '}
        <p className="text-[1rem] font-normal uppercase lg:tracking-[2px]">
          destination
        </p>
      </NavigationItem>

      <NavigationItem to="crew">
        <span className="text-[1rem] font-bold">02</span>{' '}
        <p className="text-[1rem] font-normal uppercase lg:tracking-[2px]">
          crew
        </p>
      </NavigationItem>

      <NavigationItem to="technology">
        <span className="text-[1rem] font-bold">03</span>{' '}
        <p className="text-[1rem] font-normal uppercase lg:tracking-[2px]">
          technology
        </p>
      </NavigationItem>
    </>
  );
}

export default NavLinks;
