import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1, 
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="wi16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          More about me
        </p>
        <h2 className={styles.sectionHeadText}>
          Introduction.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        Welcome to SABRAIN 🧠 That's my brand but I assume you're reading this to learn more about it's owner. <br/> <strong>School:</strong> I'm persuing my Bachelors in Computer Science over at Stevens Institute of Technology. At SIT I am president of Stevens Computer Science Club, on the Computer Science Advisory Council, and on the Stevens Schaefer School of Engineering & Science Deans Council 💻
        <br/><br/> <strong>Work:</strong> I'm currently working as a Passcomm Technical Specialist Intern at NJ Transit 🚂 After presenting my summer internship project to the CTO and other executives, I was offered a part time position to continue working on the project. I am very excited to continue working on this project and see where it goes and grateful for the opportunity to work with such a great team!
        <br/><br/> <strong>Extra:</strong> I like to think of myself as a creative technologist rather than a set expertise because I love to explore and learn new things. I'm currently trying to become an AWS Certified Solutions Architect since I wanted to learn more about cloud computing ☁️ and how it can be used to solve real world problems. During quarantine I took an online bootcamp on iOS app development and had the opportunity to publish my own app to the Appstore. I'm looking forward to publishing my more advanced projects soon. I'm also a huge fan of design and love to create UI/UX designs 👩🏽‍🎨 for apps and websites. <br/><br/> In fact, my motto in life is to <strong>add some ✨pizzazz✨ because a good idea with no ✨pizzazz✨ is a bad idea!</strong>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");