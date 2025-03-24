export default function HomeSectionOneImage(props:any) {
  return (
    <div className="w-full">
      <img
        src={props.image}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
