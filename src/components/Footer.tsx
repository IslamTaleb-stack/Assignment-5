import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">

            <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">

                {/* Brand */}
                <div>
                    <img
                        src={Logo}
                        alt="Dev Stack"
                        className="h-10"
                    />

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                        Curated tools, technologies, and resources for developers
                        building <br /> modern software.
                    </p>

                    <div className="mt-4 flex gap-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#D91B7E]">GitHub</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#D91B7E]">Twitter</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#D91B7E]">LinkedIn</a>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-semibold">PRODUCT</h3>

                    <div className="mt-4 space-y-3">
                        <a href="#" className="block text-sm text-gray-600">Home</a>
                        <a href="#" className="block text-sm text-gray-600">Technologies</a>
                        <a href="#" className="block text-sm text-gray-600">Projects</a>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold">COMPANY</h3>

                    <div className="mt-4 space-y-3">
                        <a href="#" className="block text-sm text-gray-600">About</a>
                        <a href="#" className="block text-sm text-gray-600">Contact</a>
                        <a href="#" className="block text-sm text-gray-600">Careers</a>
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-semibold">LEGAL</h3>

                    <div className="mt-4 space-y-3">
                        <a href="#" className="block text-sm text-gray-600">Privacy Policy</a>
                        <a href="#" className="block text-sm text-gray-600">Terms of Service</a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;