import React, { useState } from "react";
import "../../App.css";
import classesDetails from "./Details.module.css";
import GridSlider from "./GridSlider";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';


const Slider = ({ sliderCategories }) => {
    const sliderArr = [
        <GridSlider sliderCategories={sliderCategories} />,
        <GridSlider sliderCategories={sliderCategories} />,
        <GridSlider sliderCategories={sliderCategories} />,
        <GridSlider sliderCategories={sliderCategories} />
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        setX(x - 100);
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    };

    return (
        <section className={classesDetails.sectionSlider}>
            <h4>Похожие товары из этого раздела:</h4>
            <div className={classesDetails.slider}>
                {
                    sliderArr.map((item, index) => {
                        return (
                            <div key={index} className={classesDetails.slide} style={{ transform: `translateX(${x}%)` }}>
                                {item}
                            </div>
                        )
                    })
                }
                <button className={classesDetails.slideButton} id="goLeft" onClick={goLeft}>
                    <ArrowLeft style={{ fontSize: "40px" }} />
                </button>
                <button className={classesDetails.slideButton} id="goRight" onClick={goRight}>
                    <ArrowRight style={{ fontSize: "40px" }}/>
                </button>
            </div>
        </section>
    )
}

export default Slider;