import React from "react";
import "../../App.css";
import classesCath from "./CathalogMain.module.css";
import Container from "@material-ui/core/Container";
import GridCathalog from "./GridCathalog";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const Cathalog = ({containers}) => {
  return (
    <section className={classesCath.sectionCathalog}>
      <Box marginBottom="40px">
        <Container>
          <div className="headingPrimary">
            <Typography variant="h2">
               Каталог продукции
            </Typography>
          </div>
          <GridCathalog containers={containers} />
        </Container>
      </Box>
    </section>
  );
};

export default Cathalog;
