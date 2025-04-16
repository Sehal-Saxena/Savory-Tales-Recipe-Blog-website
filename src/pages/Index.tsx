import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FeaturedRecipe from '@/components/FeaturedRecipe';
import RecipeCard from '@/components/RecipeCard';
import CategoryPill from '@/components/CategoryPill';
import { BookOpen, ChefHat, CookingPot } from 'lucide-react';
import { recipes as initialRecipes } from '@/data/recipes';
import AddRecipeDialog from '@/components/AddRecipeDialog';

const popularCategories = [
  { name: 'Breakfast', href: '/categories/breakfast' },
  { name: 'Quick Dinner', href: '/categories/quick-dinner' },
  { name: 'Vegetarian', href: '/categories/vegetarian' },
  { name: 'Desserts', href: '/categories/desserts' },
  { name: 'Healthy', href: '/categories/healthy' },
  { name: 'Baking', href: '/categories/baking' },
];

const Index = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  
  const handleAddRecipe = (newRecipe: any) => {
    setRecipes(prev => [newRecipe, ...prev.filter(r => !r.featured)]);
  };

  const featuredRecipe = recipes.find(recipe => recipe.featured);
  const regularRecipes = recipes.filter(recipe => !recipe.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section */}
        <section className="mb-16 text-center">
          <h1 className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-wood-dark mb-6 leading-tight">
            Delicious Homemade Recipes
          </h1>
          <p className="text-lg text-wood max-w-2xl mx-auto mb-8">
            Discover mouthwatering recipes with easy to follow instructions and beautiful presentations.
          </p>
          
          {/* Popular categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {popularCategories.map((category, index) => (
              <CategoryPill key={index} name={category.name} href={category.href} />
            ))}
          </div>
        </section>
        
        {/* Featured recipe section */}
        {featuredRecipe && (
          <section className="mb-16">
            <h2 className="section-title text-center mb-8">Featured Recipe</h2>
            <FeaturedRecipe {...featuredRecipe} />
          </section>
        )}
        
        {/* Features section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="paper-texture p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-butter mb-4">
                <CookingPot size={32} className="text-wood-dark" />
              </div>
              <h3 className="font-handwritten text-2xl text-wood-dark mb-2">Easy to Follow</h3>
              <p className="text-wood">Step-by-step instructions with helpful tips and photos guide you through each recipe.</p>
            </div>
            <div className="paper-texture p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-butter mb-4">
                <BookOpen size={32} className="text-wood-dark" />
              </div>
              <h3 className="font-handwritten text-2xl text-wood-dark mb-2">Curated Collection</h3>
              <p className="text-wood">Each recipe is tested and perfected to ensure delicious results every time.</p>
            </div>
            <div className="paper-texture p-6 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-butter mb-4">
                <ChefHat size={32} className="text-wood-dark" />
              </div>
              <h3 className="font-handwritten text-2xl text-wood-dark mb-2">For All Skill Levels</h3>
              <p className="text-wood">From beginners to experienced cooks, find recipes suited to your cooking abilities.</p>
            </div>
          </div>
        </section>
        
        {/* Latest recipes section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">Latest Recipes</h2>
            <div className="flex gap-4">
              <AddRecipeDialog onAddRecipe={handleAddRecipe} />
              <a href="/recipes" className="btn-primary">View All</a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>
        
        {/* Newsletter section */}
        <section className="wood-bg rounded-lg p-8 text-center text-parchment-light">
          <h2 className="font-handwritten text-3xl mb-4">Get New Recipes Weekly</h2>
          <p className="mb-6 max-w-2xl mx-auto">Sign up for our newsletter and receive freshly baked recipes straight to your inbox every week.</p>
          
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-parchment-light text-wood-dark px-4 py-2 rounded-l focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-butter text-wood-dark px-6 py-2 rounded-r font-medium hover:bg-butter-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="wood-bg text-parchment-light py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-start">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <CookingPot className="h-8 w-8 text-butter" />
                <span className="ml-2 font-handwritten text-2xl">Savory Tales</span>
              </div>
              <p className="mt-2 text-sm">Delicious recipes for every occasion.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-butter mb-2">Recipes</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="/categories/breakfast" className="hover:text-butter transition-colors">Breakfast</a></li>
                  <li><a href="/categories/lunch" className="hover:text-butter transition-colors">Lunch</a></li>
                  <li><a href="/categories/dinner" className="hover:text-butter transition-colors">Dinner</a></li>
                  <li><a href="/categories/desserts" className="hover:text-butter transition-colors">Desserts</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-butter mb-2">About</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="/about" className="hover:text-butter transition-colors">Our Story</a></li>
                  <li><a href="/contact" className="hover:text-butter transition-colors">Contact</a></li>
                  <li><a href="/faq" className="hover:text-butter transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-butter mb-2">Follow</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#" className="hover:text-butter transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-butter transition-colors">Pinterest</a></li>
                  <li><a href="#" className="hover:text-butter transition-colors">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-wood-dark/30 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Savory Tales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
