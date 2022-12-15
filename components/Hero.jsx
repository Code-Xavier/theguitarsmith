import styles from '@/layouts/style'
import robot from '@/data/hero1.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row  `}>
      <div className={`flex-1 ${styles.flexStart} px-6} flex-col xl:px-0 `}>
        <div className="flex  flex-row items-center justify-between">
          <h1 className="text-6xl font-extrabold sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
            Welcome <br className=" sm:block" />{' '}
            <span className="text-gradient">Aspiring Guitarist!</span>{' '}
          </h1>
        </div>

        <h1 className="mt-2 mb-2 mr-1 md:mt-2 md:mb-1 text-xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-2xl md:leading-10">
          I'm Xavier Valois-Smith, and I'm here to help you learn the guitar!
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] mb-4`}>
        Learning to play the guitar can be a daunting challenge. You see your favorite guitarists playing away, and they make it seem to easy - but when you sit down with your guitar, all that ease goes out the window, and you get stuck. Getting stuck gets you discouraged, and so you stop learning. I'm here to help you fix that!
        </p>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
        <Image src={robot} alt="robot" className="relative z-[5] h-[100%] w-[100%]" />
      </div>
    </section>
  )
}

export default Hero
