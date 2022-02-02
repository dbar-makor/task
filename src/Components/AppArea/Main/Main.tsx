import { Orders } from "../../MainArea/Orders/Orders";
import { Selling } from "../../MainArea/Selling/Selling";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <Orders />
      <Selling />
    </div>
  );
};

export default Main;
