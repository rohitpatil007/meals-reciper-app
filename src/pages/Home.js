import classes from "./Home.module.css";

import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.homeWrapper}>
        <h1>Search For Your Meal</h1>
        <p>People Who Love to Eat Are Always the Best People</p>
      </div>
      <div className={classes.inputWrapper}>
        <input type="text" placeholder="search your meal here..."></input>
      </div>
    </Fragment>
  );
};
export default Home;
