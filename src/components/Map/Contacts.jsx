import React from "react";
import Button from "@material-ui/core/Button";
import classesMap from "./Map.module.css";
import PhoneIphone from "@material-ui/icons/PhoneIphone";

const Contacts = () => {
  return (
    <div className={classesMap.contactBlock}>
      <div className="headingSecondary">
        <h2>Контакты</h2>
      </div>
      <div className={classesMap.phonesBlock}>
        <div className={classesMap.blockTitle}>
          <PhoneIphone />
          <h3>Телефоны</h3>
        </div>
        <p>+380(50)302-55-22</p>
        <p>+380(57)717-61-17</p>
        <p>+380(57)717-50-27</p>
      </div>
      <div className={classesMap.addressBlock}>
        <div className={classesMap.blockTitle}>
          <PhoneIphone />
          <h3>Адрес предприятия</h3>
        </div>
        <p>Харьков, проспект Московский, д. 257Б</p>
        <p>Пн. – Пт. с 9:00 до 17:00</p>
        <a href="#">sales@tara.kh.ua</a>
      </div>
      <Button variant="contained" color="primary">
        Нужна консультация
      </Button>
    </div>
  );
};

export default Contacts;
