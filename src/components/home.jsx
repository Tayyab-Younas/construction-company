const home = () => {
    return (
        <div className="homa-img relative">
        <img 
          src="./src/assets/main.png" 
          alt="Main" 
          className="w-full h-auto object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-start">
          <h1 className="ml-5 lg:text-5xl md:text-2xl sm:text-lg text-base font-sans font-medium text-black">
            Building things <br /> is our mission
          </h1>
        </div>
      </div>
      
    )
}

export default home