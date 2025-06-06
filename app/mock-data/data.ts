


export type User = { id: number; name: string; selectedCard: string | number | null };

export const mockedUsers: User[] =
[
  { id: 1, name: "Alice", selectedCard: null },
  { id: 2, name: "Bob", selectedCard: null },
  { id: 3, name: "Charlie", selectedCard: null },
];


export type Fibonacci = {
  label: string;
  values: (string | number)[];
};

export const fibonacciValues: Fibonacci[] = [
  { label: "Classic", values: ["☕️", 0.5, 1, 2, 4, 6, 8, 16, 32] },
  { label: "Extended", values: ["☕️", 0.5, 1, 2, 3, 5, 8, 16, 32, 40, 64] },
  { label: "T-Shirt", values: ["XXS","XS", "S", "M", "L", "XL", "XXL"] },
];





export type Session = {
  sessionId: string;
  sessionName: string;
  user: User;
  fibonacciValues: Fibonacci;
};