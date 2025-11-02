
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import ConcertsSection from './component/ConcertsSection';
import ShowsSection from './component/ShowsSection';
import TopSingersSection from './component/TopSingersSection';
import SportsSection from './component/SportsSection';
import FestivalsSection from './component/FestivalsSection';
import BigPicturesSection from './component/BigPicturesSection';
import FAQSection from './component/FAQSection'; 
import Footer from './component/Footer'; 


function App() {
  return (
    <>
      <Header />
      <Search />
      <ConcertsSection />
      <ShowsSection />
      <TopSingersSection />
      <SportsSection />
      <FestivalsSection />
      <BigPicturesSection />
      <FAQSection /> 
      <Footer/>
    </>
  );
}

export default App;