const partial =
  (f, ...a) =>
  (...b) =>
    f(...a, ...b);

const preventDefault = (f, event) => (event.preventDefault(), f(event));

const logKeypress = (event) => console.log(event.which);

document
  .querySelector("input[name=foo]")
  .addEventListener("keydown", partial(preventDefault, logKeypress));
