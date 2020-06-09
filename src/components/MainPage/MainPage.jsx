import React, { Fragment } from 'react';
import '../../App.css';
import Hero from "../Hero/Hero";
import Principles from "../Principles/Principles";
import CathalogMain from "../CathalogMain/CathalogMain";
import Consulting from "../Consulting/Consulting";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";


const MainPage = ({containers}) => {
    return (
      <Fragment>
        <Hero />
        <Principles />
        <CathalogMain containers={containers} />
        <Consulting />
        <Map />
        <Footer />
      </Fragment>
    );
}

export default MainPage;