import beefImg from "../../assets/beef.png";
import classes from "./CardCategories.module.css";

const CardCategories = () => {
  return (
    <div className={classes.cardCategoryWrapper}>
      <img className={classes.categoryImg} src={beefImg} alt="categoryImg" />
      <p>Beef</p>
    </div>
  );
};
export default CardCategories;
