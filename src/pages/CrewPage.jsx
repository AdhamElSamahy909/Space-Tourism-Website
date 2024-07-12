import { NavLink, useSearchParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { useData } from '../contexts/DataContext';
import Loader from '../components/Loader';

function convertToKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function CrewPage() {
  const [searchParams] = useSearchParams();
  let { data, isLoading } = useData();

  const name = 'Top Gangster';
  console.log(convertToKebabCase(name));

  let member = searchParams.get('member') || 'douglas-hurley';

  let memberData = data?.filter(
    (crewMember) => convertToKebabCase(crewMember.name) === member,
  )[0];

  if (memberData) console.log(memberData);

  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle title="meet your crew" index="2" />

      <div className="flex h-full flex-col gap-[2rem] lg:flex-row">
        <div>
          <div className="flex flex-col gap-[1.5rem] sm:items-center lg:h-full">
            <div className="flex flex-col items-center gap-[1.5rem] sm:max-w-[32rem] lg:my-auto lg:max-w-[40rem] lg:items-start lg:justify-self-center">
              <div className="flex flex-col items-center gap-[0.5rem] font-bellefair-regular lg:items-start lg:gap-[1rem]">
                <span className="text-[1.125rem] uppercase leading-none text-white opacity-[0.5] sm:text-[1.5rem] lg:text-[2rem]">
                  {memberData?.role}
                </span>
                <h3 className="text-[1.5rem] uppercase leading-none text-white sm:text-[2.5rem] lg:text-[3.5rem]">
                  {memberData?.name}
                </h3>
              </div>

              <p className="mb-[4.6rem] text-center font-barlow-regular text-[0.9rem] text-accent lg:text-start lg:text-[1.125rem]">
                {memberData?.bio}
              </p>
            </div>

            {/* Pagination  */}
            <div className="flex justify-center lg:w-full lg:justify-start">
              <div className="flex justify-center gap-[1rem]">
                {data?.map((crewMember) => (
                  <NavLink
                    key={crewMember.name}
                    to={`?member=${convertToKebabCase(crewMember.name)}`}
                    className={`h-[10px] w-[10px] rounded-full bg-white transition-opacity duration-[.2s] hover:opacity-[0.5] lg:h-[15px] lg:w-[15px] ${member === convertToKebabCase(crewMember.name) ? 'opacity-[1]' : 'opacity-[0.2]'}`}
                    replace
                  ></NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-grow items-center justify-center px-[1.75rem] py-[0.3rem] sm:p-0">
          <img
            src={memberData?.images.png.replace('./assets', '')}
            alt="crew"
          />
        </div>
      </div>
    </>
  );
}

export default CrewPage;
