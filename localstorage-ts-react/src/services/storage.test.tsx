import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  it("Should return an object in localStorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Should create an object in localStorage", () => {
    createLocalStorage();
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Should change the object value in localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
