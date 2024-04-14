export const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse p-8 mx-auto lg:flex-row">
        <div className="flex flex-col m-10 space-y-10 mb-44 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            All the Financials, None of the Noise.
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Your source for financial documents, untainted by fear-mongering or
            fake news.
          </p>
          <div className="mx-auto lg:mx-0">
            <button className="px-10 py-5 text-2xl font-bold text-white rounded bg-primary lg:py-4 hover:opacity-70">
              Get Started
            </button>
          </div>
        </div>
        <div className="mx-auto mb-24 md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img
            src={
              "https://help.apple.com/assets/6598817BD84F513BE609FC12/6598817CFF5E0690C7035CD9/en_US/fd8d219f2ca7695066006a4bfdeec861.png"
            }
            alt="iPhone displaying Stocks app with financial charts visible"
          />
        </div>
      </div>
    </section>
  );
};
