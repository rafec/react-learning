export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (depositValue: number): void => {
    if (this.getStatus()) {
      this.balance += depositValue;
      console.log(
        `You have deposited ${depositValue}. Your new balance now is ${this.balance}`
      );
    }
  };

  withdraw = (withdrawValue: number): void => {
    if (this.getStatus() && this.balance >= withdrawValue) {
      this.balance -= withdrawValue;
      console.log(
        `You have withdrawed ${withdrawValue}. Your new balance now is ${this.balance}`
      );
    } else {
      console.log(
        `Failed to withdraw! Please contact your bank!\n[Actual balance: ${this.balance}]`
      );
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (newBalance: number): void => {
    this.balance = newBalance;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  getStatus = (): boolean => {
    return this.validateStatus();
  };
}
