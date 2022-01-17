const $increment = document.querySelector("#increment");
const $decrement = document.querySelector("#decrement");
const $counter = document.querySelector("#counter");

const onIcrementClick = new FromEvent($increment, "click");
const onDecrementClick = new FromEvent($decrement, "click");

const clicks = combine(onIcrementClick, onDecrementClick);

let counter = 0;
$counter.innerHTML = counter;
const updateCounter = (counter, callback, counterElement) => (e) => {
  counter = callback(counter);
  counterElement.innerHTML = counter;
  console.log(counter);
};
const clicksObserver = {
  next: (e) => console.log("click", e.target.id),
  increment: updateCounter(counter, (value) => value + 1, $counter),
  decrement: updateCounter(counter, (value) => value - 1, $counter),
};

clicks.observe(clicksObserver);
