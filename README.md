# Basic Web Development Lab

A simple React + TypeScript + Vite lab environment for learning modern web development fundamentals.

## Prerequisites

Before running this lab, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation

1. Clone or download this repository to your local machine
2. Navigate to the project directory:
   ```bash
   cd webdevlab
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Lab

### Development Mode

To start the development server with hot reload:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check code quality and style:

```bash
npm run lint
```

## Lab Structure

This lab includes:

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **React Router** for client-side routing
- **ESLint** and **Prettier** for code quality
- Basic component structure with Home, About, and Navigation components

## Getting Started

1. Run `npm run dev` to start the development server
2. Open your browser to the provided localhost URL
3. Start experimenting with the code in the `src/` directory
4. The app will automatically reload when you make changes
