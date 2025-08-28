# Pointly
This is a web application named Pointly, designed for pointing sessions to estimate the time required for different tickets and retrospective meetings during development sprints.
The application is built with Next.js, TypeScript, and Tailwind CSS.
The backend is built on Firebase. Firestore serves as the database for storing user sessions and related data.
Firestore security rules are implemented to ensure that users can only access their own data and that all data is properly validated before being written to the database. Firebase App Check is also integrated to provide an additional layer of security by verifying that incoming requests are from legitimate users.




# Naming Conventions in the Project
PascalCase → Used for React components.
kebab-case → Used for directories.
camelCase → Used for variables, functions, and methods.


To run the development server, first install all dependencies by running 'npm install':

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```





/*
   Data models in db

    /sessions
        └── {sessionId}
                ├── createdAt: Date
                ├── createdBy: string
                ├── fibonacciLabel: string
                ├── status: "active" | "completed"
                ├── currentIssue: string
                ├── roomName: string
                ├── isRevealed: boolean
                └── /participants
                        └── {participantId}
                                ├── name: string
                                └── selectedCard: string | number | null
*/
