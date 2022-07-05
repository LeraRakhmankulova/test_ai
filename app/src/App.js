import './App.sass';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import EntertainmentList from './pages/EntertainmentList/EntertainmentList';
import EntertainmentItem from './pages/EntertainmentItem/EntertainmentItem';
import ApartmentComfort from './pages/ApartmentComfort/ApartmentComfort';
import ApartmentStandart from './pages/ApartmentStandart/ApartmentStandart';
import ApartmentList from './pages/ApartmentList/ApartmentList';
import TreatmentList from './pages/TreatmentList/TreatmentList';
import TreatmentItem from './pages/TreatmentItem/TreatmentItem';
import RulesPage from '../src/pages/Rules/RulesPage';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer'
import NewsItem from './pages/NewsItem/NewsItem';
import Main from '../src/pages/Main/Main';

import { newsItems } from './mocks/news';
import { comfortItems } from './mocks/apartments';
import { standardItems } from './mocks/apartments';
import { entertainmentItems } from './mocks/entertainment';
import { treatmentTable } from './mocks/treatments';


const App = () => {
  const news = newsItems;
  const comfortRooms = comfortItems;
  const standartRooms = standardItems;
  const entertainmentList = entertainmentItems;
  const treatments = treatmentTable;

  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/rules' element={<RulesPage />} />

            <Route path='/apartments' element={<ApartmentList />} />
            {comfortRooms.map(item =>
              <Route path={`/apartment_item/confort/${item.id}`} element={<ApartmentComfort
                title={item.title}
                description={item.description}
                image={item.image}
              />} />
            )}
            {standartRooms.map(item =>
              <Route path={`/apartment_item/standart/${item.id}`} element={<ApartmentStandart
                title={item.title}
                description={item.description}
                image={item.image}
              />} />
            )}

            <Route path='/treatment' element={<TreatmentList />} />
            {treatments.map(item =>
              <Route path={`/treatment_item/${item.id}`} element={<TreatmentItem
                title={item.title}
                description={item.description}
                image={item.image} />} />
            )}

            <Route path='/entertainments' element={<EntertainmentList />} />
            {entertainmentList.map(item =>
              <Route path={`/entertainment_item/${item.id}`} element={<EntertainmentItem
                title={item.title}
                description={item.description}
                image={item.image} />} />
            )}

            {news.map(item =>
              < Route path={`/news_item/${item.id}`} element={<NewsItem
                title={item.title}
                description={item.description}
                image={item.image}
              />} />
            )}
          </Routes>
        </div>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
