import { NavLink, useSearchParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { useData } from '../contexts/DataContext';
import Loader from '../components/Loader';
import { useScreenWidth } from '../hooks/useScreenWidth';

function convertToKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function TechnologyPage() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useData();
  const screenWidth = useScreenWidth();

  const technology = searchParams.get('technology') || 'launch-vehicle';

  const technologyData = data?.filter(
    (tech) => convertToKebabCase(tech.name) === technology,
  )[0];

  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle title="space launch 101" index="3" />

      <div className="flex h-full flex-col items-center justify-center gap-[2rem] overflow-visible lg:flex-row-reverse">
        <div className="box-border flex w-screen items-center justify-center overflow-hidden pt-[4rem] lg:p-0">
          <img
            src={
              screenWidth >= '1100'
                ? technologyData?.images.portrait.replace('./assets/', '')
                : technologyData?.images.landscape.replace('./assets/', '')
            }
            alt="launch"
            className="block h-auto min-w-full object-cover lg:h-[37.5rem] lg:w-[38rem]"
          />
        </div>

        <div className="flex flex-col items-center gap-[2.5rem] lg:min-w-[40rem] lg:flex-row lg:gap-[4rem]">
          <div className="flex max-w-[32rem] gap-[1rem] text-center leading-normal lg:flex-col lg:gap-[2rem]">
            {data?.map((tech, index) => (
              <NavLink
                to={`?technology=${convertToKebabCase(tech.name)}`}
                key={tech.name}
                className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border-[1px] border-white border-opacity-[0.25] font-bellefair-regular text-[1rem] transition-all duration-[0.2s] hover:border-opacity-[1] sm:h-[3.5rem] sm:w-[3.5rem] sm:text-[1.5rem] lg:h-[5rem] lg:w-[5rem] lg:text-[2rem] ${technology !== convertToKebabCase(tech.name) ? 'bg-transparent text-white' : 'bg-white text-primary'}`}
              >
                {index + 1}
              </NavLink>
            ))}
          </div>

          <div className="flex max-w-[32rem] flex-col gap-[1rem] text-center">
            <div className="flex flex-col gap-[1rem] lg:items-start">
              <span className="font-bellefair-regular text-[1rem] uppercase text-white opacity-[0.5] sm:text-[1.5rem] lg:text-[2rem]">
                The Terminology...
              </span>
              <h3 className="font-bellefair-regular text-[1.5rem] uppercase text-white sm:text-[2.5rem] lg:text-[3.5rem] lg:leading-normal">
                {technologyData?.name}
              </h3>
            </div>

            <p className="font-barlow-regular text-[15px] text-accent lg:text-start lg:text-[1.125rem]">
              {technologyData?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyPage;
