const Reputation = () => {
  return (
    <>
    <div className="">
    <div className=" flex justify-center mt-4 text-2xl font-sans font-medium">
        Our Reputation
    </div>
    </div>
    <div className="flex flex-row space-x-10 justify-center mt-10">
    <div className="card-3 border w-[14%]">
    <div className="justify-center">
        <img className="w-9 m-3" src="./src/assets/icon-1.jpg" alt="" />
        <h1 className=" font-medium m-3">Best Services</h1>
        <p className="m-3 mb-4">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
    </div>
    </div>
    <div className="card-3 border w-[14%]">
    <div className="justify-center">
        <img className="w-9 m-3" src="./src/assets/icon-1.jpg" alt="" />
        <h1 className=" font-medium m-3">Best Team</h1>
        <p className="m-3 mb-4">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
    </div>
    </div>
    <div className="card-3 border w-[14%]">
    <div className="justify-center">
        <img className="w-9 m-3" src="./src/assets/icon-3.jpg" alt="" />
        <h1 className=" font-medium m-3">Best Designs</h1>
        <p className="m-3 mb-4">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Reputation