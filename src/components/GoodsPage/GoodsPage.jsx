import React, { Fragment } from "react";
import "../../App.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CathalogGoods from "../CathalogGoods/CathalogGoods";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";

const GoodsPage = ({containers}) => {
  return (
    <Fragment>
      <Breadcrumbs />
      <CathalogGoods containers={containers} />
      <Consulting />
      <Footer />
    </Fragment>
  );
};

export default GoodsPage;
