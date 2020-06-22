import React from "react";
import "../../App.css";
import classesCath from "./CathalogGoods.module.css";
import Container from "@material-ui/core/Container";
import GridCathalog from "../CathalogMain/GridCathalog";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const CathalogGoods = ({containers}) => {
  return (
    <section className={classesCath.sectionCathalog}>
      <Box marginBottom="40px">
        <Container>
          <div className="headingSecondary">
            <Typography variant="h2">
               Каталог продукции
            </Typography>
          </div>
          <p className="description">
              В сфере промышленной упаковки мы работаем уже 10 лет и имеем
              богатый опыт, который позволяет нам качественно консультировать
              наших клиентов и подбирать им наилучший вариант упаковки.
          </p>
          <GridCathalog containers={containers} />
        </Container>
      </Box>
    </section>
  );
};

export default CathalogGoods;
