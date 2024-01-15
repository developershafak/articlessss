import React from 'react';
import Navbarr from './component/Navbarr';
import Footer from './component/Footer';
// Import Swiper React components
import './index.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import Article from './component/Article';
import Goal from './component/Goal';
import Save from './component/Save';
import Toal from './component/toal';
import Advan from './component/Advan';
import Old from './component/Old';
import Abe from './component/Abe';
import Sel from './component/sel';
const App = () => {
  return (
    <>
      <Navbarr />
      {/* <Article /> */}
      {/* <Goal /> */}
      {/* <Save /> */}
      {/* <Toal/> */}
      {/* <Advan/> */}
      {/* <Old/> */}
      {/* <Abe /> */}
      <Sel />
      {/* <Footer /> */}
    </>
  );
};

export default App;


