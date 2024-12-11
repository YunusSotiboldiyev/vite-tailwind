import Icon from "./icons/icon.png"
import Icon1 from "./icons/icon1.png"
import Icon2 from "./icons/icon2.png"
import Icon3 from "./icons/icon3.png"
import Icon4 from "./icons/icon4.png"
import Icon5 from "./icons/icon5.png"
import Icon6 from "./icons/icon6.png"
import Icon7 from "./icons/icon7.png"

export default function SecondSection() {
    const services = [
      { icon: `${Icon1}`, title: "Wedding Photography", description: "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!" },
      { icon: `${Icon2}`, title: "Sports Photography", description: "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement." },
      { icon: `${Icon3}`, title: "Portrait Photography", description: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person." },
      { icon: `${Icon4}`, title: "Architecture Photography", description: "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there." },
      { icon: `${Icon5}`, title: "Animal Photography", description: "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image." },
      { icon: `${Icon6}`, title: "Food Photography", description: "I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself." },
      { icon: `${Icon7}`, title: "Nature Photography", description: "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree." },
    ];
  
    return (
      <section className="py-24" id="prints">
        <div className="text-center w-[42%] mx-auto">
          <img src={Icon} alt="Services" className="h-8 mx-auto" />
          <span className="block text-xl text-green-600 mt-2">Services</span>
          <p className="text-sm text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-[80%] mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 relative">
              <img src={service.icon} alt={service.title} className="w-16 mx-auto mb-4" />
              <span className="block text-xl text-green-600">{service.title}</span>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              <span className=" text-lg text-green-600">Read more ➡️</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  