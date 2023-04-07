import { Fragment } from "react";
import classes from "./Card.module.css";
import img from "../../assets/food1.jpg";
const Card = () => {
  return (
    <Fragment>
      <div className={classes.cardContainer}>
        <div className={classes.imagWrapper}>
          <img className={classes.foodImg} src={img} alt="foodImg" />
        </div>
        <div className={classes.recipeIno}>
          <h1>Canadian Butter Tarts</h1>
          <p>Dessert</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Card;
