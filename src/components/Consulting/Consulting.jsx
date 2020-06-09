import React from "react";
import "../../App.css";
import classesConsult from "./Consulting.module.css";
import Container from "@material-ui/core/Container";
import ConsultForm from "./ConsultForm";
import Box from "@material-ui/core/Box";

const Consulting = () => {
  return (
    <section className={classesConsult.sectionConsult}>
      <Container>
        <div className="headingPrimaryInverse">
          <h2>Получите бесплатную консультацию</h2>
          <p>
            опытного специалиста по вопросам сотрудничества в области упаковки
            Ваших товаров
          </p>
        </div>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <ConsultForm />
        </Box>
      </Container>
    </section>
  );
};

export default Consulting;
