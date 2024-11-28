import post1 from "../assets/post1.png"
import post2 from "../assets/post2.png"

function GetInTouch() {
  return (
    <div className="bg-[#1A1A19] flex flex-col md:flex-row items-center md:justify-between md:px-[5vw]">
        {/* get in touch text */}
        <div className="my-[5vw] w-[50vw] md:w-[22vw]">
            <p className="text-[#E6D4A3] uppercase text-[29px] sm:text-[32px] xl:text-[45px] 2xl:text-[54px] 3xl:text-[60px] text-center md:text-left">Get in touch</p>
        </div>

        {/* reviews */}
        <div className="flex flex-col md:flex-row -mb-[10vw] md:-mb-[5vw] md:-mt-[5vw] z-10 w-[80vw] md:w-[65vw] items-center md:justify-between">
            <div className="mb-[2vw] md:mb-0 md:w-[32vw]">
                <img src={post1} alt="" className="hover:scale-105 ease-in-out  transition duration-300"/>
            </div>
            <div className="md:w-[32vw]">
                <img src={post2} alt="" className="hover:scale-105 ease-in-out  transition duration-300" />
            </div>
        </div>
    </div>
  )
}

export default GetInTouch