import { expect, it, describe } from "vitest";
import { formatMoney, cartQuantity } from "./money";

// Unit testing
describe("formatMoney", () => {
  it("formats 1999 cents are $19.99", () => {
    expect(formatMoney(1999)).toBe("$19.99");
  });

  it("displays 2 decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00");
  });
});

describe("cartQuantity", () => {
  it("adding 2 and 4 will be 6", () => {
    expect(cartQuantity([{quantity: 2},{quantity: 4}])).toBe(6);
  });

  it("adding 0 and combination of 0", () => {
    expect(cartQuantity([{quantity: 0}])).toBe(0);
    expect(cartQuantity([{quantity: 1},{quantity: 0}])).toBe(1);
    expect(cartQuantity([{quantity: 2},{quantity: 0},{quantity: 12}])).toBe(14);
  });
});
