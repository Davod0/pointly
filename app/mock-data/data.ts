import { Fibonacci } from "../../types/types";

export type User = { id: number; name: string; selectedCard: string | number | null };

export const mockedUsers: User[] =
[
  { id: 1, name: "Alice", selectedCard: null },
  { id: 2, name: "Bob", selectedCard: null },
  { id: 3, name: "Charlie", selectedCard: null },
];

export type Session = {
  sessionId: string;
  sessionName: string;
  user: User;
  fibonacciValues: Fibonacci;
};