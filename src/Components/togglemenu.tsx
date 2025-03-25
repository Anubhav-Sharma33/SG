import { useState, useEffect } from "react";
import MenuWithSubMenu from "./menuWithSubmenu";
import { list1, list2, list3, list4 } from "../UI/GeneralSections/navbar";

export default function Togglemenu() {
  // Find the index of the "MEDIA" list
  const mediaIndex = [list1, list2, list3, list4].findIndex((list) => list.title === "MEDIA");

  // State for openIndex
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenIndex(mediaIndex !== -1 ? mediaIndex : null); // Open MEDIA on larger screens
      } else {
        setOpenIndex(null); // Close all on smaller screens
      }
    };

    handleResize(); // Run once on mount

    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [mediaIndex]);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-2 px-1 absolute top-full right-0 z-1000 bg-white w-full sm:w-[290px]  max-h-[50vh] overflow-y-scroll">
      <ul
        className="space-y-1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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

        <MenuWithSubMenu list={list1} index={0} openIndex={openIndex} handleToggle={handleToggle} />
        <MenuWithSubMenu list={list2} index={1} openIndex={openIndex} handleToggle={handleToggle} />
        <MenuWithSubMenu list={list3} index={2} openIndex={openIndex} handleToggle={handleToggle} />
        <MenuWithSubMenu list={list4} index={3} openIndex={openIndex} handleToggle={handleToggle} />

        <li>
          <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
}
