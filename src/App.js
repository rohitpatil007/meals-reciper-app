import { Fragment } from "react";
import Header from "./components/shared/Header";
import ViewMeal from "./pages/ViewMeal";
import Home from "./pages/Home";
import MealsCategories from "./pages/MealsCategories";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Home /> */}
      {/* <MealsCategories /> */}
      <ViewMeal />
    </Fragment>
  );
}

export default App;
