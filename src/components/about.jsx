const about = () => {
  return (
    <>
      <div className="m-20 relative text-white font-sans">
        <img className="w-[60%]" src="./src/assets/about-img.png" alt="" />
        <div className="absolute p-9 top-24 left-[51%] w-[30%] h-[66%] bg-blue-800 lg:text-xs">
          <h1 className="font-medium text-5xl mb-9">About us</h1>
          <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aperiam quasi enim magni inventore fuga eius odio perspiciatis optio commodi! Quo eius dolorum ipsam. Facilis assumenda aliquid veniam fuga nulla.</p>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur harum temporibus voluptas quam consectetur eveniet quae eius nemo laborum, illum, totam excepturi sed, dolorem provident porro earum inventore! Culpa.</p>
          <button className="bg-white p-2 rounded font-medium text-blue-700 font-sans text-lg">More on Our History</button>
        </div>
      </div>



    </>
  )
}

export default about