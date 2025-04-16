
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import RecipeCard from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';

const CategoryPage = () => {
  const { category } = useParams();
  const formattedCategory = category?.replace(/-/g, ' ');
  
  const categoryRecipes = recipes.filter(recipe => 
    recipe.categories.some(cat => 
      cat.toLowerCase() === formattedCategory?.toLowerCase()
    )
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-handwritten text-4xl md:text-5xl text-wood-dark mb-8 text-center">
          {formattedCategory} Recipes
        </h1>
        
        {categoryRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        ) : (
          <p className="text-center text-wood-dark text-lg">
            No recipes found in this category.
          </p>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
