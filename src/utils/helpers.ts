export function formatCurrency(amount: string): string {
    let numericAmount = parseFloat(amount);

    if (isNaN(numericAmount)) {
        return "Invalid amount"; // Handle invalid input
    }

    const suffixes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

    let suffixIndex = 0;
    while (numericAmount >= 1000 && suffixIndex < suffixes.length - 1) {
        numericAmount /= 1000;
        suffixIndex++;
    }

    const formattedAmount = numericAmount.toFixed(2).replace(/\.00$/, ""); // Remove trailing ".00"

    return `${formattedAmount} ${suffixes[suffixIndex]}`;
}
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}
