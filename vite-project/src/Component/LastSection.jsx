import lastImage1 from './icons/1.svg';
import lastImage2 from './icons/2.svg';
import lastImage3 from './icons/3.svg';
import Icon from "./icons/icon.png"
export default function LastSection() {
  const presets = [
    { image: lastImage1, title: "Mirro Preset Pack Vol. 01", description: "The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!" },
    { image: lastImage2, title: "Mirro Preset Pack Vol. 02", description: "Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great." },
    { image: lastImage3, title: "Mirro Preset Pack Vol. 03", description: "These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography." },
  ];

  return (
    <section className="py-24 bg-gray-100" id='store'>
    <img src={Icon} alt="Services" className="h-8 mx-auto" />
      <div className="text-center">
        <span className="block text-red-600 text-xl">Pre Store</span>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-[80%] mx-auto">
        {presets.map((preset, index) => (
          <div key={index} className="bg-white rounded-lg p-4">
            <div
              className="h-40 rounded-t-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${preset.image})` }}
            ></div>
            <span className="block mt-4 text-lg">{preset.title}</span>
            <p className="text-sm text-gray-600 mt-2">{preset.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
