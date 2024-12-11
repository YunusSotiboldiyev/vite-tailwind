export default function Footer() {
    return (
      <footer className="relative bg-black text-white py-8" id="footer">
        <div className="text-center">
          <span className="text-2xl font-cursive">Mirro</span>
        </div>
  
        <div className="flex flex-wrap justify-between mt-8 w-[80%] mx-auto">

          <div className="w-1/4">
            <ol className="space-y-2">
              <li className="text-brown uppercase tracking-wide">Pages</li>
              <li>Home</li>
              <li>Store</li>
              <li>About</li>
              <li>Contact</li>
              <li className="text-brown uppercase tracking-wide">Store Categories</li>
              <li>Presets</li>
              <li>Prints</li>
            </ol>
          </div>
  
          <div className="w-1/4">
            <ol className="space-y-2">
              <li className="text-brown uppercase tracking-wide">Preset Packs</li>
              <li>Mirro Preset Pack Vol. 01</li>
              <li>Mirro Preset Pack Vol. 02</li>
              <li>Mirro Preset Pack Vol. 03</li>
              <li>Mirro Preset Pack Vol. 04</li>
              <li className="text-brown uppercase tracking-wide">Business Areas</li>
              <li>Wedding Photography</li>
              <li>Sports Photography</li>
              <li>Portrait Photography</li>
              <li>Architecture Photography</li>
              <li>Animal Photography</li>
              <li>Food Photography</li>
              <li>Nature Photography</li>
            </ol>
          </div>
  
          <div className="w-1/4">
            <ol className="space-y-2">
              <li className="text-brown uppercase tracking-wide">Utility Pages</li>
              <li>Instructions</li>
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>404</li>
            </ol>
          </div>
  
          <div className="w-1/4">
            <div className="space-y-2">
              <span className="text-brown uppercase tracking-wide">Newsletter</span>
              <p>
                Subscribe to my newsletter where I share news about upcoming
                printings and preset sales.
              </p>
            </div>
            <div className="flex mt-4 space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        <div className="mt-12 flex justify-between items-center w-[80%] mx-auto">
          <div className="text-sm">
            © Mirro Photography, LLC. All rights reserved. Powered by Webflow
          </div>
          <div className="flex space-x-4 text-2xl">
  <i className="fab fa-linkedin text-white"></i>
  <i className="fab fa-instagram text-white"></i>
  <i className="fab fa-facebook text-white"></i>
  <i className="fab fa-twitter text-white"></i>
</div>
        </div>
      </footer>
    );
  }
  