import React, { Fragment } from "react";
import "../../App.css";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";
import Typography from '@material-ui/core/Typography';

const DelivePayPage = () => {
  return (
    <Fragment>
      <section className={classesAbout.sectionAbout}>
        <Container>
          <div className={classesAbout.layoutAbout}>
            <div className={classesAbout.layoutItem}>
              <div className={classesAbout.sidebar}>
                <SidebarMenu />
              </div>
            </div>
            <div className={classesAbout.layoutItem}>
              <div className="headingSecondary">
                <Typography variant="h2">
                  Доставка и Оплата
                </Typography>
              </div>
              <p className="description">
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
