import logo from "../assets/logo_lg.png"
import menu from "../assets/menu.png"
import hero_letters from "../assets/hero_letters.png"
import sun_hero from "../assets/sun_hero.png"
import moon_hero from "../assets/moon_hero.png"
import About from "./About"
import hero_bg from "../assets/hero_bg.png"

function Hero() {

  return (
    <div className="flex flex-col bg-[url('/assets/hero_bg.png')] items-center pt-[2vw]" style={{ backgroundImage: `url(${hero_bg})` }}>
 
        {/* menu and logo */}
        <div className="w-[90vw] flex justify-between mx-[5vw]">
            <div className="w-[10vw] min-w-[83px] max-w-[161px] md:object-fill">
                <img src={logo} alt="" className="coin"/>
            </div>

            <div className="hidden md:flex">
                <ul className="flex capitalize justify-between w-[70vw] ml-[10vw] items-center pl-[5vw] text-[10px] xl:text-[14px] 2xl:text-[18px]">
                    <div className="bg-home-arrow  hover:scale-105 w-[12vw] h-[4.5vw] max-w-[250px] bg-contain bg-no-repeat flex justify-center items-center">
                        <button className="w-full h-full">
                            <li className="text-center text-white">Home</li>
                        </button>
                    </div>
                    <button className="p-[0.8vw] hover:scale-105 ease-in-out transition duration-100  hover:shadow-2xl"><li>About</li></button>
                    <button className="p-[0.8vw] hover:scale-105 ease-in-out transition duration-100  hover:shadow-2xl"><li>Tokenomics</li></button>
                    <button className="p-[0.8vw] hover:scale-105 ease-in-out transition duration-100  hover:shadow-2xl"><li>How to buy</li></button>
                    <button className="p-[0.8vw] hover:scale-105 ease-in-out transition duration-100  hover:shadow-2xl"><li>Road map</li></button>
                </ul>
            </div>

            <div>
                <img src={menu} alt="" className="object-none md:hidden"/>
            </div>
        </div>    

        {/* hero text */}
        <div className="md:w-[70vw] xl:w-[56vw] 3xl:w-[70vw] -mt-[3vw] xl:mb-[2vw] 3xl:mb-0 md:mt-[3vw]">
            <img src={hero_letters} alt="" />
        </div>    

        {/* yes no buttons */}
        <div className="flex w-[90vw] md:w-[40vw] -mt-[7vw] justify-between text-white items-center">
            <div className="bg-no-arrow w-[36vw] md:w-[18vw] h-[13vw] md:h-[6.5vw] bg-contain bg-no-repeat flex justify-center items-center text-[12px] sm:text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[18px]">
                <p>NO</p>
            </div>

            <div className="bg-yes-arrow w-[36vw] md:w-[18vw] h-[13vw] md:h-[6.5vw] bg-contain bg-no-repeat flex justify-center items-center text-[12px] sm:text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[18px]">
                <p>Yes</p>
            </div>
        </div>  

        {/* ready to start with moon and sun*/}
        <div className="w-full flex justify-between mt-[2vw]">
            <div className="w-[25vw] max-w-[714px] -mt-[4vw] md:-mt-[18vw]">
                <img src={sun_hero} alt=""/>
            </div>

            <div className="text-[15px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] mr-[7vw]">
                <p className="capitalize text-center">Get ready to start ouija !</p>
            </div>

            <div className="w-[18vw] max-w-[393px] -mt-[4vw] md:-mt-[18vw]">
                <img src={moon_hero} alt=""/>
            </div>

        </div>    

        {/* about */}
        <About/>

    </div>
  )
}

export default Hero