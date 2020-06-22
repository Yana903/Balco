import React, { Fragment } from "react";
import "../../App.css";
import classesAbout from "../AboutPage/About.module.css";
import Container from "@material-ui/core/Container";
import SidebarMenu from "../AboutPage/SidebarMenu";
import Consulting from "../Consulting/Consulting";
import Footer from "../Footer/Footer";
import classesSubCat from "./SubCategory.module.css";
import GridSubCatItem from "./GridSubCatItem";
import Typography from '@material-ui/core/Typography';

const Category = ({ match: { url }, name, description, subCategories }) => {
  return (
    <Fragment>
      <section className={classesAbout.sectionAbout}>
        <Container>
          <div className={classesAbout.layoutAbout}>
            <div className={classesAbout.layoutItem}>
              <div className={classesAbout.sidebar}>
                <SidebarMenu />
              </div>
            </div>
            <div className={classesAbout.layoutItem}>
              <div className="headingSecondary">
                <Typography variant="h2">
                  {name}
                </Typography>
              </div>
              <p className={classesAbout.description}>{description}</p>
              <div className={classesSubCat.gridSubCathalog}>
                {subCategories.map((subCategory) => {
                  return (
                    <GridSubCatItem
                      url={url}
                      subId={subCategory.subId}
                      key={subCategory.subId}
                      name={subCategory.subName}
                      image={subCategory.subImage}
                      number={subCategory.subNumber}
                      subCategory={subCategory}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Consulting />
      <Footer />
    </Fragment>
  );
};

export default Category;
