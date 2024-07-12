import { NavLink, useSearchParams } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import PageTitle from '../components/PageTitle';
import Loader from '../components/Loader';

function DestinationPage() {
  const [searchParams] = useSearchParams();
  let { data, isLoading } = useData();

  let destination = searchParams.get('destination') || 'Moon';

  const destinationData = data?.filter((dest) => dest.name === destination)[0];

  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle title="pick your destination" index="1" />

      <div className="flex flex-col gap-[2rem] lg:flex-grow lg:flex-row lg:items-center">
        <div className="flex w-full flex-grow items-center justify-center px-[5.5rem] py-[1.6rem] sm:px-[12rem] sm:py-[2.5rem] lg:w-[37vw] lg:px-[4rem] lg:py-[8rem]">
          <img
            src={`destination/image-${destinationData?.name.toLowerCase()}.png`}
            alt="moon"
            className="h-full w-full"
          />
        </div>

        <div>
          <div className="flex flex-col gap-[24px] self-center sm:mx-auto sm:max-w-[32rem] lg:max-w-[28rem] lg:items-start">
            <ul className="flex h-[2rem] justify-center gap-[2rem] font-barlow-condensed text-[0.875rem] uppercase tracking-[0.15em] text-accent lg:text-[1rem]">
              {data?.map((destinationItem) => (
                <li key={destinationItem.name}>
                  <div className="flex h-full flex-col">
                    <NavLink
                      to={`/destinations?destination=${destinationItem.name}`}
                      className={`flex flex-grow flex-col after:mb-0 after:mt-auto after:block after:flex-grow after:border-b-[3px] after:border-solid after:border-b-white after:content-[''] hover:after:opacity-[0.5] ${destination === destinationItem.name ? 'after:opacity-[1]' : 'after:opacity-[0]'}`}
                    >
                      {destinationItem.name}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-[1rem] text-center lg:text-start">
              <h2 className="font-bellefair-regular text-[3.5rem] uppercase text-white sm:text-[5rem] lg:text-[6rem]">
                {destinationData?.name}
              </h2>

              <p className="font-barlow-regular text-[1rem] text-accent lg:text-[1.125rem]">
                {destinationData?.description}
              </p>
            </div>

            <hr className="h-[1px] w-full border-white opacity-[0.25]" />

            <div className="flex flex-col gap-[1.5rem] sm:flex-row sm:justify-around lg:w-full lg:flex-grow lg:justify-between">
              <div className="flex flex-col items-center gap-[0.75rem] uppercase lg:mr-auto lg:items-start">
                <p className="font-barlow-condensed text-[0.875rem] tracking-[2px] text-accent">
                  Avg. Distance
                </p>
                <p className="font-bellefair-regular text-[1.75rem] text-white lg:text-[1.75rem]">
                  {destinationData?.distance}
                </p>
              </div>

              <div className="flex flex-col items-center gap-[0.75rem] uppercase lg:mr-auto lg:items-start">
                <p className="font-barlow-condensed text-[0.875rem] tracking-[2px] text-accent">
                  Est. travel time
                </p>
                <p className="font-bellefair-regular text-[1.75rem] text-white lg:text-[1.75rem]">
                  {destinationData?.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationPage;
