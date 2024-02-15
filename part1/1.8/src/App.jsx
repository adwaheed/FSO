import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>{"Good " + good}</p>
      <p>{"Neutral " + neutral}</p>
      <p>{"Bad " + bad}</p>
      <p>{"All: " + (good + neutral + bad)}</p>
      <p>
        {isNaN((good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad))
          ? "Average: 0"
          : "Average: " +
            (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
      </p>
      <p>
        {isNaN((good * 1 * 100) / (good + neutral + bad))
          ? "Positive: 0%"
          : "Positive: " + (good * 1 * 100) / (good + neutral + bad) + "%"}
      </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
