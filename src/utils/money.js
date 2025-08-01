export function formatMoney(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}

export function cartQuantity(cart) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return totalQuantity;
}
