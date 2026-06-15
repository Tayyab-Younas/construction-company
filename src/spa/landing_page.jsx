import { useState } from "react"

const LandingPage = () => {
 
  const [formData, setFormData] = useState({
    customername: "",
    customeremail: "",
    emailForNewsletter: "",
    reason: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactdata', JSON.stringify(formData));
    setFormData({
      customername: "",
      customeremail: "",
      emailForNewsletter: "",
      reason: "",
      Phone: "",
      Message: "",
    });
  };

  return (
    <>
    <section className="Navbar">
      <nav className="navbar flex flex-row justify-between m-auto p-4">
      <div className="brand-logo w-40 px-4">
        <img className="mb-2" src="./src/assets/logo.png" alt="" />
      </div>
      <div className="nav-link space-x-5 px-6 font-serif uppercase font-semi-bold text-sm">
        <a href="#home" className="hover:text-orange-300">Home</a>
        <a href="#About" className="hover:text-orange-300">About us</a>
        <a href="#Services" className="hover:text-orange-300">Services</a>
        <a href="#project" className="hover:text-orange-300">projects</a>
        <a href="#Contact" className="hover:text-orange-300">Contact Us</a>
      </div>
    </nav>
    </section>
       
   {/* Home section */}
   <section id="home">
    <div className="home-img relative" id="Home">
        <img 
          src="./src/assets/main.png" 
          alt="Main" 
          className="w-full h-auto object-cover" 
          />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="ml-5 lg:text-5xl md:text-2xl sm:text-lg text-capitalize uppercase font-serif text-black font-semibold">
            Building things is our mission
          </h1>
        </div>
      </div>
      <div className="text-center mt-4 text-xl sm:text-2xl font-sans font-medium">
        Our Reputation
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img className="w-12 mb-4" src="./src/assets/icon-1.jpg" alt="Icon 1" />
            <h1 className="font-medium mb-2">Best Services</h1>
            <p className="text-sm">Lorem ipsum dolor sit, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img className="w-12 mb-4" src="./src/assets/icon-1.jpg" alt="Icon 2" />
            <h1 className="font-medium mb-2">Best Team</h1>
            <p className="text-sm">Lorem ipsum dolor sit, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card-3 border w-full sm:w-[45%] lg:w-[20%] p-4">
          <div className="text-start">
            <img className="w-12 mb-4" src="./src/assets/icon-3.jpg" alt="Icon 3" />
            <h1 className="font-medium mb-2">Best Designs</h1>
            <p className="text-sm">Lorem ipsum dolor sit, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      </section>
      {/* Home section end */}

      {/* About section start */}
      <section id="About">
      <div className="lg:relative text-white font-sans my-4">
        <img className="w-full lg:w-[60%] p-9" src="./src/assets/about-img.png" alt="" />
        <div className="lg:absolute p-8 xl:p-10 lg:p-5 lg:top-16 xl:top-24 lg:left-[51%] mx-auto lg:w-[30%] h-[65%] bg-blue-800 lg:text-xs xl:text-2xl">
          <h1 className="font-medium text-3xl mb-4">About us</h1>
          <div className="text-sm mb-3 xl:text-lg">
            <p className="mb-3">For more than 30 years we have been delivering world-class construction and we have built many lasting relationships along the way.</p>
            <p>We have matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
          </div>
          <button className="bg-white p-2 rounded font-medium text-blue-700 font-sans text-sm xl:text-base">More on Our History</button>
        </div>
      </div>
      </section>
      {/* About section end */}

      {/* Services section start */}
      <section id="Services">
      <div className="bg-gray-300 h-full">
        <h1 className="text-2xl sm:text-4xl font-bold p-4 text-center">Services</h1>
        <div className="flex justify-center px-4">
          <div className="services grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-6 m-5 lg:w-[70%]">
            <div className="bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/constru.png" alt="" />
              <h1>Construction</h1>
            </div>
            <div className="bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Renov.png" alt="" />
              <h1>Renovation</h1>
            </div>
            <div className="bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/consu.png" alt="" />
              <h1>Consultation</h1>
            </div>
            <div className="bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/repair.png" alt="" />
              <h1>Repair Services</h1>
            </div>
            <div className="bg-white p-5 sm:p-7 gap-6 grid place-items-center shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/Archit.png" alt="" />
              <h1>Architecture</h1>
            </div>
            <div className="bg-blue-800 p-5 sm:p-7 gap-6 grid place-items-center text-white shadow-md">
              <img className="w-14 border-b-2 p-3" src="./src/assets/services-img/electric.png" alt="" />
              <h1>Electric</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[60%]" src="./src/assets/stats.png" alt="" />
        <div className="text w-60">
          <h2 className="text-blue-900 text-4xl mb-4 font-bold font-sans">30 Years Experience</h2>
          <p className="font-sans text-xs mb-4">Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
          <button className="bg-blue-800 text-white p-2 text-sm font-serif m-2 rounded">Contact us</button>
        </div>
      </div>
      <div className="p-20 bg-[url('./src/assets/ads.png')] bg-center bg-cover grid justify-center">
        <h1 className="text-white font-sans font-bold text-3xl mb-3">Free consulation with exceptional quality</h1>
        <button className="bg-transparent border text-white p-2 w-48 font-sans text-lg rounded mx-auto">Get your consulation</button>
      </div>
    </section>
    {/* Services section end */}

    {/* Project section start */}
    <section id="project">
      <div className="flex justify-center text-3xl font-bold font-sans mt-4">
        <h1>Projects</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-3">
        <div className="max-w-sm rounded mx-auto">
          <img src="./src/assets/pro-img/project1.png" alt="" />
          <h1 className="text-white bg-blue-900 p-3 font-semibold">Oregano Height</h1>
          <address className="text-white bg-blue-900 px-3">2464 Royal Ln. Mesa, New Jersey</address>
        </div>
        <div className="max-w-sm rounded mx-auto">
          <img src="./src/assets/pro-img/project2.png" alt="" />
          <h1 className="text-white bg-blue-900 p-3 font-semibold">Wish Stone Building</h1>
          <address className="text-white bg-blue-900 px-3">2972 Westheimer Rd. Santa Ana, Illionis</address>
        </div>
        <div className="max-w-sm rounded mx-auto">
          <img src="./src/assets/pro-img/project3.png" alt="" />
          <h1 className="text-white bg-blue-900 p-3 font-semibold">Mr. Parkinstons House</h1>
          <address className="text-white bg-blue-900 px-3">3517 W. Gray St. San Francisco, California</address>
        </div>
        <div className="max-w-sm rounded mx-auto">
          <img src="./src/assets/pro-img/project4.png" alt="" />
          <h1 className="text-white bg-blue-900 p-3 font-semibold">Wildstone Infra Hotel</h1>
          <address className="text-white bg-blue-900 px-3">4845 E. Washington St. San Diego, California</address>
        </div>
      </div>
    </section>
    {/* project section end */}

    {/* contact section start*/}
    <section id="Contact">
      <div className="bg-gray-50 mt-5 flex items-center justify-center p-10" id="contact">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What can we do for you?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            We are ready to work on a project of any complexity, whether its commercial or residential.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                minLength={3}
                maxLength={11}
                name="customername"
                value={formData.customername}
                onChange={handleChange}
                placeholder="Your Name*"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                required
              />
              <input
                type="email"
                name="customeremail"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleChange}
                value={formData.customeremail}
                placeholder="Email*"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                required
              >
                <option value="">Reason for Contacting*</option>
                <option value="consultation">Consultation</option>
                <option value="support">Support</option>
              </select>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                minLength={11}
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
              />
            </div>
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
            ></textarea>
            <button
              type="submit"
              className="w-40 bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* Contact section end*/}

    {/* footer section start*/}
    <div className="md:flex m-12 justify-around items-center">
      <div className="leading-10">
        <h1><span className="text-blue-800 uppercase">Address:</span> 6391 Elgin St. Celina, Delaware 10299</h1>
        <h2><span className="text-blue-800 uppercase">Phone:</span> +84 1102 2703</h2>
        <h3><span className="text-blue-800 uppercase">Email:</span> hello@thebox.com</h3>
      </div>
      <div className="mr-16">
        <h1 className="text-blue-800 uppercase">Newsletter:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="px-1 border"
            type="email"
            value={formData.emailForNewsletter}
            name="emailForNewsletter"
            placeholder="Your email here"
            required
          />
          <button className="bg-[#F9995D] hover:bg-[#F9995D] focus:outline-none focus:ring-2 focus:ring-[#F9995D] focus:ring-offset-2 text-white w-28 px-2 m-2" type="submit">
            Subscribe
          </button>
        </form>
        <h2 className="mb-3 text-sm font-sans uppercase text-blue-800">social:</h2>
        <div className="flex gap-2">
          <img className="h-6" src="./src/assets/fb.png" alt="" />
          <img className="h-6" src="./src/assets/linkedin.png" alt="" />
          <img className="h-6" src="./src/assets/twitter.png" alt="" />
        </div>
      </div>
    </div>
    <div className="h-12 bg-blue-800 p-5 text-white text-center">
      <h1>TheBox Company © 2022. All Rights Reserved</h1>
    </div>
    {/* footer section end*/}
    </>
  )
}

export default LandingPage