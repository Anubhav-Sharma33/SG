import Banner from "../UI/GeneralSections/banner";
import SectionFour from "../UI/HomeSections/sectionFour";
import SectionOne from "../UI/HomeSections/sectionOne";
import SectionThree from "../UI/HomeSections/sectionThree";

function Homepage() {
  return (
    <main>
      <Banner />
      <SectionOne />
      <SectionThree/>
      <SectionFour />
    </main>
  );
}

export default Homepage;
