import React from "react";
/*VerticalTimeline: This component creates a vertical timeline layout with multiple VerticalTimelineElement components.
VerticalTimelineElement: This component creates a single element within the vertical timeline, which typically includes a title, subtitle, and content. */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { services } from "../constants";

import "react-vertical-timeline-component/style.min.css"; //for vertical timeline to work

import { styles } from "../styles";
import { experiences } from "../constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",  //the purple color of background
        color: "#fff",
      }}
      // contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.tag}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.tag}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index, proof) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div className='flex mt-3 justify-center'>
          <img
            src={experience.proof}
            alt="experience_image"
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}> Learning Experience </h2>
      </motion.div>
      <div className="mt-20 flex  flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default sectionWrapper(Experience, 'work')