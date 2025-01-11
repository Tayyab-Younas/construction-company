const about = () => {
  return (
    <>
      <div className="mx-auto lg:m-20 relative text-white font-sans">
        <img className="w-full lg:w-[60%]" src="./src/assets/about-img.png" alt="" />
        <div className="absolute p-4 lg:p-9 top-24 left-[51%] w-[90%] lg:w-[30%] h-auto bg-blue-800 lg:text-xs">
          <h1 className="font-medium text-3xl lg:text-5xl mb-9">About us</h1>
          <div className="text-sm lg:text-base mb-5">
          <p className="mb-5">For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. 
            </p>
          <p>
          We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
          </div>
          <button className="bg-white p-2 rounded font-medium text-blue-700 font-sans text-sm lg:text-base">More on Our History</button>
        </div>
      </div>



    </>
  )
}

export default about