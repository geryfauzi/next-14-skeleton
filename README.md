Next.js 14 Skeleton Project

This project serves as a skeleton for building applications with Next.js 14, using the App Router, Tailwind CSS, DaisyUI, React Haiku, and Zustand for state management. It follows Atomic Design principles for component organization.
Table of Contents

    Features
    Getting Started
    Project Structure
    Usage
    Contributing
    License

Features

    Next.js 14: Latest version of Next.js with the App Router for improved routing.
    Tailwind CSS: Utility-first CSS framework for rapid UI development.
    DaisyUI: Tailwind CSS component library for beautiful and responsive design.
    React Haiku: Declarative and animated UI elements.
    Zustand: Small, fast, and scalable state management.
    Atomic Design: Methodology for designing and organizing components.

Getting Started
Prerequisites

Ensure you have the following installed:

    Node.js (>= 20.x)
    npm or yarn

Installation

    Clone the repository:

    bash

git clone https://github.com/geryfauzi/next-14-skeleton.git
cd nextjs14-skeleton

Install dependencies:

bash

npm install
# or
yarn install

Run the development server:

bash

    npm run dev
    # or
    yarn dev

    Open http://localhost:3000 with your browser to see the result.

Usage
Adding Components

Components are organized according to Atomic Design principles:

    Atoms: Basic building blocks (e.g., buttons, inputs).
    Molecules: Groups of atoms (e.g., form fields, cards).
    Organisms: Groups of molecules (e.g., navigation bars, footers).
    Templates: Page-level components that compose organisms.

State Management

Zustand is used for state management. Create your stores in the src/store directory.
Styling

Tailwind CSS and DaisyUI are used for styling. Customize the tailwind.config.js file as needed.
Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature).
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature/your-feature).
    Open a pull request.

License

This project is licensed under the MIT License.