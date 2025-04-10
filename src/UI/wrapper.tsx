export default function Wrapper(props: any) {
  const { children } = props;
  return (
    <div className="relative  w-full bg-white shadow">
      <div className="w-full mx-auto flex items-center px-4 justify-between max-w-[1340px]">
        {children}
      </div>
    </div>
  );
}
