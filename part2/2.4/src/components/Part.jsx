const Part = (props) => {
  return (
    <div>
      <div>
        {props.part.name} {props.part.exercises}
      </div>
    </div>
  );
};

export default Part;
