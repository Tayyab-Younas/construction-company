const services = () => {
    return (
        <>
            <div className="bg-gray-300">
                <h1 className="text-4xl font-bold p-4 flex justify-center"> Services</h1>
                <div className="flex justify-center">
                    <div className="services grid grid-cols-3 w-[50%]">
                        <div className=" bg-white p-7 m-10 grid place-items-center">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/constru.png" alt="" />
                            <h1>Construction</h1>
                        </div>
                        <div className=" bg-blue-800 p-7 m-10 grid place-items-center text-white">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Renov.png" alt="" />
                            <h1>Renovation</h1>
                        </div>
                        <div className=" bg-white p-7 m-10 grid place-items-center">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/consu.png" alt="" />
                            <h1>Consultation</h1>
                        </div>
                        <div className=" bg-blue-800 p-7 m-10 grid place-items-center text-white">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/repair.png" alt="" />
                            <h1>Repair Services</h1>
                        </div>
                        <div className=" bg-white p-7 m-10 grid place-items-center">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Archit.png" alt="" />
                            <h1>Architecture</h1>
                        </div>
                        <div className=" bg-blue-800 p-7 m-10 grid place-items-center text-white">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/electric.png" alt="" />
                            <h1>Electric</h1>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default services