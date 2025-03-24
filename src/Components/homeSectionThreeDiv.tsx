export default function HomeSectionThreeDiv(props: any) {
  return (
    <div className="relative">
      <a>
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold leading-none hover:bg-green-500 hover:text-white hover:cursor-pointer">
          +
        </div>
        <img src={props.image} className="w-full h-auto object-cover" />
      </a>
    </div>
  );
}
