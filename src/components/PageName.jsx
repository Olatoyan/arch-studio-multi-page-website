function PageName({ children }) {
  return (
    <div className="absolute rotate-90 flex items-center gap-20 top-[12rem] left-[-8rem]">
      <div className="w-[10.4rem] h-[0.1rem] bg-light-grey"></div>
      <h2 className="text-[1.8rem] font-medium leading-[2.4rem] tracking-[1.8rem] text-light-grey uppercase">
        {children}
      </h2>
    </div>
  );
}

export default PageName;
