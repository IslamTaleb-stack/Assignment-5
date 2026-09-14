// rsc
import Banner from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div>
            <section id="home" className="container mx-auto px-4 py-16">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">

                    {/* Hero Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold">Build Your Ideal
                            <br />
                            <span className="brand-gradient-text">Development Stack</span>
                        </h1>

                        <p className="mt-4 text-base leading-7 text-gray-600">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                        <a href="#technologies" className="mt-6 inline-block rounded-full brand-gradient px-6 py-3 font-semibold text-white transition hover:opacity-90">Explore Technologies</a>
                        <a href="#footer" className="mt-6 ml-4 inline-block rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">Learn More</a>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1">
                        <img src={Banner} alt="Technology Stack" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;