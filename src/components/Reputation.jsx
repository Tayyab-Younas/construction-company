const Reputation = () => {
  return (
    <>
      <div className="text-center mt-4 text-xl sm:text-2xl font-sans font-medium">
        Our Reputation
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img
              className="w-12 mb-4"
              src="./src/assets/icon-1.jpg"
              alt="Icon 1"
            />
            <h1 className="font-medium mb-2">Best Services</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img
              className="w-12 mb-4"
              src="./src/assets/icon-1.jpg"
              alt="Icon 2"
            />
            <h1 className="font-medium mb-2">Best Team</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img
              className="w-12 mb-4"
              src="./src/assets/icon-3.jpg"
              alt="Icon 3"
            />
            <h1 className="font-medium mb-2">Best Designs</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reputation;
