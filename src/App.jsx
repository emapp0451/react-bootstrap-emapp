import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home_component/Home';
import About from './components/about_component/About';
import Contact from './components/contact_component/Contact';
import CustomNavbar from './components/CustomNavbar';
import Bangalore from './components/bangalore_component/Bangalore';
import Hospital from './components/hospital_component/Hospital';
import Hotel from './components/hotel_component/Hotel';
import City from './components/city_component/City';
import Filter from './components/filter_component/Filter';
import Filterd from './components/filterd_component/Filterd';

function App() {
  return (
   <Router>
     <div>
       <CustomNavbar />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/filter" component={Filter} />
        <Route path="/filterd-data/:values" component={Filterd} />
        <Route path="/city/:cityId" exact component={City} />
        <Route path="/hospital/:cityId" exact component={Hospital} />
        <Route path="/hotel/:cityId" exact component={Hotel} />
     </div>
   </Router>
  );
}

export default App;
