import tokenomics from "../assets/tokenomics.png"
import HowToBuy from "./HowToBuy"

function Tokenomics() {
  return (
    <div className="flex flex-col bg-[#E9D5A2]  md:bg-hero-image bg-cover">
      <div className="flex flex-col md:flex-row items-center">

        {/* topic and detail boxes for large screens */}
        <div className="hidden md:block w-[40vw] px-[2vw]">
          <div>
            <p className="text-[40px] xl:text-[60px]">Tokenomics</p>
          </div>

          <div className="flex">
            <div>
            
              <div className="bg-[#EADAAF] w-[20vw] h-[20vw] flex flex-col items-center rounded-3xl shadow-2xl mb-[2vw]">
                <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] mt-[2vw]">Liquidity</p>
                <div className="bg-[#2C2C2A] p-[1vw] my-[3vw] w-[70%]">
                  <div className="border-2 border-[#C1A162]">
                    <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-white my-[2vw] text-center">Burnt</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EADAAF] w-[20vw] h-[20vw] flex flex-col items-center rounded-3xl shadow-2xl">
                <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] mt-[2vw]">Buy Tax</p>
                <div className="bg-[#2C2C2A] p-[1vw] my-[3vw] w-[70%]">
                  <div className="border-2 border-[#C1A162]">
                    <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-white m-[2vw] text-center ">0%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#EADAAF] h-[42vw] w-[28vw] ml-[2vw] flex flex-col justify-center items-center rounded-xl shadow-2xl">
              <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-center">Buy Tax</p>
              <div className="bg-[#2C2C2A] p-[1vw] mx-[2vw] my-[1vw] w-[80%]">
                <div className="border-2 border-[#C1A162]">
                  <p className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[35px] text-white m-[2vw] text-center ">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div>
          <img src={tokenomics} alt="" className="md:w-[60vw]"/>
        </div>

        {/* topic small screen*/}
        <div className="flex justify-center mb-[5vw] md:hidden">
          <p className="capitalize text-[24px] xs:text-[29px]">Tokenomics</p>
        </div>

        {/* detail boxes small screen*/}
        <div className="flex flex-col items-center md:hidden">
          <div className="bg-[#EADAAF] w-[90vw] flex flex-col items-center rounded-3xl shadow-2xl mb-[4vw]">
            <p className="text-[24px] xs:text-[30px] mt-[2vw]">Liquidity</p>
            <div className="bg-[#2C2C2A] p-[1vw] w-[60vw] my-[3vw]">
              <div className="border-2 border-[#C1A162]">
                <p className="text-[26px] xs:text-[35px] text-white m-[4vw] text-center ">Burnt</p>
              </div>
            </div>
          </div>

          <div className="bg-[#EADAAF] w-[90vw] flex flex-col items-center rounded-3xl shadow-2xl mb-[4vw]">
            <p className="text-[24px] xs:text-[30px] mt-[2vw]">Buy Tax</p>
            <div className="bg-[#2C2C2A] p-[1vw] w-[60vw] my-[3vw]">
              <div className="border-2 border-[#C1A162]">
                <p className="text-[26px] xs:text-[35px] text-white m-[4vw] text-center ">0%</p>
              </div>
            </div>
          </div>

          <div className="bg-[#EADAAF] w-[90vw] flex flex-col items-center rounded-3xl shadow-2xl">
            <p className="text-[24px] xs:text-[30px] mt-[2vw]">Sell Tax</p>
            <div className="bg-[#2C2C2A] p-[1vw] w-[60vw] my-[3vw]">
              <div className="border-2 border-[#C1A162]">
                <p className="text-[26px] xs:text-[35px] text-white m-[4vw] text-center ">0%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <HowToBuy/>
    </div>
  )
}

export default Tokenomics