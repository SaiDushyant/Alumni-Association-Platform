import './styles.css'; // Import this only if you need to include custom styles

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        {/* Footer Call to Action */}
        <div className="border-b border-gray-700 pb-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-6 w-full px-4 md:w-1/3">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-3xl text-orange-500"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Find us</h4>
                  <span className="text-gray-500">
                    123 Innovation Drive, Tech City, CA 94016
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-6 w-full px-4 md:w-1/3">
              <div className="flex items-center">
                <i className="fas fa-phone text-3xl text-orange-500"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Call us</h4>
                  <span className="text-gray-500">(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="mb-6 w-full px-4 md:w-1/3">
              <div className="flex items-center">
                <i className="far fa-envelope-open text-3xl text-orange-500"></i>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">Mail us</h4>
                  <span className="text-gray-500">contact@nexgen.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-10">
          <div className="-mx-4 flex flex-wrap">
            {/* Footer Widget 1 */}
            <div className="mb-10 w-full px-4 md:w-1/3">
              <div className="footer-logo mb-6">
                <a href="/">
                  <img
                    // src="https://i.ibb.co/QDy827D/ak-logo.png" // Replace with your logo URL
                    alt="NexGen logo"
                    className="max-w-xs"
                  />
                </a>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                NexGen connects alumni associations with tools to enhance
                connections and support professional growth, bridging the gap
                between alumni and their alma mater.
              </p>

              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">Follow us</span>
                <a href="#" className="text-gray-400 hover:text-orange-500">
                  <i className="fab fa-facebook-f bg-facebook rounded-full p-2 text-white"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500">
                  <i className="fab fa-twitter bg-twitter rounded-full p-2 text-white"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500">
                  <i className="fab fa-linkedin bg-google rounded-full p-2 text-white"></i>
                </a>
              </div>
            </div>

            {/* Footer Widget 2 */}
            <div className="mb-10 w-full px-4 md:w-1/3">
              <h3 className="mb-6 text-xl font-semibold">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-orange-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-orange-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="hover:text-orange-500">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Widget 3 */}
            <div className="mb-10 w-full px-4 md:w-1/3">
              <h3 className="mb-6 text-xl font-semibold">Subscribe</h3>
              <p className="mb-4 text-sm text-gray-400">
                Stay updated with the latest news and updates from NexGen.
                Subscribe to our newsletter below.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-800 bg-gray-800 p-3 text-white"
                />
                <button className="border border-orange-500 bg-orange-500 p-3 text-white">
                  <i className="fab fa-telegram-plane text-xl"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; 2024 NexGen, All Rights Reserved
          </p>
          <ul className="flex space-x-4 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-500">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-500">
                Privacy
              </a>
            </li>
            <li>
              <a href="/policy" className="hover:text-orange-500">
                Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
