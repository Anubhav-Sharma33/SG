import Banner from "./UI/GeneralSections/banner"
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
