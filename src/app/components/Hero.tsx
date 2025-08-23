import Image from 'next/image';


const Hero = () => (
  <section className="relative bg-black text-white py-20 overflow-hidden">
    {/* Animated Gradient Overlay */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-tr from-green-400/20 via-gray-900/80 to-green-600/20 animate-gradient-x blur-2xl opacity-80" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
      {/* Left Column (Text) */}
      <div className="md:w-1/2 flex flex-col items-start text-left animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Your partner in digital growth
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Modernize and automate your business with tailored technology solutions. Streamline operations, boost efficiency, and stay ahead.
        </p>
        <ul className="list-none space-y-2 mb-8">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            Website & app development
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            Custom business software
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            E-commerce solutions
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300 animate-fade-in-up">
            Book free consultation
          </a>
          <a href="/about" className="bg-white/10 border border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded shadow-lg transition-all duration-300 animate-fade-in-up backdrop-blur-md">
            Learn more
          </a>
        </div>
      </div>
      {/* Right Column (Image) */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in">
        <Image src="/Images/Home/Hero_img.avif" alt="Digital growth" width={600} height={400} className="rounded-2xl shadow-2xl backdrop-blur-lg" />
      </div>
    </div>
  </section>
);

export default Hero;