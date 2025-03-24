import HomeSectionOneDiv from "../../Components/homeSectionOneDiv";

export default function SectionOne() {
  return (
    <div className="mt-10 w-full">
      <div className = "flex justify-center max-w-[1340px] mx-auto">
        <h1 className="text-black text-2xl md:text-3xl font-bold">Insights & Tools</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 m-auto max-w-[1340px]">
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
        <HomeSectionOneDiv/>
      </div>
    </div>
  );
}
