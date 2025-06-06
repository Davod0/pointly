
export interface PlanningSessions{
  id: string;
  createdAt: Date;
  createdBy: string;
  fibonacciLabel?: string;
  status: "active" | "completed";
  isRevealed: boolean;
  currentIssue?: string;
}

export interface Participants {
    uid: string;
    name: string;
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
  email?: string;
}

export type Fibonacci = {
  label: string;
  values: (string | number)[];
};


