import React from "react";
import { Link, Route } from "react-router-dom";
import "../../App.css";
import classesCath from "../CathalogMain/CathalogMain.module.css";
import Button from "@material-ui/core/Button";
import Details from "../Details/Details";

const GridSubCatItem = ({ url, subId, name, image, number }) => {
    // console.log(subCategory);
    console.log("url");
    console.log({url});
    console.log("subId:");
    console.log({ subId });
        
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
            fullWidth="true"
            variant="contained"
            color="primary"
            component={Link}
            // to={`/subCategories/${id}`}
          >
            Купить
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth="true"
            component={Link}
            to={`${url}/${subId}`}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GridSubCatItem;
