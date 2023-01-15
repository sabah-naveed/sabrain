import styles from '../style';
import { brain } from '../assets';

import TypeWriterEffect from 'react-typewriter-effect';


const Hero = () => (
  
  <section id="home" className={`flex md:flex-row flex-col`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-1`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Hello my name is <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>
            Sabah 
          </span> {" "}
        </h1>
      </div>

      <span className='font-poppins font-normal ss:text-[30px] text-[52px] text-white ss:leading-[50px] leading-[75px] w-full mt-7'>
        I am :
        <TypeWriterEffect
          startDelay={20}
          cursorColor="#c89df0"
          multiText={[
            'a student ',
            'a software engineer',
            'an app developer',
            'a racoon lover',
            'a brain and computer enthusiast.',
            
            
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
      </span>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={brain} alt="brain"
      className={`w-[100%] h-[100%]`}/>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/> 
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 purple__gradient'/>
    </div>
  </section>
  
  
)

export default Hero