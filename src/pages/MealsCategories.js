import classes from "./MealsCategories.module.css";
import CardCategories from "../components/UI/CardCategories";

const MealsCategories = () => {
  return (
    <div className={classes.mealsCategoriesWrapper}>
      <CardCategories />
      <CardCategories />
      <CardCategories />
      <CardCategories />
    </div>
  );
};
export default MealsCategories;
