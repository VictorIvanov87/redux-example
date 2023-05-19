import classes from "./Counter.module.css";

const Counter = () => {
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>1</div>
      <div>
        <button onClick={() => {}}>Increment</button>
        <button onClick={() => {}}>Increase by 10</button>
        <button onClick={() => {}}>Decrement</button>
      </div>
      <button onClick={() => {}}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
