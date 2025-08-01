import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
// import axios from "axios";

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


// ; DB_CREDENTIALS=8c529a0c5ba8b12d3e652dd4eb0f4878257ebc56249cf0997f1ee9614994b87ad60653a6ff0eec278968866c30bb9d3d3cb776c86df1ee98cfc9b5352e161bf7da78781b11c20d2007f61cb2d3ef04d0dddabdc1dac2a2bf4d84f6b6b5b43e9a39ee843b937234779177acc312eb503f9faa28d36918fbf367bf33341e65849b2a24cb88f9e2787fd2c7c3b51aaa717724cbe737085e6e469626e4c573d8d6458c0b1829b38e8aca9a87c93c3daec3700a554c14f7d77937b105eabd3767b29770a202970a2ceea1b53040b212008226

// ; DB_CREDENTIALS=a294492244002e068e8f63698f771763a010377203eb5f421f290b16f700bf02f138021ce440c9bfe9c4e1d2dcdea74c0f6e9558c800c9a745857c224529deaff274f64f2793da86c077798565bd66d074940a93301482a19aa29476131c16eb09c067d98ad44313ee1dad38971588e81d33f35bc071b25080a3424bb5fba2526777f0f902b87f40d6369c743a1fb7e9c5ec750f67f50d391ff38f5501d5947e
