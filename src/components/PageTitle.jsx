function PageTitle({ title, index }) {
  return (
    <div className="flex justify-center gap-[1.5rem] font-barlow-condensed text-[1rem] tracking-[4px] text-white sm:justify-start sm:text-[1.25rem] lg:text-[1.75rem]">
      <span className="font-bold opacity-[0.25]">0{index}</span>{' '}
      <h2 className="font-normal uppercase">{title}</h2>
    </div>
  );
}

export default PageTitle;
