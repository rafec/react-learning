import { getAllLocalStorage } from "./storage";

describe("storage", () => {
  const getItem = jest.spyOn(Storage.prototype, "getItem");

  it("Should return an object in localStorage", () => {
    getAllLocalStorage();
    expect(getItem).toHaveBeenCalled();
  });
});
