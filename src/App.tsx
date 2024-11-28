import { useEffect } from "react";
import Home from "./pages/Home"
import gsap from "gsap"

function App() {

  useEffect(() => {
    gsap.to(".coin", {rotationY: 360, transformOrigin: "center", ease: "none", duration: 2, repeat: -1});
  }, [])

  return (
    <div className="font-custom">
      <Home/>
    </div>
  )
}

export default App
