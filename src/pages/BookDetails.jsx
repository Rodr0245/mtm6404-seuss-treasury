import { useLocation, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  if (!book) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">{book.title}</h1>
          <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <p className="text-gray-600">{book.description}</p>
          <button type="button" className="mt-8 px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition" onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

