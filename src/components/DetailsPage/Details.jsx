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
import Addition from "./Addition";
import Slider from "./Slider";

const GridSubCatItem = ({ subCategory }) => {
  return (
    <Fragment>
      <section className={classesAbout.sectionAbout}>
        <Container>
          <div className={classesDetails.layoutDetails}>
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
                    <p className={classesDetails.minHeading}>
                      Минимальный заказ: <span>2000 штук</span>
                    </p>
                    <div className={classesDetails.price}>
                      <p>2000 - шт.</p>
                      <span>1.89 грн.</span>
                    </div>
                    <div className={classesDetails.quantity}>
                      <label>
                        Укажите количество:
                      </label>
                      <div className={classesDetails.number}>
                        <button type="button">-</button>
                        <input type="number" value="2000" />
                        <button type="button">+</button>

                        <div className={classesDetails.sum}>
                          <p>Сумма заказа</p>
                          <span>3780.00</span>
                        </div>
                      </div>
                      <div className={classesDetails.buttonGroup}>
                        <Button
                          style={{marginRight: "20px", width: "186px"}}
                          fullWidth="true"
                          variant="contained"
                          color="secondary"
                          component={Link}
                        // to={`/subCategories/${id}`}
                        >
                          В корзину
                        </Button>
                        <Button
                          style={{ width: "186px"}}
                          variant="contained"
                          color="primary"
                          fullWidth="true"
                          component={Link}
                        // to={`${url}/${subId}`}
                        >
                          Купить в 1 клик
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Addition />
              <Slider />
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
