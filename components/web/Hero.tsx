import { BackgroundLines } from "../ui/background-lines"
import { TextGenerateEffect } from "../ui/text-generate"
import MagicButton from "../ui/magic-button"
import { FaLocationArrow } from "react-icons/fa"


const Hero = () => {
  return (
    <>
        <BackgroundLines className="h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80">Problem-Solver | Innovator</h2>
                <TextGenerateEffect
                    words="Turning Ideas into Creative and Seamless Solution"
                    className="text-center text-[40px] md:text-3xl lg:text-4xl"

                />
                <p className="text-center capitalize md:tracking-wider my-4 lg:text-2xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
                    hi, i&apos;m taiwo, a software developer based  in nigeria. Let’s create something amazing together!
                </p>
                <a href="#work">
                    <MagicButton 
                    text="show my work" 
                    icon={<FaLocationArrow />} 
                    position="right"
                />
                </a>
            </div>
        </BackgroundLines>
    </>
  )
}
export default Hero