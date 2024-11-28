import logo from "../assets/logo.png"
import line from "../assets/line.png"
import gsap from "gsap"
import { useEffect } from "react";

function HowToBuy() {


  useEffect(() => {
    const tl = gsap.timeline({defaults: {duration: 6, repeat: -1, ease: "none"}});

    tl.fromTo(".coin-one", {
      x: '88vw',
    }, {
      x:'-22vw',
    }, 0).fromTo(".coin-two", {
      x: '66vw',
    }, {
      x:'-44vw',
    },
    1.5).fromTo(".coin-three", {
      x: '44vw',
    }, {
      x:'-66vw',
    }, 3).fromTo(".coin-four", {
      x: '22vw',
    }, {
      x:'-88vw',
    }, 4.5)      
    }, [])
  // const tl = gsap.timeline({defaults: {duration: 6, repeat: -1, ease: "none"}});

  // tl.fromTo(".coin-one", {
  //   x: '88vw',
  // }, {
  //   x:'-22vw',
  // }, 0).fromTo(".coin-two", {
  //   x: '66vw',
  // }, {
  //   x:'-44vw',
  // },
  //  1.5).fromTo(".coin-three", {
  //   x: '44vw',
  // }, {
  //   x:'-66vw',
  // }, 3).fromTo(".coin-four", {
  //   x: '22vw',
  // }, {
  //   x:'-88vw',
  // }, 4.5)      
  
  // gsap.to(tl, {time: 4, repeat: -1, delay: 2}); 
 
  return (
    <div className="md:bg-how-image bg-how-image-sm bg-cover mt-[10vw] md:mt-[5vw] flex flex-col items-center">
      {/* three logos */}
      <div className="flex w-[80vw] md:w-[60vw] justify-between md:mt-0">
        <div className="md:-mt-[3vw] sm:mt-[6vw]">
          <img src={logo} alt="" className="w-[12vw] max-w-[240px] min-w-[98px] coin"/>
        </div>
        <div className="-mt-[5vw]">
          <img src={logo} alt="" className="w-[12vw] max-w-[240px] min-w-[98px] coin"/>
        </div>
        <div className="md:-mt-[3vw] sm:mt-[6vw]">
          <img src={logo} alt="" className="w-[12vw] max-w-[240px] min-w-[98px] coin"/>
        </div>
      </div>

      {/* how to buy text */}
      <div className="mb-[5vw] mt-[5vw]">
        <p className="text-[29px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] capitalize">How to buy</p>
      </div>

      {/* detail card for small screen */}
      <div className="bg-[#252523] p-[3vw] w-[90vw] h-[60vw] rounded-3xl md:hidden">
        <div className="bg-[#1A1A19] border-[1vw] w-[84vw] h-[54vw] border-[#C5A463] rounded-3xl p-[1.5vw] flex flex-col justify-center items-center">
          <p className="text-[#C5A463] text-[18px] sm:text-[22px] capitalize text-center">Create a Wallet</p>
          <p className="text-white text-[14px] sm:text-[17px] text-center capitalize">Create a crypto wallet to securely hold your $Talang tokens.</p>
        </div>
      </div>

      {/* detail cards large screen*/}
      <div className="md:flex w-[83vw] justify-between hidden">
        <div className="bg-[#252523] p-[0.8vw] w-[20vw] h-[19vw] rounded-3xl">
          <div className="bg-[#1A1A19] border-[0.2vw] w-[18.4vw] h-[17.4vw] border-[#C5A463] rounded-3xl p-[1.5vw] flex flex-col justify-center items-center">
            <p className="text-[#C5A463] text-[18px] md:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] capitalize text-center">Create a Wallet</p>
            <p className="text-white text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center capitalize">Create a crypto wallet to securely hold your $Talang tokens.</p>
          </div>
        </div>

        <div className="bg-[#252523] p-[0.8vw] w-[20vw] h-[19vw] rounded-3xl">
          <div className="bg-[#1A1A19] border-[0.2vw] w-[18.4vw] h-[17.4vw] border-[#C5A463] rounded-3xl p-[1.5vw] flex flex-col justify-center items-center">
            <p className="text-[#C5A463] text-[18px] md:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] capitalize text-center">Buy Some ETH</p>
            <p className="text-white text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center capitalize">Purchase some ETH to use in tour token exchange.</p>
          </div>
        </div>

        <div className="bg-[#252523] p-[0.8vw] w-[20vw] h-[19vw] rounded-3xl">
          <div className="bg-[#1A1A19] border-[0.2vw] w-[18.4vw] h-[17.4vw] border-[#C5A463] rounded-3xl p-[1.5vw] flex flex-col justify-center items-center">
            <p className="text-[#C5A463] text-[18px] md:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] capitalize text-center">Visit Uniswap</p>
            <p className="text-white text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center capitalize">Create a crypto wallet to securely hold your $Telang tokens.</p>
          </div>
        </div>

        <div className="bg-[#252523] p-[0.8vw] w-[20vw] h-[19vw] rounded-3xl">
          <div className="bg-[#1A1A19] border-[0.2vw] w-[18.4vw] h-[17.4vw] border-[#C5A463] rounded-3xl p-[1.5vw] flex flex-col justify-center items-center">
            <p className="text-[#C5A463] text-[18px] md:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] capitalize text-center">Swap to $Telang</p>
            <p className="text-white text-[14px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center capitalize">Purchase some ETH to use in your token exchange.</p>
          </div>
        </div>

      </div>

      {/* logo line */}
      <div className="mt-[5vw] mb-[8vw] relative w-full big-div">
        <div className="flex justify-evenly absolute -mt-[4vw] w-full overflow-hidden" id="coin-line">
          <img src={logo} alt="" className="w-[10vw] coin coin-one"/>
          <img src={logo} alt="" className="w-[10vw] coin coin-two"/>
          <img src={logo} alt="" className="w-[10vw] coin coin-three"/>
          <img src={logo} alt="" className="w-[10vw] coin coin-four"/>
        </div>
        <img src={line} alt="" className=""/>
      </div>
    </div>
  )
}

export default HowToBuy