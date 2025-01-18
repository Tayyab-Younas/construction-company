const about = () => {
  return (
    <>
      <div className="lg:relative text-white font-sans my-4">
        <img className="w-full lg:w-[60%] p-9" src="./src/assets/about-img.png" alt="" />
        <div className="lg:absolute p-8 xl:p-10 lg:p-5 lg:top-16 xl:top-24 lg:left-[51%] mx-auto lg:w-[30%] h-[65%] bg-blue-800 lg:text-xs xl:text-2xl">
          <h1 className="font-medium text-3xl mb-4">About us</h1>
          <div className="text-sm mb-3 xl:text-lg">
          <p className="mb-3">For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. 
            </p>
          <p>
          We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
          </div>
          <button className="bg-white p-2 rounded font-medium text-blue-700 font-sans text-sm xl:text-base">More on Our History</button>
        </div>
      </div>



    </>
  )
}

export default about