import { workExperience } from "@/data/data"
import { Button } from "../ui/moving-borders"

const Experience = () => {
  return (
     <div className="my-20 overflow-hidden" id="testimonials">
        <h1 className="heading">
            My{" "}
            <span className="text-purple-600"> professional experience</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 items-center justify-center max-w-7xl mx-auto px-6">
        {workExperience.map((card) => (
            <Button 
                key={card.id}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                duration={Math.floor(Math.random() * 10000) + 10000}
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img src={card.thumbnail} alt={card.title} className="lg:w-32 md:w-20 w-16" />
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            {card.title}
                        </h1>
                        <p className="text-start text-slate-300 mt-3 font-semibold">
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}
export default Experience