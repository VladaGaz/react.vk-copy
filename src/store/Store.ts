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

export default Store;
