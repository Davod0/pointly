# Pointly
Pointly is a web application designed to support pointing sessions for estimating the time required for different tickets,
as well as retrospective meetings during development sprints. The application is built with Next.js, TypeScript and Tailwind CSS.
Its backend is powered by Firebase. Firestore serves as the database for storing user sessions and related data.
Firestore security rules are implemented to ensure that users can only access their own data and that all data is
properly validated before being written to the database.
Firebase App Check is also integrated to provide an additional layer of security by
verifying that incoming requests are from legitimate users.
To ensure reliability, GitHub Actions are used to automate testing and application builds before deployment.
The application is hosted on Google Cloud Run.








# Naming Conventions in the Project
PascalCase → Used for React components.
kebab-case → Used for directories.
camelCase → Used for variables, functions, and methods.

To run the development server, first install all dependencies by running:

```bash
npm install

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


