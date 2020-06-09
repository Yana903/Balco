import React from 'react';
import '../../App.css';
import classesHeader from './Header.module.css';
import Container from '@material-ui/core/Container';
import Phones from "../Phones/Phones";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className={classesHeader.header}>
      <Container>
        <div className={classesHeader.layoutHeader}>
          <div className={classesHeader.layoutItem}>
            <div className={classesHeader.logoBlock}>
              <a href="#"> BALCo </a> <div
                className={classesHeader.logoDescription}
              >
                <p> Надёжный производитель </p>
                <p> пластиковой тары и упаковки </p>
              </div>
            </div>
          </div>
          <div className={classesHeader.layoutItem}>
            <div className={classesHeader.addressBlock}>
              <p> Харьков, проспект Московский, д. 257Б, 1044 </p>
              <p> Пн.–Пт.с 9: 00 до 17: 00 </p>
              <a> sales @tara.kh.ua </a>
            </div>
            <Phones />
            <Cart />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
