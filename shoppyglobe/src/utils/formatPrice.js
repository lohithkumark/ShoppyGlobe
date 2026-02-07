export function formatPrice(price, currency) {
  const converted = price * currency.rate;

  return `${currency.symbol}${converted.toFixed(2)}`;
}
