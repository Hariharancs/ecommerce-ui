import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Product } from "./Product";
// import { render, screen } from "@testing-library/jest-dom";
// screen = check the fake webpage, whether everything is rendering correctly

vi.mock("axios");

// Integration testing
describe("Product Component", () => {
  let product;
  let loadCart;

  beforeEach(() => {
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    // vi. fn() = creates a fake function,
    // that doesn't do anything,
    // it will prevent accidently contact with the backend in our test, help to stop accessing or updating the backend
    // loadCart is the a function to load the cart from the backend

    loadCart = vi.fn();
  });
  it("display the product details correctly", () => {

    render(<Product product={product} loadCart={loadCart} />);
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
  });
});
