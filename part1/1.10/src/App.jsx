import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return <p>{`${text}: ${value}`}</p>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h3>Statistics</h3>
      {total === 0 ? (
        "No feedback given"
      ) : (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={(good - bad) / total} />
          <StatisticLine text="Positive" value={(good / total) * 100 + "%"} />
        </>
      )}
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
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
