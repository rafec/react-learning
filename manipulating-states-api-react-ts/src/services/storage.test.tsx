import { createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  it("Should return an object in localStorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Should create an object in localStorage", () => {
    createLocalStorage();
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
