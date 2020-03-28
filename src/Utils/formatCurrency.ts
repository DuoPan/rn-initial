function formatCurrency(number): string {
  // Intl does not work in Andriod
  // return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number ? number : 0);
  return number
    ? `$${Number(number)
        .toFixed(2)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`
    : "$0.00";
}

export function formatCurrencyTCents(number): string {
  // return new Intl.NumberFormat().format(number ? number : 0);
  return number
    ? Number(number)
        .toFixed(0)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    : "0";
}

export default formatCurrency;
