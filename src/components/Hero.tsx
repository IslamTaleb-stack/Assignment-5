// rsc
import Banner from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <div>
            <section className="container mx-auto px-4 py-16">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row">
                    
                    {/* Hero Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold">Build Your Ideal
                            <br />
                             <span className="brand-gradient-text">Development Stack</span>
                        </h1>
                       
                        <p className="mt-4 text-base leading-7 text-gray-600">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                        <button className="mt-6 rounded-full brand-gradient px-6 py-3 font-semibold text-white">Explore Technologies</button>
                        <button className="mt-6 ml-4 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700">Learn More</button>
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