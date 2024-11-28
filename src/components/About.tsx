import about_sm from "../assets/about_sm.png";
import about1 from "../assets/about1.png";
import about_bg from "../assets/about_bg.png";
import sun_about from "../assets/sun_about.png";
import moon_about from "../assets/moon_about.png";
import about_letters from "../assets/about_letters.png";
import original from "../assets/original.png";
import here from "../assets/here.png";
import logo from "../assets/logo.png";
import { useEffect } from "react";

function About() {
  // gsap.to("#rotating-sun", {rotation: 360, transformOrigin: "center", ease: "none", duration: 60, repeat: -1});

  // gsap.fromTo("#tilting-moon", {
  //   rotationZ: -30
  // }, {
  //   rotationZ: 30,
  //   duration: 2,
  //   repeat: -1,
  //   yoyo: true
  // })

  useEffect(() => {
    // Image swapping animation
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.fromTo(
      "#about-bg",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );

    // Sun rotation animation
    gsap.to("#rotating-sun", {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 60,
      repeat: -1,
    });

    // Moon tilting animation
    gsap.fromTo(
      "#tilting-moon",
      { rotationZ: -30 },
      { rotationZ: 30, duration: 2, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3 spirits */}
      <div className="-mt-[14vw] md:-mt-[20vw] xl:-mt-[18vw] mb-[8vw] md:mb-[2vw] flex flex-col items-center md:w-[80vw] 3xl:w-[90vw]">
        <div className="relative flex flex-col items-center z-20">
          <img src={about1} alt="" className="min-w-[715px] md:flex hidden" id="about-main"/>
          <img src={about_bg} alt="" className="min-w-[715px] md:flex hidden absolute top-0 bottom-0" id="about-bg"/>
          <div className="absolute hidden md:flex top-0 bottom-0 mt-[46vw] md:mt-[22vw] xl:mt-[23vw] 3xl:mt-[26vw] w-[28vw] md:w-[30vw] lg:w-[25vw] xl:w-[28vw]  text-center flex-col justify-center">
            <h1 className="text-[26px] leading-[32px] xl:text-[32px] xl:leading-[40px] 2xl:text-[40px] 2xl:leading-[50px] 3xl:text-[45px] 3xl:leading-[56px]">ABOUT OUIJA</h1>
            <p className="text-[12px] leading:[18px] xl:text-[16px] xl:leading-[26px] 3xl:text-[24px] 3xl:leading-[36px]"> As the mascot for the Ouija Coin, this playful primate represents agility, intelligence, and adaptability—qualities that perfectly align with the dynamic nature of the crypto world.</p>
          </div>
          {/* <div className="absolute hidden md:block top-0 bottom-0 mt-[36vw] w-[36vw] xl:w-[38vw] text-center">
            <h1 className="text-[28px] leading-[32px] xl:text-[40px] xl:leading-[45px] 2xl:text-[50px] 2xl:leading-[56px]">ABOUT OUIJA</h1>
            <p className="text-[14px] leading:[18px] xl:text-[20px] xl:leading-[30px] 2xl:text-[24px] 2xl:leading-[36px]"> As the mascot for the Ouija Coin, this playful primate represents agility, intelligence, and adaptability—qualities that perfectly align with the dynamic nature of the crypto world.</p>
          </div> */}
        </div>
        <img src={about_sm} alt="" className="md:hidden w-[100vw] -mt-[10vw] z-10" />
        <img src={logo} alt="" className="w-[10vw] -mt-[20vw] md:-mt-[10vw] z-30 coin"/>
      </div>

      {/* black box */}
      <div className="bg-[#2C2C2A] p-[2vw] -mt-[20vw] md:-mt-[18vw] w-full z-0 rounded-xl">
        <div className="bg-[#1A1A19] border-[#CBA966] border-2 rounded-xl">
          <div className="md:flex justify-between hidden h-[25vw] mt-[5vw]">
            <img
              src={sun_about}
              alt=""
              className="max-w-[460px] -ml-[2vw]"
              id="rotating-sun"
            />
            <img
              src={moon_about}
              alt=""
              className="max-w-[268px]"
              id="tilting-moon"
            />
          </div>

          <div className="w-full md:-mt-[12vw] mt-[10vw]">
            <img src={about_letters} alt="" className="md:w-[70vw] xl:w-[60vw] 3xl:w-[70vw] mx-auto" />
          </div>

          <div className="md:w-[40vw] text-white text-[20px] md:text-[26px] xl:text-[34px] 2xl:text-[40px] mx-auto -mt-[5vw]">
            <p className="text-center">1 2 3 4 5 6 7 8 9 0</p>
          </div>

          <div className="mt-[4vw] xl:w-[70vw] 3xl:w-full mx-auto">
            <div className="bg-[#2C2C2A] sm:mb-[2vw] text-[#FEDAA4] w-[90vw] md:w-[80vw] xl:w-[60vw] 3xl:w-[80vw] mx-auto text-center text-[20px] 3xl:text-[30px] rounded-xl">
              <button className="w-full h-full py-[2.5vw]">YES</button>
            </div>

            <div className="hidden sm:w-[90vw] md:w-[80vw] xl:w-[70vw] 3xl:w-full sm:flex mx-auto justify-center mb-[2vw]">
              <button className="mr-[2vw]">
                <img src={here} alt="" className="sm:w-[44vw] md:w-[39vw] xl:w-[29vw] 3xl:w-[39vw]" />
              </button>
              <button>
                <img
                  src={original}
                  alt=""
                  className="sm:w-[44vw] md:w-[39vw] xl:w-[29vw] 3xl:w-[39vw]"
                />
              </button>
            </div>

            <div className="sm:hidden w-[90vw] flex flex-col mx-auto scale-y-75">
              <button className="w-full">
                <img src={here} alt="" className="mb-[2vw] w-[90vw]" />
              </button>
              <button className="w-full">
                <img src={original} alt="" className="w-[90vw]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
