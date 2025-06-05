/*
   Data models in db

    /sessions
       /id
        createdBy: "uid of the user"
        createdAt: Timestamp
        isRevealed: boolean
        fibonacciLabel?: "string"
        status: "active" | "completed"
        currentIssue?: "string"

    /participants
        /user_1
            uid: "user_1"
            name: "string"

        /user_2
            uid: "user_2"
            name: "string"

    /votes
        /user_1
            uid: "user_1"
            userName: "string"
            point: "string"
            isPicked: boolean

        /user_2
            uid: "user_2"
            userName: "string"
            point: "string"
            isPicked: boolean
*/


export interface PlanningSessions{
  id: string;
  createdBy: string;
  createdAt: Date;
  currentIssue?: string;
  status: "active" | "completed";
  isRevealed: boolean;
  fibonacciLabel?: string;
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


