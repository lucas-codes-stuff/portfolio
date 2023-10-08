function Home() {
  return (
    <div className="text-body-text flex h-full w-full flex-col justify-between">
      <div className="flex h-auto w-full flex-col space-y-6 pl-9 pt-9">
        <h1 className="text-6xl font-[600]">Lucas Furlong</h1>
        <h1 className="text-highlight text-5xl font-[400]">
          Software Engineer
        </h1>
      </div>
      <div className="relative flex h-1/2 items-center justify-center">
        <div className="box absolute h-72 w-[30rem] -translate-y-[85%] translate-x-[95%] transform border border-orange-500 bg-gray-200"></div>
        <div className="box absolute h-72 w-[30rem] border border-orange-500 bg-gray-200"></div>
        <div className="box absolute h-72 w-[30rem] -translate-x-[95%] translate-y-[85%] transform border border-orange-500 bg-gray-200"></div>
      </div>
      <div className="flex h-auto w-full flex-col items-end justify-end space-y-6 pr-9">
        <h1 className="text-6xl">Inspired by Innovation</h1>
        <h1 className="text-6xl">Dedicated to Difference</h1>
        <h1 className="text-highlight text-6xl font-[500]">
          <a>Find out how</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
