import { AlternativeAccount } from "./class/AlternativeAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(150);
peopleAccount.withdraw(150);
peopleAccount.withdraw(150);
peopleAccount.deposit(15);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(130);
companyAccount.withdraw(130);
companyAccount.withdraw(130);
companyAccount.deposit(15);
companyAccount.getLoan(15);
companyAccount.withdraw(10);
console.log(companyAccount);

const alternativeAccount: AlternativeAccount = new AlternativeAccount(
  "Alternative guy",
  20
);
alternativeAccount.deposit(100);
alternativeAccount.deposit(1);
console.log(alternativeAccount);
