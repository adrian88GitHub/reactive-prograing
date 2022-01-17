class FromEvent {
  constructor(target, name) {
    this.observers = [];
    target.addEventListener(name, this.next.bind(this));
  }
  observe(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  next(e) {
    this.observers.forEach((observer) => {
      observer.next(e);
      switch (e.target.id) {
        case "increment":
          observer.increment(e);
          break;
        case "decrement":
          observer.decrement(e);
          break;
        default:
          break;
      }
    });
  }
}
