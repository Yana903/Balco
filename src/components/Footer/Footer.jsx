import React from "react";
import "../../App.css";
import classesHeader from "../Header/Header.module.css";
import classesFooter from "./Footer.module.css";
import Container from "@material-ui/core/Container";
import Phones from "../Phones/Phones";

const Header = () => {
  return (
    <footer className={classesFooter.footer}>
      <Container>
        <div className={classesFooter.layoutFooter}>
          <div className={classesFooter.layoutItem}>
            <div className={classesHeader.logoBlock}>
              <a href="bla-bla"> BALCo </a>
              <div className={classesHeader.logoDescription}>
                <p> Надёжный производитель </p>
                <p> пластиковой тары и упаковки </p>
                <p className={classesFooter.copyright}>
                  © 2019. Все права защищены.
                </p>
              </div>
            </div>
          </div>
          <div className={classesFooter.layoutItem}>
            <div className={classesFooter.addressBlock}>
              <p> Харьков, проспект Московский, д. 2576, 1044 </p>
              <p> Пн.–Пт.с 9: 00 до 17: 00 </p>
              <a href="bla-bla"> sales @balco.kh.ua </a>
            </div>
            <Phones />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Header;
