import ReactDOM from "react-dom";
// import Parent from "./props/Parent";
import GuestList from "./state-eg/GuestList";
import UserSearch from "./state-eg/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
