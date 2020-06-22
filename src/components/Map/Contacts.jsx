import React from "react";
import Button from "@material-ui/core/Button";
import classesMap from "./Map.module.css";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import Room from "@material-ui/icons/Room";
import Typography from '@material-ui/core/Typography';

const Contacts = () => {
  return (
    <div className={classesMap.contactBlock}>
      <div className="headingSecondary">
        <Typography variant="h2">
          Контакты
        </Typography>
      </div>
      <div className={classesMap.phonesBlock}>
        <div className={classesMap.blockTitle}>
          <PhoneIphone />
          <Typography variant="h3">
            Телефоны
          </Typography>
        </div>
        <p>+380(50)302-55-22</p>
        <p>+380(57)717-61-17</p>
        <p>+380(57)717-50-27</p>
      </div>
      <div className={classesMap.addressBlock}>
        <div className={classesMap.blockTitle}>
          <Room />
          <Typography variant="h3">
            Адрес предприятия
          </Typography>
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
