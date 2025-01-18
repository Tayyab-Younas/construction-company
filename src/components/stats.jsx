
const stats = () => {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center items-center container">
        <img className=" w-[60%]" src="./src/assets/stats.png" alt="" />
        <div className="text w-60 ">
          <h2 className=" text-blue-900 text-4xl mb-4 font-bold font-sans">30 Years Experience</h2>
          <p className=" font-sans text-xs mb-4">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
          <button className="bg-blue-800 text-white p-2 text-sm font-serif m-2 rounded">Contact us</button>
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