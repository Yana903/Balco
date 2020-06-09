import React, { Fragment } from "react";
import "../../App.css";
import classesCont from "./Contacts.module.css";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";

const ContactsPage = () => {
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
                <h2>Контакты</h2>
              </div>
              <div className={classesCont.contacts}>
                <p className={classesCont.title}>Отдел продаж:</p>
                <p>+380(50)302-55-22</p>
                <p>+380(57)717-61-17</p>
                <p>+380(57)717-50-27</p>
              </div>
              <div className={classesCont.contacts}>
                <p className={classesCont.title}>Бухгалтерия:</p>
                <p>+380(57)717-50-27</p>
              </div>
              <div className={classesCont.contacts}>
                <p className={classesCont.title}>e-mail: </p>
                <div className={classesCont.email}>
                  <a href="#">sales@tara.kh.ua </a>
                  <p>&nbsp;- отдел продаж</p>
                </div>
              </div>
              <p className={classesAbout.description}>
                График работы: Пн. – Пт. с 9:00 до 17:00
              </p>
              <p className={classesAbout.description}>
                Харьков, проспект Московский, д. 257Б
              </p>
              <div className={classesCont.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.0359782612354!2d36.42624011571278!3d49.93566617940772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270c1544ee7823%3A0xdf8e0cc0a742b458!2sMoskovs&#39;kyi%20Ave%2C%202576%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1590509422462!5m2!1sen!2sua"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
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

export default ContactsPage;
