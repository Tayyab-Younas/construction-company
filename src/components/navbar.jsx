
const navbar = () => {
  return (
   <nav className="navbar flex flex-row justify-between m-auto p-4">
    <div className="brand-logo w-12">
      <img className="mb-2" src="./src/assets/logo.jpg" alt="" />
      <img src="./src/assets/logo-text.png" alt="" />
    </div>
    <div className="nav-link space-x-5 p-6 font-sans uppercase">
    <a to="/" className="hover:text-orange-300"> Home </a>
    <a to="/" className="hover:text-orange-300"> About us </a>
    <a to="/" className="hover:text-orange-300"> projects</a>
    <a to="/" className="hover:text-orange-300"> Services </a>
    <a to="/" className="hover:text-orange-300"> Contact Us </a>
    </div>
   </nav>
  )
}

export default navbar