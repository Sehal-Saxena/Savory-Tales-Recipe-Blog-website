
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';
import CategoryPill from './CategoryPill';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  difficulty: string;
  categories: string[];
}

const RecipeCard = ({ id, title, image, prepTime, difficulty, categories }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${id}`} className="group">
      <div className="recipe-card h-full flex flex-col">
        {/* Image Container with overlay effect */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image || "https://images.unsplash.com/photo-1606101206586-cdbf606c045b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZW1hZGUlMjBicmVhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="p-4 flex-grow">
          <h3 className="font-handwritten text-xl text-wood-dark mb-2 group-hover:text-wood transition-colors duration-200">
            {title}
          </h3>
          
          {/* Meta info */}
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Clock size={16} className="mr-1" />
            <span className="mr-4">{prepTime}</span>
            <ChefHat size={16} className="mr-1" />
            <span>{difficulty}</span>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-2">
            {categories.map((category, index) => (
              <CategoryPill key={index} name={category} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
