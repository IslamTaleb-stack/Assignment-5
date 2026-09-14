import Logo from '../assets/logo-text.png';


const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-white px-4 py-4 container mx-auto">
            <div className="flex items-center">
                <div>
                    <button className="md:hidden text-3xl transition hover:text-[#D91B7E]">☰</button>
                </div>

                <img src={Logo} alt="Dev Stack" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-32 object-contain md:static md:h-10 md:w-auto md:translate-x-0 md:translate-y-0" />
            </div>

            <div className="hidden md:flex gap-8">
                <a href="#home" className="text-sm font-medium text-gray-700 hover:text-pink-500">Home</a>
                <a href="#technologies" className="text-sm font-medium text-gray-700 hover:text-pink-500">Technologies</a>
                <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-pink-500">Projects</a>
                <a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-500">About</a>
                <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-500">Contact</a>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <a href="#signin" className="text-xs font-medium text-gray-900 hover:text-pink-500 md:text-sm">Sign In</a>
                <button className="rounded-full bg-[#D91B7E] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 md:px-6 md:text-sm">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;


