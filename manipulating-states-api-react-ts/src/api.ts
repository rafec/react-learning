const account = {
  email: "rafael@mail.com",
  password: 123456,
  name: "Rafael Brizuena",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});
