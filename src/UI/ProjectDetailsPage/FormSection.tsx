
import ReraBox from './ReraBox'
import Hero from './Hero'
import Form from './Form'

const FormSection = () => {
    return (
    <div className="w-full relative p-[20px] bg-[url('https://www.starestate.com/assets/images/card-bg.jpg')] bg-cover bg-center lg:absolute lg:top-[10%] lg:right-[0%] lg:max-w-[330px]">
        <ReraBox parent ={"Form"}/>
        <Hero/>
        <Form/>
    </div>
  )
}

export default FormSection