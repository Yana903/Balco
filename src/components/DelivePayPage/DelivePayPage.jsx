import React, { Fragment } from "react";
import "../../App.css";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";

const DelivePayPage = () => {
  return (
    <Fragment>
      <section className={classesAbout.sectionAbout}>
        <Container>
          <div className={classesAbout.layoutAbout}>
            <div className={classesAbout.layoutItem}>
              <div className={classesAbout.sidebar}>
                <div className={classesAbout.headingSidebar}>
                  <h3>Каталог продукции</h3>
                </div>
                <SidebarMenu />
              </div>
            </div>
            <div className={classesAbout.layoutItem}>
              <div className="hesdingSecondary">
                <h2>Доставка и Оплата</h2>
              </div>
              <p className={classesAbout.description}>
                Страница в стадии наполнения. Обязательно загляните сюда позже.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Consulting />
      <Footer />
    </Fragment>
  );
};

export default DelivePayPage;
