export interface PlanningSessions{
  id: string;
  roomName: string;
  fibonacciLabel: string;
  createdAt: Date;
  isRevealed: boolean;
  status: "active" | "completed";
  // createdBy?: string;
  // currentIssue?: string;
}

export interface Participants {
  uid?: string;
  name?: string;
  selectedCard?: string | number | null;
}

export interface Votes {
  uid: string;
  userName: string;
  point: string;
  isPicked: boolean;
}

export default interface User {
  uid: string;
  name?: string;
  email: string;
}

export type Fibonacci = {
  label: string;
  values: (string | number)[];
};


