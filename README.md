# 🍽️ Savory Tales Recipe Blog

A beautiful, modern recipe blog website showcasing delicious homemade recipes with detailed instructions, ingredient lists, and a user-friendly interface.

![Savory Tales Recipe Blog](https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1000)

## 📋 Features

- **Recipe Showcase**: Browse a curated collection of delicious recipes with beautiful images
- **Featured Recipes**: Highlight special recipes on the homepage
- **Categories**: Browse recipes by categories like Breakfast, Quick Dinner, Vegetarian, etc.
- **Recipe Details**: View detailed recipe pages with:
  - Ingredient lists with adjustable serving sizes
  - Step-by-step cooking instructions with optional photos and tips
  - Cooking timers for recipe steps
  - Difficulty levels and preparation times
  - Recipe ratings and comments
  - Recipe notes and cooking tips
- **User Interactions**: Add recipes to favorites, leave comments, and rate recipes
- **Add New Recipes**: Add your own recipes through a user-friendly dialog
- **Responsive Design**: Fully responsive layout that works across desktop, tablet, and mobile devices
- **Newsletter Subscription**: Sign up for weekly recipe updates
- **Advanced UI Components**: Beautiful UI with paper textures, handwritten fonts, and a warm color palette

## 🛠️ Technologies Used

### Frontend

- **React 18** - UI component library
- **TypeScript** - Static typing for JavaScript
- **Vite** - Fast build tool and development server
- **React Router** - For navigation and routing
- **React Hook Form** - Form validation and handling
- **React Query** - Data fetching, caching, and state management

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component system built on Radix UI
- **Lucide React** - Beautiful, consistent icon set
- **Radix UI** - Headless UI components
- **Embla Carousel** - For image carousels
- **React Day Picker** - Date selection components

### Backend Integration

- **Supabase** - Backend as a service (prepared for integration)

### Data Validation

- **Zod** - TypeScript-first schema validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sehal-Saxena/Savory-Tales-Recipe-Blog-website.git
cd Savory-Tales-Recipe-Blog-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
savory-tales/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base UI components from shadcn/ui
│   ├── data/               # Static data and mock data
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External service integrations
│   │   └── supabase/       # Supabase client and types
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   └── App.tsx             # Main application component
├── index.html              # HTML entry point
├── tailwind.config.ts      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile phones

## 🔄 State Management

- React's built-in state management with hooks
- React Query for server state management
- Context API for theme and global state

## 🌐 Deployment

You can deploy this project using any hosting service that supports static sites:

- **Vercel**: Optimal for React applications with zero-config deployment
- **Netlify**: Easy deployment with continuous integration
- **GitHub Pages**: Free hosting directly from your repository
- **Cloudflare Pages**: Fast global CDN with free hosting

## 🛣️ Roadmap

- User authentication
- Saved recipes functionality
- Full Supabase backend integration
- Search functionality
- Meal planning calendar
- Shopping list generation
- Print-friendly recipe pages

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sehal-Saxena/Savory-Tales-Recipe-Blog-website/issues).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Recipe images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
