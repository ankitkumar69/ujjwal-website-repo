

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              MyLogo
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex w-1/2 items-center">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Search for our property"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
           
            <a href="/shop" className="text-gray-800 hover:text-gray-600">
              Our property
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </div>

          {/* Hamburger menu (for small screens) */}
          <div className="md:hidden">
            <button className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
