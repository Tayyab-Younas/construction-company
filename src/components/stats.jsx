
const stats = () => {
  return (
    <>
      <div className="stats flex flex-row relative">
        <img className="w-[70%]" src="./src/assets/stats.png" alt="" />
        <div className="absolute top-[25%] left-[55%]">
          <h2 className=" text-blue-900 text-5xl mb-8 font-bold font-sans">30 Years <br /> of Experince</h2>
          <p className=" font-sans mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Soluta minima quisquam vel esse pariatur. In corporis doloribus <br /> laudantium asperiores eum quia dolore iusto, quos est fuga eaque.</p>
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