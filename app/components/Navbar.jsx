export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white fixed w-full top-0 z-50">
      
      <h1 className="font-bold text-lg">MySite</h1>

      <div className="space-x-6">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
      </div>

    </nav>
  );
}