import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logoText}>Meals App</div>
      <div className={classes.nav}>
        <a href="/">Home</a>
        <a href="/">Categories</a>
      </div>
    </div>
  );
};
export default Header;
