import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    //to see how I got the background image: app.jsx:"bg-hero-pattern" then tailwind.config.js: backgroundImage has a link to the background
    <section className='relative w-full h-screen mx-auto'>
      {/* ${styles.paddingX}: dynamic. therefore within `tilt` */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' /> {/* the rounded dot */}
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'> Snehashish</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a MERN stack developer<br className='sm:block hidden'></br>with a knack for using efficient<br className='sm:block hidden'></br> algorithms and data structures.</p>
        </div>
      </div>
      <ComputersCanvas />
      {/* xs: extra-small devices */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                /*The array [0, 24, 0] specifies the values that the y property should take over time. 
                The first value, 0, represents the starting position of the element. The second value, 
                24, represents the maximum distance that the element will move upwards during the animation. 
                The third value, 0, represents the ending position of the element, which is the same as the starting position. */
                y: [0, 24, 0], //only going up & down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            /> {/* using framer-motion */}
          </div>
        </a>
      </div>
      {/* the scrolling icon/indicator below ComputersCanvas */}
    </section>
  )
}

export default Hero;