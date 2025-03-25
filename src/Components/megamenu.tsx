export default function Megamenu(props: any) {
  const { title, list } = props.list;

  return (
    <div className="absolute left-0 right-0 top-full w-full z-[1000] flex flex-col justify-start px-4 py-2 bg-white max-w-[1340px] max-h-[50vh] overflow-y-auto mx-auto shadow-lg hidden group-hover:block">
      <div className="text-lg font-bold text-gray-800 mb-2">{title}</div>
      <div className="border-b border-green-600 mb-2"></div>
      <div>
        <ul className="grid grid-cols-4 gap-4 text-gray-700">
          {list.map((cur: any, index: number) => (
            <a href="#">
                <li key={index} className="text-sm py-2 border-b border-gray-200">
              {cur}
            </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
