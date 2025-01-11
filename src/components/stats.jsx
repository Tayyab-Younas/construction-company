
const stats = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 p-7 mx-auto items-center">
        <img className="w-full lg:w-[90%] sm:w-[80%] mx-auto" src="./src/assets/stats.png" alt="" />
        <div className="">
          <h2 className=" text-blue-900 text-5xl mb-8 font-bold font-sans w-80">30 Years of Experince</h2>
          <p className=" font-sans mb-8 w-60">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
          <button className="bg-blue-800 text-white p-2 w-28 text-lg font-serif m-2 rounded">Contact us</button>
        </div>
      </div>
      <div className=" p-20 bg-[url('./src/assets/ads.png')] bg-center bg-cover grid justify-center">
        <h1 className="text-white font-sans font-bold text-3xl mb-3"> Free consulation with exceptional quality</h1>
        <button className="bg-transparent border text-white p-2 w-48 font-sans text-lg rounded mx-auto">Get your consulation </button>
      </div>


    </>
  )
}

export default stats