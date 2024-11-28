import logo from "../assets/logo.png"
import roadmap_bg from "../assets/roadmap_bg.png"

function RoadMap() {
  return (
    <div className="z-0 bg-[url('/assets/roadmap_bg.png')] pt-[80vw] sm:pt-[50vw] xmd:pt-[38vw] md:pt-[40vw] xl:pt-[20vw] bg-top relative flex flex-col items-center"  style={{ backgroundImage: `url(${roadmap_bg})` }}>
       
      {/* roadmap text */}
      <div className="">
        <p className="uppercase text-center text-[29px] md:text-[40px] 2xl:text-[60px]">Road map</p>
      </div>

      {/* detail cards */}
      <div className="flex flex-col items-center md:hidden pb-[160vw] xs:pb-[40vw]">
        <div>
          <h1 className="text-[30px]">1</h1>
          <div className="w-[90vw] sm:w-[80vw] border-[1vw] p-[3vw] border-[#1A1A19] rounded-3xl">
            <div className="w-[82vw] sm:w-[72vw] border-[1vw] border-[#CBA966] rounded-3xl">
              <p className="capitalize py-[3vw] px-[6vw] text-center text-[14px]">Research, define token utility, ecosystem, & market strategy development.</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[30px]">2</h1>
          <div className="w-[90vw] sm:w-[80vw] border-[1vw] p-[3vw] border-[#1A1A19] rounded-3xl">
            <div className="w-[82vw] sm:w-[72vw] border-[1vw] border-[#CBA966] rounded-3xl">
              <p className="capitalize py-[3vw] px-[6vw] text-center text-[14px]">Research, define token utility, ecosystem, & market strategy development.</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[30px]">3</h1>
          <div className="w-[90vw] sm:w-[80vw] border-[1vw] p-[3vw] border-[#1A1A19] rounded-3xl">
            <div className="w-[82vw] sm:w-[72vw] border-[1vw] border-[#CBA966] rounded-3xl">
              <p className="capitalize py-[3vw] px-[6vw] text-center text-[14px]">Research, define token utility, ecosystem, & market strategy development.</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[30px]">4</h1>
          <div className="w-[90vw] sm:w-[80vw] border-[1vw] p-[3vw] border-[#1A1A19] rounded-3xl">
            <div className="w-[82vw] sm:w-[72vw] border-[1vw] border-[#CBA966] rounded-3xl">
              <p className="capitalize py-[3vw] px-[6vw] text-center text-[14px]">Research, define token utility, ecosystem, & market strategy development.</p>
            </div>
          </div>
        </div>
      </div>

      {/* detail cards large screen */}
      <div className="hidden md:flex flex-col items-center pb-[30vw]">
        <div className="flex w-[62vw] justify-between">
          <div>
            <h1 className="text-[40px] xl:text-[50px]">1</h1>
            <div className="w-[30vw] border-[0.5vw] p-[1vw] border-[#1A1A19] rounded-3xl">
              <div className="w-[27vw] border-[0.5vw] border-[#CBA966] rounded-3xl">
                <p className="capitalize py-[1vw] px-[1vw] text-center text-[18px] 2xl:text-[22px] 3xl:text-[25px]">Research, define token utility, ecosystem, & market strategy development.</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[40px] xl:text-[50px]">2</h1>
            <div className="w-[30vw] border-[0.5vw] p-[1vw] border-[#1A1A19] rounded-3xl">
              <div className="w-[27vw] border-[0.5vw] border-[#CBA966] rounded-3xl">
                <p className="capitalize py-[1vw] px-[1vw] text-center text-[18px] 2xl:text-[22px] 3xl:text-[25px]">Research, define token utility, ecosystem, & market strategy development.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex w-[62vw] justify-between mt-[2vw]">
          <div>
            <div className="w-[24vw] border-[0.5vw] p-[1vw] border-[#1A1A19] rounded-3xl">
              <div className="w-[21vw] border-[0.5vw] border-[#CBA966] rounded-3xl">
                <p className="capitalize py-[1vw] px-[1vw] text-center text-[18px] 2xl:text-[22px] 3xl:text-[25px]">Research, define token utility, ecosystem, & market strategy development.</p>
              </div>
            </div>
            <h1 className="text-[40px] xl:text-[50px]">3</h1>
          </div>

          <div>
            <div className="w-[36vw] border-[0.5vw] p-[1vw] border-[#1A1A19] rounded-3xl">
              <div className="w-[33vw] border-[0.5vw] border-[#CBA966] rounded-3xl">
                <p className="capitalize py-[1vw] px-[1vw] text-center text-[18px] 2xl:text-[22px] 3xl:text-[25px]">Research, define token utility, ecosystem, & market strategy development.</p>
              </div>
            </div>
            <h1 className="text-[40px] xl:text-[50px]">4</h1>
          </div>
        </div>
      </div>

      {/* coins */}
      <div className="w-[92vw] absolute top-0 bottom-0 mt-[6vw] hidden md:block">
        <div className="flex justify-end">
          <img src={logo} alt="" className="w-[10vw] max-w-[164px] coin"/>
        </div>

        <div className="w-[85vw] mx-auto flex justify-between mt-[28vw]">
          <img src={logo} alt="" className="w-[10vw] max-w-[164px] coin"/>
          <img src={logo} alt="" className="w-[10vw] max-w-[164px] coin"/>
        </div>

        <div className="w-[90vw] mx-auto flex justify-between mt-[10vw]">
          <img src={logo} alt="" className=" w-[12vw] max-w-[240px] coin"/>
          <img src={logo} alt="" className=" w-[12vw] max-w-[240px] coin"/>
        </div>
      </div>
    </div>
  )
}

export default RoadMap