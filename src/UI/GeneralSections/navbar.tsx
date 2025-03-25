// What needs to be done:-
//1.Hover effect and padding and margin setup and font-size and font
//2.Megamenu Setup
//3.Toggler setup
//4.Split code into Components
import { useState,useEffect,useRef } from "react";
import Megamenu from "../../Components/megamenu";
import Togglemenu from "../../Components/togglemenu";


export const list1 = {
  title: "CITY",
  list: [
    "Agra",
    "Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Bangalore",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
    "Chandigarh",
  ],
};
export const list2 = {
  title: "BUILDER",
  list: [
    "ABA Corp",
    "Ace",
    "Adani Realty",
    "Amrapali",
    "Ashiana Housing",
    "Assetz Property",
    "ATS",
    "Birla Estate",
    "BPTP",
    "Brigade",
    "County Group",
    "DLF",
    "Elan Group",
    "Eldeco",
    "Emaar India",
    "Embassy Group",
    "Experion",
    "GAURS",
    "Godrej Properties",
    "Gulshan",
    "Hero Realty",
    "Hiranandani Developer",
    "IRA Realty",
    "Jashn Realty",
    "Kalpataru",
    "Kolte Patil Developer",
    "L & T",
    "Laureate Buildwell",
    "Lodha",
    "M3M",
    "Mahagun Group",
    "Max Estates",
    "Narsi Group",
    "O P Chain",
    "Oberoi Realty",
    "Omaxe Limited",
    "Orion",
    "Oro",
    "Paras Buildtech",
    "Piramal Realty",
  ],
};
export const list3 = {
  title: "Projects",
  list: ["Resedential", "Commercial", "New Launches"],
};


export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  function handleClick(){
    setIsOpen((cur:any)=>{
      cur = !cur;
      return cur;
    })
  }

  return (
    <div className="relative  w-full bg-white shadow">
      <div className="w-full mx-auto flex items-center px-4 justify-between max-w-[1340px]">
        {/* Left section: Logo & Nav links */}
        <div className="flex items-center space-x-8">
          <div id="logo" className="text-xl font-bold">
            LOGO
          </div>
          <div
            id="navlinks"
            className="hidden lg:flex space-x-6 text-gray-600 font-medium"
          >
            <div className="group">
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center py-4"
              >
                <span>Link 1</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
              <Megamenu list={list1} />
            </div>
            <div className="group">
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center py-4"
              >
                <span>Link 2</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
              <Megamenu list = {list2}/>
            </div>
            <div className="group">
              <a
                href="#"
                className="hover:text-gray-900 transition-colors flex items-center py-4"
              >
                <span>Link 3</span>
                <i className="fa fa-caret-down ml-1"></i>
              </a>
              <Megamenu list = {list3}/>
            </div>
          </div>
        </div>

        {/* Right section: Register, Search, Toggler */}
        <div className="flex items-center space-x-1">
          {/* Register as Channel Partner */}
          <a
            href="/channel-partners-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="searchBtn px-3 py-4 text-gray-700 hover:text-gray-900 font-medium transition-colors flex items-center space-x-2"
            title="Register as a Channel Partner"
          >
            <span className="hidden lg:inline">
              Register as a Channel Partner
            </span>
            <i className="fa fa-user ml-1 text-green-600"></i>
          </a>

          {/* Vertical separator */}
          <span className="border-r-2 border-gray-300 h-6" />

          {/* Search Property */}
          <button
            className="searchBtn px-3 py-4 text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer flex items-center space-x-2"
            title="Search Property"
          >
            <span className="hidden lg:inline">Search Property</span>
            <i className="fa fa-search ml-1 text-green-600"></i>
          </button>

          {/* Vertical separator */}
          <span className="border-r-2 border-gray-300 h-6" />

          {/* Hamburger Menu Toggler */}
          <div className="menuBtn cursor-pointer px-3 py-4" ref = {menuRef} title="Toggle Menu" onClick={handleClick}>
            <span
              id="menuLine1"
              className="block w-6 h-0.5 bg-black mb-1"
            ></span>
            <span
              id="menuLine2"
              className="block w-6 h-0.5 bg-black mb-1"
            ></span>
            <span
              id="menuLine3"
              className="block w-6 h-0.5 bg-black mb-1"
            ></span>
            {isOpen && <Togglemenu/>}
          </div>
        </div>
      </div>
    </div>
  );
}
