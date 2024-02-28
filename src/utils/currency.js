export function formatMoney(value) {
  return new Intl.NumberFormat('en-AD', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3
  }).format(value);
}
