import React from "react";
import "../../App.css";
import classesCath from "../CathalogMain/CathalogMain.module.css";
import classesDetails from "./Details.module.css";
import GridSubCatItem from "../Category/GridSubCatItem";

const GridSlider = ({ sliderCategories }) => {
  return (
    <div className={classesDetails.gridSlider}>
      {sliderCategories.map((sliderCategory) => {
          console.log("sliderCategory");
          console.log(sliderCategory);
        return (
            <GridSubCatItem
            // url={url}
            subId={sliderCategory.subId}
            key={sliderCategory.subId}
            name={sliderCategory.subName}
            image={sliderCategory.subImage}
            number={sliderCategory.subNumber}
            sliderCategory={sliderCategory}
          />
        );
      })}
    </div>
  );
};

export default GridSlider;
