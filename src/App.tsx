import HomeSectionOneDiv from "./Components/homeSectionOneDiv"
import Banner from "./UI/GeneralSections/banner"
import Navbar from "./UI/GeneralSections/navbar"
import SectionFour from "./UI/HomeSections/sectionFour"
import SectionOne from "./UI/HomeSections/sectionOne"
import SectionThree from "./UI/HomeSections/sectionThree"
import Footer from "./UI/GeneralSections/footer"
import Header from "./UI/GeneralSections/header"

function App(){
  return (
    <>
    <Header/>
    <main className="relative">
      <Banner/>
      <SectionOne/>
      <SectionThree/>
      <SectionFour/>
    </main>
    <Footer/>
    </>
  )
}

export default App
