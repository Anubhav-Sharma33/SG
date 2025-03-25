import Banner from "./UI/GeneralSections/banner"
import SectionFour from "./UI/HomeSections/sectionFour"
import SectionOne from "./UI/HomeSections/sectionOne"
import SectionThree from "./UI/HomeSections/sectionThree"
import Footer from "./UI/GeneralSections/footer"
import Header from "./UI/GeneralSections/header"
import Togglemenu from "./Components/togglemenu"

function App(){
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <SectionOne/>
      <SectionThree/>
      <SectionFour/>
      <Togglemenu/>
    </main>
    <Footer/>
    </>
  )
}

export default App
