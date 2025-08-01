import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  function deliveryCost(deliveryOption) {
    let priceString = "Free Shipping";
    if (deliveryOption.priceCents > 0) {
      priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
    }
    return priceString;
  }
  const updateDeliveryOption = async (deliveryOption) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOption.id,
    });
    await loadCart();
  };
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={() => {
              updateDeliveryOption(deliveryOption);
            }}
          >
            <input
              type="radio"
              checked={
                deliveryOption &&
                cartItem &&
                deliveryOption.id === cartItem.deliveryOptionId
              }
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
                )}
              </div>
              <div className="delivery-option-price">
                {deliveryCost(deliveryOption)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
