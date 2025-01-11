const services = () => {
    return (
        <>
            <div className="bg-gray-300 h-full">
                <h1 className="text-2xl sm:text-4xl font-bold p-4 text-center"> Services</h1>
                <div className="flex justify-center px-4">
                    <div className="services grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-6 m-5 lg:w-[70%]">
                        <div className=" bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/constru.png" alt="" />
                            <h1>Construction</h1>
                        </div>
                        <div className=" bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Renov.png" alt="" />
                            <h1>Renovation</h1>
                        </div>
                        <div className=" bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/consu.png" alt="" />
                            <h1>Consultation</h1>
                        </div>
                        <div className=" bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/repair.png" alt="" />
                            <h1>Repair Services</h1>
                        </div>
                        <div className=" bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
                            <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Archit.png" alt="" />
                            <h1>Architecture</h1>
                        </div>
                        <div className=" bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
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