import React from "react";
import "../../App.css";
import classesBread from "./Breadcrumbs.module.css";
import Container from "@material-ui/core/Container";
import BreadcrumbsGoods from "./BreadcrumbsGoods";

const Breadcrumbs = () => {
  return (
    <section className={classesBread.sectionBreadcrumbs}>
      <Container>
         <BreadcrumbsGoods />
      </Container>
    </section>
  );
};

export default Breadcrumbs;
