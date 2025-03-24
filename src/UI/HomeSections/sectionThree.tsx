import HomeSectionThreeDiv from "../../Components/homeSectionThreeDiv";

export default function SectionThree() {
  return (
    <div className="mt-10 w-full">
      <div className="flex justify-center max-w-[1340px] mx-auto px-10">
        <h1 className="text-black text-3xl font-bold text-center">
          Find your dream property in the city you're searching in
        </h1>
      </div>
      <div className="flex grid m-auto p-10 gap-x-6 gap-y-4 grid-cols-2 md:grid-cols-4 max-w-[1340px]">
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
        <HomeSectionThreeDiv image = {"https://ecis.in/apis/star-estate-API/star_estate/city/delhi1.webp"}/>
      </div>
    </div>
  );
}
