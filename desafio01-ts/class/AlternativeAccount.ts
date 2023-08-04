import { DioAccount } from "./DioAccount";

export class AlternativeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (depositValue: number): void => {
    let balance = this.getBalance();
    if (this.getStatus()) {
      this.setBalance((balance += depositValue + 10));
      console.log(
        `You have deposited ${depositValue}. Your new balance now is ${balance}`
      );
    }
  };
}
