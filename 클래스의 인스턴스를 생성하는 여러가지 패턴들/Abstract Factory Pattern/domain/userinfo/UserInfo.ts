export class UserInfo {
  #userId: string = "";
  #passwd: string = "";
  #userName: string = "";

  get userId() {
    return this.#userId;
  }
  set userId(id: string) {
    this.#userId = id;
  }
  get passwd() {
    return this.#passwd;
  }
  set passwd(pwd: string) {
    this.#passwd = pwd;
  }
  get userName() {
    return this.#userName;
  }
  set userName(name: string) {
    this.#userName = name;
  }
}
