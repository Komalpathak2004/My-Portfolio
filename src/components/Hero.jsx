import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Main content for desktop */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='hidden sm:flex flex-col justify-center'>
          <h1 className={`${styles.heroHeadText} text-white text-center sm:text-left`}>
            Hi, I'm <span className='text-[#915EFF]'>Komal Pathak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}>
            I am a developer, passionate<br className='sm:block hidden' />
            about cutting-edge technology.
          </p>
        </div>
      </div>

      {/* ComputersCanvas */}
      <ComputersCanvas />

      {/* Mobile text section */}
      <div className='absolute inset-0 flex flex-col items-center justify-center sm:hidden top-[-45%] px-3'>
  <h1 className='text-white text-center text-[2rem]'>
    Hi, I'm <span className='text-[#915EFF] font-extrabold'>Komal Pathak</span>
  </h1>
  <p className='mt-2 text-white-100 text-center text-[0.8rem]'>
    I am a developer, passionate<br />
    about cutting-edge technology.
  </p>
</div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
