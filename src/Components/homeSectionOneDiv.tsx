import HomeSectionOneButton from "./homeSectionOneButton";
import HomeSectionOneImage from "./homeSectionOneImage";

export default function HomeSectionOneDiv() {
  return (
    <div className = "w-full">
      <HomeSectionOneImage image = {"https://www.starestate.com/assets/images/img-realty-check.webp"}/>
      {/* Apply background image here */}
      <HomeSectionOneButton/>
    </div>
  );
}