export default function Contact() {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 flex justify-between items-center max-w-lg mx-auto my-24" id="contact">
        {/* Text Content */}
        <div>
          <p className="text-lg font-medium">Want to work together?</p>
          <p className="text-sm text-gray-600">Follow the link and let's get in touch.</p>
        </div>
  
        {/* Button */}
        <button className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800">
          Contact
        </button>
      </div>
    );
  }
  