import React from 'react';
import '../../App.css';
import classesHero from './Hero.module.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Hero = () => {
    return (
        <section className={classesHero.sectionHero}>
            <div className={classesHero.heroBackground}></div>
            <div className={classesHero.heroForeground}>
                <Container>
                    <div className={classesHero.heroInform}> 
                        <Typography variant="h1">
                            Надёжный производтель
                            пластиковой тары и упаковки
                        </Typography>
                        <p>
                            В сфере промышленной упаковки мы работаем уже 10 лет и имеем богатый
                            опыт, который позволяет нам качественно консультировать наших клиентов и
                            подбирать им наилучший вариант упаковки.
                        </p>
                        <Button variant="contained" color="primary">
                            Перейти в каталог
                        </Button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Hero