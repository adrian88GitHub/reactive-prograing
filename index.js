const EventEmitter = require("events");

class Cart {
  constructor() {
    this.items = [];
    this.emitter = new EventEmitter();
  }

  addItem(item) {
    this.items.push(item);
  }

  checkout() {
    const total = this.items.reduce((_total, item) => _total + item.price, 0);

    this.emitter.emit("checkout", total);
  }
}

class Invoice {
  constructor(cart) {
    this.total = 0;
    this.cart = cart;

    this.cart.emitter.on("checkout", this.update.bind(this));
  }

  update(total) {
    this.total = total;
  }
}

const cart = new Cart();
const invoice = new Invoice(cart);

cart.addItem({ name: "Cerveza Báltica", price: 990 });
cart.addItem({ name: "Pichanga 0.5 kg", price: 1290 });
cart.checkout();

console.log(invoice.total); // 2280
