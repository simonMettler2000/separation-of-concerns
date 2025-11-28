// multiplication_table.ts

/**
 * Computes a matrix of products for the given numbers.
 */
export function computeMultiplicationMatrix(numbers: number[]): number[][] {
  return numbers.map((row) => numbers.map((col) => row * col));
}

/**
 * Computes the required cell width based on the largest number in the matrix.
 */
export function computeCellWidth(numbers: number[]): number {
  const max = Math.max(...numbers) ** 2;
  return String(max).length + 1; // extra spacing
}

/**
 * Formats the multiplication table into an array of text lines (no console output).
 */
export function formatMultiplicationTable(numbers: number[]): string[] {
  const matrix = computeMultiplicationMatrix(numbers);
  const width = computeCellWidth(numbers);

  // format header
  const pad = (v: number | string) =>
    String(v).padStart(width, " ");

  let header = pad("*") + " ||";
  for (const n of numbers) {
    header += pad(n) + " |";
  }

  const separator = "=".repeat(header.length);

  const rows = matrix.map((rowValues, rowIndex) => {
    let row = pad(numbers[rowIndex]) + " ||";
    for (const v of rowValues) {
      row += pad(v) + " |";
    }
    return row;
  });

  return [header, separator, ...rows];
}

/**
 * Public function for the demo: prints the formatted table.
 */
export function printMultiplicationTable(numbers: number[]): void {
  const lines = formatMultiplicationTable(numbers);
  lines.forEach((line) => console.log(line));
}
