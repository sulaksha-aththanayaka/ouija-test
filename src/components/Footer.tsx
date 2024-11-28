import logo from "../assets/logo_lg.png"
import icons from "../assets/icons.png"

function Footer() {
  return (
    <div className="bg-footer-image bg-top pt-[15vw] md:pt-[10vw] flex flex-col items-center">
        <div className="w-[90vw] flex flex-col md:flex-row md:justify-between mx-[5vw]">
            <div className="w-[10vw] min-w-[83px] max-w-[161px] md:object-fill mx-auto mb-[5vw] md:mb-0">
                <img src={logo} alt="" className="coin"/>
            </div>

            {/* icons for small screen */}
            <div className="mx-auto mb-[5vw] md:mb-0 flex md:hidden w-[60vw] justify-center">
                <img src={icons} alt="" className="object-center"/>
            </div>

            <div className="hidden md:flex">
                <ul className="flex capitalize justify-between w-[70vw] ml-[10vw] items-center pl-[5vw] text-[10px] xl:text-[14px] 2xl:text-[18px]">
                    <div className="bg-home-arrow w-[12vw] h-[4.5vw] max-w-[250px] bg-contain bg-no-repeat flex justify-center items-center">
                        <li className="text-center text-white">Home</li>
                    </div>
                    <li>About</li>
                    <li>Tokenomics</li>
                    <li>How to buy</li>
                    <li>Road map</li>
                </ul>
            </div>

            <div className="flex md:hidden mx-auto">
                <ul className="flex flex-col capitalize justify-between w-[70vw] md:ml-[10vw] items-center md:pl-[5vw] text-[10px]">
                    <div className="bg-home-arrow w-[20vw] h-[8vw] max-w-[250px] bg-contain bg-no-repeat flex justify-center items-center mb-[5vw]">
                        <li className="text-center text-white">Home</li>
                    </div>
                    <li className="mb-[3vw]">About</li>
                    <li className="mb-[3vw]">Tokenomics</li>
                    <li className="mb-[3vw]">How to buy</li>
                    <li className="mb-[3vw]">Road map</li>
                </ul>
            </div>
        </div>  

        <div className="w-[90vw]">
            <div className="mb-[5vw] md:flex items-end md:justify-between w-[100%] justify-center">
                <p className="text-[14px] md:text-[16px] 2xl:text-[18px] text-center">@2024 Ouija Coin All Right Reserved</p>
                <img src={icons} alt="" className="hidden md:block w-[20vw]"/>
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default Footer