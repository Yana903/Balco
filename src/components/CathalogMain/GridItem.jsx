import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import classesCath from "./CathalogMain.module.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "../Category/Category";

const GridItem = ({ id, name, image, number }) => {
  return (
    <div className={classesCath.gridItem}>
      <div className={classesCath.cardCathalog}>
        <div className={classesCath.cardImage}>
          <img src={image} alt="image" />
        </div>
        <div className={classesCath.cardDescription}>
          <p>
            {name} ({number})
          </p>
        </div>
        <div className={classesCath.buttonGroup}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth="true"
            component={Link}
            to={`/categories/${id}`}
          >
            Перейти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
