// Header Component
const Header = (props) => {
  //console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Part Component
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

// Content Component
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

// Total Component
const Total = (props) => {
  const totalExercises = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <p>Number of exercises {totalExercises}</p>;
};

// App Component
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
