//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.dinero = 0;
    this.cuenta_cerrada = false;
  }

  open() {
  }

  close() {
    this.dinero = 0;
    this.cuenta_cerrada = true;
  }

  deposit(deposito) {
    if (this.cuenta_cerrada){
      throw new ValueError;
    }else if (deposito < 0) {
      throw new ValueError;
    } else {
      this.dinero += deposito;
    }
  }

  withdraw(retiro) {
    if (retiro < 0) {
      throw new ValueError;
    }
    else if (retiro > this.dinero) {
      throw new ValueError;
    } else {
      this.dinero -= retiro;
    }
  }

  get balance() {
    if (this.cuenta_cerrada) {
      // throw new ValueError;
      // return ValueError;
      // this.dinero = 0;
    }
    return this.dinero;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
    this.name = "ValueError";
  }
}
