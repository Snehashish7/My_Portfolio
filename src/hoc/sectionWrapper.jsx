//to keep all sections aligned to center (hoc-> Higher Order Component)
// we can use this section wrapper to wrap any element to which we want to give this motion & style.
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion' //to animate the section

//Since this is a section wrapper so it needs the component that it will wrap and its id
//like: If I want to wrap component: about id:#about
const sectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            // creating the motion like they are taking entry from being hidden
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {/* hash-span enables spanning to a specific section whose link is provided. */}
                <span className='hash-span' id={idName}>    {/* to enable scrolling by clicking the icon */}
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default sectionWrapper