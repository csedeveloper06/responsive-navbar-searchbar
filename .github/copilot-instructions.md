# AI Agent Instructions for Responsive Navbar Project

## Project Overview
This is a React + Vite project focused on creating a responsive navbar with a searchbox icon. The project uses modern React (v19) with Vite as the build tool and TailwindCSS for styling.

## Key Technologies & Dependencies
- React 19.1.1
- Vite 7.1.7
- TailwindCSS 4.1.16
- React Router DOM 7.9.5
- ESLint 9.36.0

## Project Structure
```
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx       # Application entry point
│   ├── App.css        # Component-specific styles
│   ├── index.css      # Global styles
│   └── assets/        # Static assets
```

## Development Workflow

### Getting Started
1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Code Conventions
- Use JSX for React components
- Component files use `.jsx` extension
- CSS modules for component-specific styling
- Tailwind utility classes for styling

## Key Architecture Points
- Single page application architecture
- Component-based structure using React
- Client-side routing with React Router
- Hot Module Replacement (HMR) enabled through Vite

## Common Tasks
- New components should be added in `src/` directory
- Use Vite's `import.meta.env` for environment variables
- ESLint is configured for React - run `npm run lint` to check code

## Notes for AI Agents
- Check `vite.config.js` before suggesting build configuration changes
- Use React hooks for state management
- Tailwind classes should be used for styling - avoid inline styles
- Components should follow React 19 best practices (hooks, functional components)