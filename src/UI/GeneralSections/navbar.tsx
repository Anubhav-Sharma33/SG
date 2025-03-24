// What needs to be done:- 
//1.Hover effect and padding and margin setup and font-size and font
//2.Megamenu Setup
//3.Toggler setup
//4.Split code into Components


export default function Navbar() {
    return (
      <div className="w-full bg-white shadow">
        {/* Outer container at 90% width, centered */}
        <div className="w-full mx-auto flex items-center justify-between px-10 py-3 max-w-[1340px]">
          {/* Left section: Logo & Nav links */}
          <div className="flex items-center space-x-8">
            <div id="logo" className="text-xl font-bold">
              LOGO
            </div>
            <div
              id="navlinks"
              className="hidden lg:flex space-x-6 text-gray-600 font-medium"
            >
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center"
              >
                <span>Link 1</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center"
              >
                <span>Link 2</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center"
              >
                <span>Link 3</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
            </div>
          </div>
  
          {/* Right section: Register, Search, Toggler */}
          <div className="flex items-center space-x-1">
            {/* Register as Channel Partner */}
            <a
              href="/channel-partners-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="searchBtn px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2"
              title="Register as a Channel Partner"
            >
              <span className="hidden lg:inline">Register as a Channel Partner</span>
              <i className="fa fa-user ml-1 text-green-600"></i>
            </a>
  
            {/* Vertical separator */}
            <span className="border-r-2 border-gray-300 h-6" />
  
            {/* Search Property */}
            <button
              className="searchBtn px-3 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer flex items-center space-x-2"
              title="Search Property"
            >
              <span className="hidden lg:inline">Search Property</span>
              <i className="fa fa-search ml-1 text-green-600"></i>
            </button>
  
            {/* Vertical separator */}
            <span className="border-r-2 border-gray-300 h-6" />
  
            {/* Hamburger Menu Toggler */}
            <div className="menuBtn cursor-pointer px-3 py-2" title="Toggle Menu">
              <span id="menuLine1" className="block w-6 h-0.5 bg-black mb-1"></span>
              <span id="menuLine2" className="block w-6 h-0.5 bg-black mb-1"></span>
              <span id="menuLine3" className="block w-6 h-0.5 bg-black mb-1"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  