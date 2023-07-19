export class Product {
  #productId: string = "";
  #productName: string = "";

  get productId() {
    return this.#productId;
  }
  set productId(id: string) {
    this.#productId = id;
  }

  get productName() {
    return this.#productName;
  }
  set productName(name: string) {
    this.#productName = name;
  }
}
