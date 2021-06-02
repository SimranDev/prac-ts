const EventComponent = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleDrag = (e: React.DragEvent<HTMLHeadingElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <h3 draggable onDrag={handleDrag}>
        Drag Me!
      </h3>
    </div>
  );
};

export default EventComponent;
