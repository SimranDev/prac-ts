import ReactDOM from "react-dom";
import EventComponent from "./events-eg/EventComponent";
// import Parent from "./props/Parent";
import GuestList from "./state-eg/GuestList";
import UserSearch from "./state-eg/UserSearch";

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
