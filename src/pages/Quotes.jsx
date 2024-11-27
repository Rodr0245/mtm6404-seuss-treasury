import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://seussology.info/api/quotes/random/10');
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        setQuotes(data || []);
      } catch (err) {
        setError('Failed to load quotes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (quotes.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        No quotes available.
      </div>
    );
  }


  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % quotes.length);
		const blockQuote = document.querySelector('blockquote');
    blockQuote.classList.toggle('motion-preset-blur-up-lg', true);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex + quotes.length - 1) % quotes.length);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 transition duration-300 ease-in-out">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center drop-shadow-md">Dr. Seuss Quotes</h1>
      <div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-24 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-600 sm:text-2xl/9">
                <p>" {quotes[currentIndex].text} "</p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">{quotes[currentIndex].book?.title}</div>
                </div>
              </figcaption>
            </figure>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quotes;

