import { useState } from "react";
import MenuWithSubMenu from "./menuWithSubmenu";
import { list1, list2, list3,list4 } from "../UI/GeneralSections/navbar";

export default function Togglemenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="space-y-1 absolute top-full right-0 z-1000 bg-white w-[290px] max-h-[fit] overflow-y-scroll"
      onClick={(e) => {
        e.stopPropagation();
      }}>
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
  );
}
