import { HomeSectionFourDiv } from "../../Components/homeSectionFourDiv";

export default function SectionFour() {
  return (
    <div className="mt-10 w-full">
      <div className="flex px-10 justify-center max-w-[1340px] mx-auto">
        <h1 className="text-black text-2xl md:text-3xl font-bold text-center">
          News & Views
        </h1>
      </div>
      <div className="flex grid m-auto p-10 gap-x-6 gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1340px]">
        <HomeSectionFourDiv image = {"https://www.starestate.com/assets/images/awards-th.webp"}/>
        <HomeSectionFourDiv image = {"https://www.starestate.com/assets/images/awards-th.webp"}/>
        <HomeSectionFourDiv image = {"https://www.starestate.com/assets/images/awards-th.webp"}/>
        <HomeSectionFourDiv image = {"https://www.starestate.com/assets/images/awards-th.webp"}/>
      </div>
    </div>
  );
}
