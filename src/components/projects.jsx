

const projects = () => {
    return (
        <>
            <div className="flex justify-center text-3xl font-bold font-sans mt-4">
                <h1>Projects</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="max-w-sm rounded mx-auto">
                    <img src="./src/assets/pro-img/project1.png" alt="" />
                    <h1 className="text-white bg-blue-900 p-3 font-semibold">
                        Oregano Height
                    </h1>
                    <address className="text-white bg-blue-900 px-3">
                        2464 Royal Ln. Mesa, New Jersey
                    </address>

                </div>
                <div className="max-w-sm rounded mx-auto">
                    <img src="./src/assets/pro-img/project2.png" alt="" />
                    <h1 className="text-white bg-blue-900 p-3 font-semibold">
                        Wish Stone Building 
                    </h1>
                    <address className="text-white bg-blue-900 px-3">
                        2972 Westheimer Rd. Santa Ana, Illionis
                    </address>
                </div>
                <div className="max-w-sm rounded mx-auto">
                    <img src="./src/assets/pro-img/project3.png" alt="" />
                    <h1 className="text-white bg-blue-900 p-3 font-semibold">
                        Mr. Parkinstons House
                    </h1>
                    <address className="text-white bg-blue-900 px-3">
                        3517 W. Gray St. San Francisco, California
                    </address>
                </div>
                <div className="max-w-sm rounded mx-auto">
                    <img src="./src/assets/pro-img/project4.png" alt="" />
                    <h1 className="text-white bg-blue-900 p-3 font-semibold">
                        Wildstone Infra Hotel
                    </h1>
                    <address className="text-white bg-blue-900 px-3">
                        4845 E. Washington St. San Diego, California
                    </address>
                </div>
            </div>



        </>
    )
}

export default projects