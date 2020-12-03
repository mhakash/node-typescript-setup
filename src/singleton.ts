class PrivateSingleton {
  message: string;
  constructor() {
    this.message = "hello I am singleton";
  }
}

class Singleton {
  static instance: PrivateSingleton;

  constructor() {
    throw new Error("user getInstance");
  }

  static getInstance() {
    if (!Singleton.instance) {
      console.log("creating new instance");
      Singleton.instance = new PrivateSingleton();
    }
    return Singleton.instance;
  }
}

export default Singleton;
