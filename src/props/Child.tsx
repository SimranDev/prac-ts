interface ChildProps {
  color: string;
  changeColor: () => void;
}

// export const Child = ({ color }: ChildProps) => {
//   return <div>{color}</div>;
// };

export const ChildAsFC: React.FC<ChildProps> = ({ color, changeColor }) => {
  return (
    <div>
      {color}
      <button onClick={changeColor}>Click Me</button>
    </div>
  );
};
