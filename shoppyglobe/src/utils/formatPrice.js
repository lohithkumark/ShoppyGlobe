export function formatPrice(amount, currency) {
  if (
    typeof amount !== "number" ||
    isNaN(amount) ||
    typeof currency !== "string"
  ) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  }).format(amount);
}
