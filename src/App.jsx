import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import BookDetails from './pages/BookDetails'
import Quotes from './pages/Quotes'
import HomePage from './pages/HomePage'
import FooterSection from './components/FooterSection'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} />
        <Route 
          path="/book/:id" 
          element={<BookDetails />} />
        <Route 
          path="/quotes" 
          element={<Quotes />} />
      </Routes>
      <FooterSection />
    </Router>
  );
};

export default App
