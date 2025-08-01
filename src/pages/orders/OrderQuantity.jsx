import axios from "axios";
import { useState, Fragment } from "react";

import dayjs from "dayjs";

export function OrderQuantity({ orderProduct, loadCart }) {
  console.log("orderProduct", orderProduct.quantity)
  const [quantity, setQuantity] = useState(orderProduct.quantity);
  console.log("quantity", quantity)

  const addToCart = async (product) => {
    console.log("product", product);
    await axios.post("/api/cart-items", {
      productId: product.productId,
      quantity,
    });
    await loadCart();
  };

  const selectQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  };

  return (
    <Fragment>
      <div className="product-image-container">
        <img src={orderProduct.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{orderProduct.product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity-container">
          Quantity:
          {/* {orderProduct.quantity} */}
          {/* <div className="product-quantity-container"> */}
          <select
            value={quantity}
            onChange={selectQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="10">11</option>
            <option value="10">12</option>
          </select>
          {/* </div> */}
        </div>
        <button className="buy-again-button button-primary">
          <img className="buy-again-icon" src="images/icons/buy-again.png" />
          <span
            className="buy-again-message"
            onClick={() => addToCart(orderProduct)}
          >
            Add to Cart
          </span>
        </button>
      </div>

      <div className="product-actions">
        <a href="/tracking">
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    </Fragment>
  );
}
