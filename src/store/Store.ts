import { makeAutoObservable } from "mobx";

class Store {
  userNameAdded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserNameAdded = (userNameAdded: boolean) => {
    this.userNameAdded = userNameAdded;
  };

  get giveUserNameAdded() {
    return this.userNameAdded;
  }
}

const store = new Store();
export default store;
