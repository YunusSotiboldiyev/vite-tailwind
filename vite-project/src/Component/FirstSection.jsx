import Icon from "./icons/IMAGE.svg"
import Rectangle1 from "./icons/Rectangle.svg"
import Rectangle2 from "./icons/Rectangle5.svg"
export default function FirstSection() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-24  relative" id="first">
        <div className="w-[55%] mx-auto pt-24">
          <span className="text-2xl text-green-600 font-cursive block">
            Hi, I'm James Mirro & I'm a photographer.
          </span>
          <p className="mt-4 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">Read More</button>
          <img src={Rectangle1} alt="Decorative" className="absolute bottom-0 left-0" />
          <img src={Rectangle2} alt="Decorative" className="absolute top-0 right-0" />
        </div>
        <div className="relative">
          <img src={Icon} alt="Photographer" className="w-full h-3/5"/>
        </div>
      </section>
    );
  }
  