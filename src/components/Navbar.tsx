import Logo from '../assets/logo-text.png';


const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-white px-4 py-4 container mx-auto">
            <div className="flex items-center">
                <div>
                    <button className="md:hidden text-3xl"> ☰ </button>
                </div>

                <img src={Logo} alt="Dev Stack" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 md:static md:translate-x-0 md:translate-y-0" />
            </div>

            <div className="hidden md:flex gap-8">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">Home</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">Technologies</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">Projects</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">About</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">Contact</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-pink-500">Sign In</a>
                <button className="rounded-full bg-[#D91B7E] px-6 py-2 text-sm font-semibold text-white">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;


