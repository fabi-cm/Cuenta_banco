//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.dinero = 0;
  }

  open() {
  }

  close() {
  }

  deposit(deposito) {
    this.dinero = deposito;
  }

  withdraw() {
  }

  get balance() {
    return this.dinero;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
