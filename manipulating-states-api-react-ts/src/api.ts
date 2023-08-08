const account = {
  email: "rafael@mail.com",
  password: 123456,
  name: "Rafael Brizuena",
  balance: 2000,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});
