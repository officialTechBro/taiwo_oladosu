import { InfiniteMovingCards } from "../ui/infinite-moving-card"
import { testimonials, companies } from "@/data/data"

const Client = () => {
  return (
    <div className="my-20 overflow-hidden" id="testimonials">
        <h1 className="heading">
            Kind words from{" "}
            <span className="text-purple-600"> satisfied clients</span>
        </h1>
        <div className="flex flex-col items- max-lg:mt-10 mt-5">
            <InfiniteMovingCards 
                items = {testimonials}
                direction="right"
                speed="slow"
            />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
                {companies.map(({id, img, name, nameImg}) => (
                <div 
                    key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img 
                        src={img} 
                        alt={name}
                        className="md:w-10 w-5"
                    />
                    <img 
                        src={nameImg} 
                        alt={name}
                        className="md:w-24 w-20"
                    />
                </div>
            ))}
            </div>
      </div>
  )
}
export default Client