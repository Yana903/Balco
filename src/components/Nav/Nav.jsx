import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Search from "./Search";
import MainPage from "../MainPage/MainPage";
import GoodsPage from "../GoodsPage/GoodsPage";
import AboutPage from "../AboutPage/AboutPage";
import DelivePayPage from "../DelivePayPage/DelivePayPage";
import NewsPage from "../NewsPage/NewsPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "../Category/Category";
import Details from "../DetailsPage/Details";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const containers = {
    categories: [
      {
        id: "medicine",
        name: "Тара для медицины",
        number: "72",
        image:
          "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-medicziny-i-kosmetiki.jpg",
        description:
          "Применяется для упаковки: таблеток, витаминов, порошков, мазей, кремов, бальзамов, гелей, красок, спортивного питания, чистящих средств.",
        subCategories: [
          {
            subId: "slamCap",
            subName: "С крышкой захлопкой",
            subNumber: "24",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg",
            
          },
          {
            subId: "scruwCap",
            subName: "С винтовой крышкой",
            subNumber: "35",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg",
          },
          {
            subId: "powderJar",
            subName: "Баночки под присыпку",
            subNumber: "5",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Banka-dlya-prisypki-300x300.jpg",
          },
          {
            subId: "bottle",
            subName: "бутылки под ПЭТ крышку",
            subNumber: "7",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-2-300x300.jpg",
          },
          {
            subId: "testJar",
            subName: "Контейнеры для анализов",
            subNumber: "2",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Kontejnery-laboratornye-300x300.jpg",
          },
        ],
      },
      {
        id: "makeup",
        name: "Тара для косметики",
        number: "133",
        image:
          "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-kosmetiki.jpg",
        subCategories: [
          {
            subId: "makeup1",
            subName: "makeup",
            subNumber: "24",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-300x300.jpg",
          },
          {
            subId: "makeup2",
            subName: "makeup",
            subNumber: "35",
            subImage:
              "http://tara.kh.ua/wp-content/uploads/2019/08/Tara-dlya-medicziny-i-kosmetiki-1-300x300.jpg",
          },
        ],
      },
      {
        id: "nutrition",
        name: "Тара для спортивного питания",
        number: "23",
        image:
          "http://tara.kh.ua/wp-content/uploads/2019/07/Tara-dlya-sportivnogo-pitaniya.jpg",
      },
      {
        id: "jar",
        name: "Баночки",
        number: "",
        image: "http://tara.kh.ua/wp-content/uploads/2019/07/Obshhaya.jpg",
      },
      {
        id: "busket",
        name: "Вёдра",
        number: "25",
        image:
          "http://tara.kh.ua/wp-content/uploads/2019/07/Plastikovye-vyodra.jpg",
      },
      {
        id: "dish",
        name: "Судки",
        number: "20",
        image: "http://tara.kh.ua/wp-content/uploads/2019/07/Sudki.jpg",
      },
    ],
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { categories } = containers;
  
  const {
    categories: { ...subCategories }
  } = containers;

  // const {
  //   subCategories: { ...subSubCategories }
  // } = categories;
  
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Container>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <Tab label="Главная" component={Link} to="/main" />
              <Tab label="Продукция" component={Link} to="/goods" />
              <Tab label="О нас" component={Link} to="/about" />
              <Tab label="Доставка и оплата" component={Link} to="/delivepay" />
              <Tab label="Новости" component={Link} to="/news" />
              <Tab label="Контакты" component={Link} to="/contacts" />
              <Box display="flex" alignItems="center">
                <Search />
              </Box>
            </Tabs>
          </Container>
        </AppBar>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <MainPage {...props} containers={containers} />}
          />
          <Route
            path="/main"
            render={(props) => <MainPage {...props} containers={containers} />}
          />
          <Route
            path="/goods"
            render={(props) => <GoodsPage {...props} containers={containers} />}
          />
          <Route
            path="/delivepay"
            render={(props) => (
              <DelivePayPage {...props} containers={containers} />
            )}
          />
          <Route
            path="/news"
            render={(props) => <NewsPage {...props} containers={containers} />}
          />
          <Route
            path="/about"
            render={(props) => <AboutPage {...props} containers={containers} />}
          />
          <Route
            path="/contacts"
            render={(props) => (
              <ContactsPage {...props} containers={containers} />
            )}
          />

          <Route
          exact
            path="/categories/:id"
            render={(props) => {
              const category = categories.find(
                ({ id }) => id === props.match.params.id
              );
              return <Category {...props} {...category} />;
            }}
          />
          <Route
            path="/categories/:id/:subId"
            render={(props) => {
              const category = categories.find(
                ({ id }) => id === props.match.params.id
              );
              const { subCategories } = category;
              const subCategory = subCategories.find(
                ({ subId }) => subId === props.match.params.subId
              );
                            
              return <Details subCategory={subCategory} />;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
