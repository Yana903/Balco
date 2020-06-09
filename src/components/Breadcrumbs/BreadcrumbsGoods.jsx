import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
       Главная
      </Link>
      <Link
        color="inherit"
        href="/goods"
        onClick={handleClick}
      >
        Каталог продукции
      </Link>
    </Breadcrumbs>
  );
}
