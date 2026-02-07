export function formatPrice(price, currency, rate) {
  const converted = price * rate;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  }).format(converted);
}
