import classes from "./Home.module.css";

import { Fragment } from "react";
import Card from "../components/UI/Card";
import SearchIcon from "../assets/search.png";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.homeWrapper}>
        <h1>Search For Your Meal</h1>
        <p>People Who Love to Eat Are Always the Best People</p>
      </div>
      <div className={classes.inputWrapper}>
        <input type="text" placeholder="search your meal here..."></input>
        <img src={SearchIcon} alt="search-icon" />
      </div>
      <div className={classes.cardWrapper}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </Fragment>
  );
};
export default Home;
