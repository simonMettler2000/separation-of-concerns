// multiplication_table_test.ts
import { expect } from "@std/expect";
import {
  computeCellWidth,
  computeMultiplicationMatrix,
  formatMultiplicationTable,
} from "./multiplication_table.ts";

Deno.test("compute matrix correctly", () => {
  const matrix = computeMultiplicationMatrix([2, 3]);

  expect(matrix).toEqual([
    [4, 6],
    [6, 9],
  ]);
});

Deno.test("compute correct cell width", () => {
  // max result = 10*10 = 100 → length = 3 → plus one space = 4
  expect(computeCellWidth([1, 10])).toBe(4);
});

Deno.test("format table returns correct number of lines", () => {
  const lines = formatMultiplicationTable([1, 2, 3]);
  // header + separator + 3 rows = 5
  expect(lines.length).toBe(5);
});

Deno.test("format table contains correct header", () => {
  const lines = formatMultiplicationTable([1, 2]);
  const header = lines[0];

  expect(header.includes("*")).toBe(true);
  expect(header.includes("1")).toBe(true);
  expect(header.includes("2")).toBe(true);
});
