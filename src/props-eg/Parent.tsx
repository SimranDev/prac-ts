import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" changeColor={() => console.log("Green")} />;
};

export default Parent;
