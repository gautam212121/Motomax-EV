import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { AboutUs, Team, InvestorRelations, NewsEvents, Blog, Contact } from './pages/OtherPages';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Team />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
