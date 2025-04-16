
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat, ArrowRight } from 'lucide-react';
import CategoryPill from './CategoryPill';

interface FeaturedRecipeProps {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  difficulty: string;
  categories: string[];
}

const FeaturedRecipe = ({ id, title, description, image, prepTime, difficulty, categories }: FeaturedRecipeProps) => {
  return (
    <div className="relative overflow-hidden recipe-card">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-parchment/70 hidden md:block" />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="relative md:w-1/2 p-6 flex flex-col justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <CategoryPill key={index} name={category} />
            ))}
          </div>
          
          {/* Title and Description */}
          <div>
            <h2 className="recipe-title mb-4">{title}</h2>
            <p className="text-wood-dark mb-6 line-clamp-3">{description}</p>
          </div>
          
          {/* Meta info and Link */}
          <div className="mt-auto">
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Clock size={16} className="mr-1" />
              <span className="mr-4">{prepTime}</span>
              <ChefHat size={16} className="mr-1" />
              <span>{difficulty}</span>
            </div>
            
            <Link to={`/recipe/${id}`} className="btn-primary inline-flex items-center">
              View Recipe
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
