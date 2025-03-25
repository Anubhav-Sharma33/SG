import { useState, useEffect } from "react";
import MenuWithSubMenu from "./menuWithSubmenu";
import { list1, list2, list3, list4 } from "../UI/GeneralSections/navbar";

export default function Togglemenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind's lg breakpoint is typically 1024px
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="absolute top-full right-0 z-1000 bg-white w-[290px] max-h-[400px] overflow-y-auto shadow-lg border border-gray-200 rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="space-y-1 p-2">
        <li>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
            About Us
          </a>
        </li>

        {/* Pass the screen size info down to each submenu */}
        <MenuWithSubMenu 
          list={list1} 
          index={0} 
          openIndex={openIndex} 
          handleToggle={handleToggle} 
          isLargeScreen={isLargeScreen} 
        />
        <MenuWithSubMenu 
          list={list2} 
          index={1} 
          openIndex={openIndex} 
          handleToggle={handleToggle} 
          isLargeScreen={isLargeScreen} 
        />
        <MenuWithSubMenu 
          list={list3} 
          index={2} 
          openIndex={openIndex} 
          handleToggle={handleToggle} 
          isLargeScreen={isLargeScreen} 
        />
        <MenuWithSubMenu 
          list={list4} 
          index={3} 
          openIndex={openIndex} 
          handleToggle={handleToggle} 
          isLargeScreen={isLargeScreen} 
        />

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
}
