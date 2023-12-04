import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
const AnimateHero = ({ children }) => {
    const controls = useAnimationControls();
    const [isplaying,setIsplaying] = useState(false)
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition:{
        times:[0,0.4,0.6,0.7,0.8]
      }
    });
    setIsplaying(true)
  };

  return (
    <motion.div
      animate={controls}
      onMouseOver={()=>{
        if(!isplaying)
        rubberBand()
      }}
      onAnimationComplete={()=>setIsplaying(false)}
      className="animate-hero"
    >
      <h1>{children}</h1>
    </motion.div>
  );
};

export default AnimateHero;
