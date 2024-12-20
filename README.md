# My App

This is a React application created using Create React App. The application provides a dashboard interface with various components such as a sidebar, repositories list, and a welcome screen for user authentication.

## Project Structure

codeant-ai/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── azure.png
│   │   │   ├── bitbucket.png
│   │   │   ├── chevron-down.svg
│   │   │   ├── close.svg
│   │   │   ├── github.png
│   │   │   ├── gitlab.png
│   │   │   ├── plus.svg
│   │   │   ├── refresh.svg
│   │   │   ├── repository.svg
│   │   │   ├── code-review.svg
│   │   │   ├── security.svg
│   │   │   ├── help.svg
│   │   │   ├── settings.svg
│   │   │   ├── support.svg
│   │   │   └── logout.svg
│   │   └── logo.png
│   ├── components/
│   │   ├── AIMetricsCard.css
│   │   ├── AIMetricsCard.jsx
│   │   ├── Repositories.css
│   │   ├── Repositories.js
│   │   ├── Sidebar.css
│   │   ├── Sidebar.js
│   │   ├── WelcomeScreen.css
│   │   └── WelcomeScreen.jsx
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md


## Components

### `WelcomeScreen`

The `WelcomeScreen` component provides a user interface for signing in with various providers. It includes tabs for "SAAS" and "Self Hosted" sign-in options.

### `Sidebar`

The `Sidebar` component provides navigation links to different sections of the dashboard, such as Repositories, AI Code Review, Cloud Security, How to Use, Settings, Support, and Logout.

### `Repositories`

The `Repositories` component displays a list of repositories with search functionality. It includes repository details such as name, type, language, size, and last updated time.

### `AIMetricsCard`

The `AIMetricsCard` component displays metrics related to AI performance, such as language support, developers, hours saved, and issues fixed.

## Routes

The application uses React Router for navigation. The following routes are defined:

- `/` and `/signup`: Renders the `WelcomeScreen` component for user authentication.
- `/dashboard`: Renders the `Repositories` component within the `DashboardLayout`.
- `*`: Redirects to the home route (`/`).

## Getting Started

To get started with the project, clone the repository and install the dependencies:

git clone <repository-url>
cd my-app
npm install
