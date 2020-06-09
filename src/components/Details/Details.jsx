import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Button from "@material-ui/core/Button";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";
import classesDetails from "./Details.module.css";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

const GridSubCatItem = ({ subCategory }) => {
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
              <div className="headingSecondary">
                <h2>{subCategory.subName}</h2>
              </div>
              <div className={classesDetails.cardDetails}>
                <div className={classesDetails.cardItem}>
                  <div className={classesDetails.cardImage}>
                    <img src={subCategory.subImage} alt="image" />
                  </div>
                </div>
                <div className={classesDetails.cardItem}>
                  <div className={classesDetails.cardInform}>
                    <div className={classesDetails.delive}>
                      <CheckCircleOutline
                        style={{
                          fontSize: 30,
                          color: "green",
                          marginRight: "10px",
                        }}
                      />
                      <p>доставка по всей Украине</p>
                    </div>
                    <p className={classesDetails.minOrder}>
                        Минимальный заказ: <span>2000 штук</span>
                    </p>
                    <div className={classesDetails.price}>
                        <p>2000 - шт.</p>
                        <span>1.89 грн.</span>
                    </div>
                    <p className={classesDetails.number}>
                        Укажите количество:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Consulting />
      <Footer />
    </Fragment>
  );
};

export default GridSubCatItem;
