import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Hero from "../components/Hero"
import RoadMap from "../components/RoadMap"
import Tokenomics from "../components/Tokenomics"


function Home() {

  return (
    <div>
        <Hero/>
        {/* <About/> */}
        <Tokenomics/>
        {/* <HowToBuy/> */}
        <RoadMap/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home