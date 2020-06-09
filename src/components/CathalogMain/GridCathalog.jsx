import React from "react";
import "../../App.css";
import classesCath from "./CathalogMain.module.css";
import GridItem from "./GridItem";

const GridCathalog = ({containers}) => {
  const { categories } = containers;
  return (
    <div className={classesCath.gridCathalog}>
      {categories.map((category) => {
        return (
          <GridItem
            categories={categories}
            id={category.id}
            key={category.id}
            name={category.name}
            image={category.image}
            number={category.number}
          />
        );
      })}
    </div>
  );
};

export default GridCathalog;
