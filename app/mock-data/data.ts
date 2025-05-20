

export type User = { id: number; name: string; picked: string | number | null };

export const mockedUsers: User[] =
[
  { id: 1, name: "Alice", picked: null },
  { id: 2, name: "Bob", picked: null },
  { id: 3, name: "Charlie", picked: null },
];


export const fibonacciValues =
[
 { label: "Classic", values: [["☕️", 1, 2, 3, 5, 8, 16, 32]] },
 { label: "Extended", values: [[0.5, 1, 2, 3, 5, 8, 16, 32, 40, 64]] },
 { label: "T-Shirt", values: [["XS", "S", "M", "L", "XL", "XXL"]] },
];