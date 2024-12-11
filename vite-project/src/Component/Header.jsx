import cartIcon from './icons/cart-shopping-solid.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md py-4 ">
      <div className="w-[80%] mx-auto flex justify-between items-center text-black">
        <span className="text-xl font-cursive text-green-600">Mirro</span>
        <div className="flex items-center gap-4">
          <a className="p-5" href="#first">Presets</a>
          <a className="p-5" href="#prints">Prints</a>
          <a className="p-5" href="#store">Store</a>
          <a className="p-5" href="#footer">About</a>
          <a className="p-5" href="#contact">Contact</a>
          <button className="bg-green-600 text-white py-1 px-3 rounded flex items-center gap-2">
            <img src={cartIcon} alt="Cart" />
            Cart <div className="bg-white text-black rounded-full w-5 h-5 text-center">0</div>
          </button>
        </div>
      </div>
    </header>
  );
}
