export default function FooterMenu(props: any) {
    const { title, submenu, social } = props.menu;
    return (
      <div className="flex flex-1 flex-col px-2 py-1">
        <span className="text-sm font-medium text-white">{title}</span>
        <ul className={`flex mt-1 ${social  ? "flex-row space-x-2" : "flex-row space-x-4 space-y-2 flex-wrap sm:flex-col sm:space-y-2 sm:flex-nowrap"}`}>
          {submenu.map((cur: any, index: number) => {
            return (
              <li key={index} className="border border-white rounded-full px-2 sm:border-none sm:px-0">
                <a
                  href={cur.link}
                  className="text-xs text-white hover:text-blue-500 transition duration-300"
                >
                  {cur.placeholder}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  