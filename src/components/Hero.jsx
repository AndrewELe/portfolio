import { motion } from "framer-motion" 
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* this is that little circle */}
          <div className={`w-5 h-5 rounded-full ${styles.violet}`}/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Andrew</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web developer delighted by creating <br className="sm:block hidden"/> beautiful and functional websites
          </p>
        </div>
      </div>

        <ComputersCanvas className="cursor-pointer"/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero