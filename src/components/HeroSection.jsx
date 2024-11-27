import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div div="hero" className="bg-white h-[85vh] flex flex-col items-center justify-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4B0082] to-[#DAA520] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="hover:motion-translate-x-loop-[10px] relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition duration-300 ease">
              Get to know the Seussology API <a href="https://seussology.info" target="_blank" className="font-semibold text-customYellow"><span className="absolute inset-0" aria-hidden="true"></span> <span aria-hidden="true" className="text-lg">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-customBlack sm:text-7xl">Dr. Seuss book gallery</h1>
            <p className="mt-8 text-lg font-regular text-gray-500 sm:text-xl">Discover a world of stories, characters, and themes from the beloved Dr. Seuss books.</p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link to="/#booksDiv" className="text-white rounded-full text-md font-regular bg-customBlack px-6 py-4 hover:bg-customYellow hover:font-medium hover:text-customBlack hover:shadow-md transition ease duration-300" onClick={() => window.scrollTo({top: document.getElementById('booksDiv').offsetTop - 80, behavior: 'smooth'})}>The Books</Link>
              <Link to="/quotes" className="text-sm font-semibold text-gray-900 border-[1.5px] rounded-full px-6 py-4 border-[#e5e7eb] transition ease duration-300 hover:shadow-md">The Quotes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

