
function Contact() {
    return (
    <>

    <div className="bg-gray-50 mt-5 flex items-center justify-center p-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What can we do for you?</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    We are ready to work on a project of any complexity, whether it's commercial or residential.
                </p>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Reason for Contacting*</option>
                            <option value="consultation">Consultation</option>
                            <option value="quote">Request a Quote</option>
                            <option value="support">Support</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </>        
    );
}

export default Contact
