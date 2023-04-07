import classes from "./ViewMeal.module.css";
import beefImg from "../assets/beef.png";
const ViewMeal = () => {
  return (
    <div className={classes.viewMealWrapper}>
      <img src={beefImg} alt="Meal-img" />
      <h1>Instructions</h1>
      <p>
        Heat the oil in a frying pan that has a lid, then soften the onions,
        chilli, garlic and coriander stalks for 5 mins until soft. Stir in the
        tomatoes and sugar, then bubble for 8-10 mins until thick. Can be frozen
        for 1 month. Using the back of a large spoon, make 4 dips in the sauce,
        then crack an egg into each one. Put a lid on the pan, then cook over a
        low heat for 6-8 mins, until the eggs are done to your liking. Scatter
        with the coriander leaves and serve with crusty bread.
      </p>
    </div>
  );
};
export default ViewMeal;
