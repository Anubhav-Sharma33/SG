export default function MenuWithSubMenu({
  list,
  index,
  openIndex,
  handleToggle,
  isLargeScreen,
}: any) {
  // Force the MEDIA submenu open on large screens.
  const alwaysOpen = isLargeScreen && list.title === "MEDIA";
  const isOpen = alwaysOpen ? true : openIndex === index;

  return (
    <li className={list.title !== "MEDIA" ? "lg:hidden" : ""}>
      <details
        open={isOpen}
        onToggle={(e) => {
          // If it's the MEDIA submenu on a large screen, ensure it stays open.
          if (alwaysOpen && !(e.target as HTMLDetailsElement).open) {
            (e.target as HTMLDetailsElement).open = true;
          }
        }}
        className="group [&_summary::-webkit-details-marker]:hidden"
      >
        <summary
          onClick={(e) => {
            // Prevent toggling on MEDIA submenu if on a large screen.
            if (alwaysOpen) {
              e.preventDefault();
            } else {
              e.preventDefault();
              handleToggle(index);
            }
          }}
          className={`${alwaysOpen ? "cursor-default" : "cursor-pointer"} flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
        >
          <span className="text-sm font-medium">{list.title}</span>
          <span className={`shrink-0 transition duration-300 ${isOpen ? "-rotate-180" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        {/* Scrollable submenu */}
        <ul
          className={`mt-2 space-y-1 px-4 transition-all duration-300 ${
            isOpen ? "max-h-40 overflow-y-auto" : "max-h-0 overflow-hidden"
          }`}
        >
          {list.list.map((cur: any, i: number) => (
            <li key={i}>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                {cur}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}