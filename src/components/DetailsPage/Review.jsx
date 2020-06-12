import React from "react";
import "../../App.css";
import classesDetails from "./Details.module.css";
import FormReview from "./FormReview";

const Review = () => {
    return (
        <section className={classesDetails.sectionReview}>
            <h4>Оставить отзыв</h4>
            <FormReview />
        </section>
    )
}

export default Review;