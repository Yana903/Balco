import React from 'react';
import '../../App.css';
import classesPrinc from './Principles.module.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Principles = () => {
    return (
        <section className={classesPrinc.sectionPrinciples}>
            <Container>
                <div className="headingPrimary">
                <Typography variant="h2">
                    Наши принципы
                </Typography>
                </div>
                <div className={classesPrinc.gridPrinc}>
                    <div className={classesPrinc.gridItem}>
                        <div className={classesPrinc.cardPrinc}>
                            <div className={classesPrinc.cardImage}>
                                <img src={require("../../images/princ1.png")} alt="image"/>
                            </div>
                            <div className={classesPrinc.cardDescription}>
                                <p>
                                    Баланс цены
                                    и качества предлагаемой
                                    тары и упаковки
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classesPrinc.gridItem}>
                        <div className={classesPrinc.cardPrinc}>
                            <div className={classesPrinc.cardImage}>
                                <img src={require("../../images/princ2.png")} alt="image"/>
                            </div>
                            <div className={classesPrinc.cardDescription}>
                                <p>
                                    Оперативность
                                    поставок
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={classesPrinc.gridItem}>
                        <div className={classesPrinc.cardPrinc}>
                            <div className={classesPrinc.cardImage}>
                                <img src={require("../../images/princ3.png")} alt="image"/>
                            </div>
                            <div className={classesPrinc.cardDescription}>
                                <p>
                                    Качественные консультации
                                    для правильного выбора
                                    тары и упаковки
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Principles