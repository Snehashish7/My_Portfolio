import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    {/* see bottom for the explaination */}
      <motion.div
        variants={fadeIn('left', 'spring', 0.75 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{  //tilt options that is provided to card
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>  {/* react fragment */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, I'm Snehashish Ghosh, a B.Tech student of Information Technology with a focus on software development. I have a passion for creating innovative and functional web applications using the MERN stack.
        Throughout my studies, I have gained a solid foundation in data structures and algorithms, and have solved over 200 problems on LeetCode, demonstrating my problem-solving skills and logical thinking. I also have a strong aptitude for mathematics, which has helped me excel in programming.
        I am always eager to learn and grow, and I am currently seeking opportunities to expand my skills and gain practical experience in web development. My ultimate goal is to become a skilled MERN stack developer, and I am committed to achieving this through continuous learning and hard work.

        Thank you for visiting my portfolio website, and I look forward to connecting with you!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          //here index is the index of service
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper(About, "about"); //wrapping the section: About using sectionWrapper(component, idName)

/*
<motion.div: This creates a div element with motion capabilities using the Framer Motion library.

variants={fadeIn("right", "spring", index * 0.5, 0.75)}: This specifies the animation variants for the element. The fadeIn function is likely a custom function defined elsewhere in the code, which creates an animation variant for a fade-in effect. The function takes four arguments:
The first argument "right" indicates the direction from which the element will appear.
The second argument "spring" indicates the type of animation, which is a spring animation.
The third argument index * 0.5 is likely a dynamic value that determines the delay before the animation starts. The index variable is likely coming from a loop and is multiplied by 0.5 to stagger the animation start times.
The fourth argument 0.75 is likely a static value that determines the duration of the animation.
*/