class ConnectionPool {
  static #instance = null;

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ConnectionPool();
    }
    return this.#instance;
  }
}

const c1 = ConnectionPool.getInstance();
const c2 = ConnectionPool.getInstance();
//ture 반환 위 둘은 같은 객체를 반환
console.log(c1 === c2);
