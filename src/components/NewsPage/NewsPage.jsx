import React, { Fragment } from "react";
import "../../App.css";
import classesNews from "./News.module.css";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";

const NewsPage = () => {
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
                <h2>Добро пожаловать на новый сайт!</h2>
              </div>
              <p className={classesNews.date}>28.05.2020</p>
              <p className={classesAbout.description}>
                Дорогие друзья и наши постоянные покупатели!
              </p>
              <p className={classesAbout.description}>
                Мы изменили полностью внешний вид сайта и рады приветствовать
                Вас здесь.
              </p>
              <p className={classesAbout.description}>
                В течении месяца мы будем проводить работы по наполнению новым
                фирменным контентом, поэтому не обращайте внимания на временные
                разнообразные по стилю картинки.
              </p>
              <p className={classesAbout.description}>
                По любым вопросам обращайтесь по телефонам, указанным в
                «Контактах».
              </p>
              <p className={classesAbout.description}>
                Если у Вас есть пожелания, предложения или замечания по сайту,
                присылайте их на электронный адрес. Мы будем Вам благодарны за
                это.
              </p>
              <p className={classesAbout.description}>
                С уважением, команда «BALCo».
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

export default NewsPage;
