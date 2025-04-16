import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import IngredientList from '@/components/IngredientList';
import StepByStep from '@/components/StepByStep';
import CategoryPill from '@/components/CategoryPill';
import { ArrowLeft, Clock, ChefHat, Utensils, Star } from 'lucide-react';
import { recipes } from '@/data/recipes';
import RecipeInteractions from '@/components/RecipeInteractions';
import RecipeComments from '@/components/RecipeComments';

const RecipeDetail = () => {
  const { id } = useParams();
  
  const recipe = recipes.find(recipe => recipe.id === id) || {
    id: '1',
    title: 'Recipe Not Found',
    description: 'Sorry, we could not find this recipe.',
    image: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    prepTime: 'N/A',
    cookTime: 'N/A',
    difficulty: 'N/A',
    servings: 0,
    rating: 0,
    categories: [],
    ingredients: [],
    steps: [],
    notes: '',
    author: 'Unknown',
    createdAt: new Date().toISOString(),
    relatedRecipes: []
  };

  const recipeDetails = {
    cookTime: '25 minutes',
    servings: 8,
    rating: 4.7,
    author: 'Chef Emma',
    createdAt: '2023-09-15',
    ingredients: [
      { name: 'all-purpose flour', amount: '1 1/2 cups', note: 'plus extra for dusting' },
      { name: 'unsalted butter', amount: '1/2 cup', note: 'cold and cubed' },
      { name: 'salt', amount: '1/4 tsp' },
      { name: 'ice water', amount: '3-4 tbsp' },
      { name: 'apples', amount: '4-5', note: 'Granny Smith or Honeycrisp' },
      { name: 'granulated sugar', amount: '1/2 cup' },
      { name: 'brown sugar', amount: '1/4 cup', note: 'packed' },
      { name: 'ground cinnamon', amount: '1 tsp' },
      { name: 'ground nutmeg', amount: '1/4 tsp' },
      { name: 'lemon juice', amount: '1 tbsp' },
      { name: 'cornstarch', amount: '1 tbsp' },
      { name: 'egg', amount: '1', note: 'for egg wash' },
      { name: 'coarse sugar', amount: '1 tbsp', note: 'for sprinkling' },
    ],
    steps: [
      {
        instruction: 'In a large bowl, mix flour and salt. Add cold cubed butter and work it into the flour using a pastry cutter or your fingertips until the mixture resembles coarse crumbs.',
        image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a106?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        tip: 'Keep the butter cold for a flaky crust. If it starts to warm, place the bowl in the refrigerator for a few minutes.'
      },
      {
        instruction: 'Gradually add ice water, 1 tablespoon at a time, stirring with a fork until the dough begins to form. Do not add too much water.',
        tip: 'The dough should hold together when pinched but not be sticky.'
      },
      {
        instruction: 'Form the dough into a disk, wrap in plastic, and refrigerate for at least 1 hour.',
        timerMinutes: 60,
      },
      {
        instruction: 'Preheat oven to 375°F (190°C). Peel, core, and slice the apples thinly. In a bowl, combine the apples, sugars, cinnamon, nutmeg, lemon juice, and cornstarch.',
        image: 'https://images.unsplash.com/photo-1570992127754-d7521d86b8fe?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        tip: 'Mix the apples just before assembling to prevent excess juice from forming.'
      },
      {
        instruction: 'Roll out the dough on a floured surface to a 12-14 inch circle. Transfer to a parchment-lined baking sheet.',
      },
      {
        instruction: 'Arrange the apple mixture in the center of the dough, leaving a 2-inch border. Fold the edges over the filling, pleating as needed.',
        image: 'https://images.unsplash.com/photo-1619522358122-57b809434499?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      },
      {
        instruction: 'Brush the pastry with egg wash and sprinkle with coarse sugar. Bake until the crust is golden and the filling is bubbly, about 25-30 minutes.',
        timerMinutes: 25,
      },
      {
        instruction: 'Let cool slightly before serving. Enjoy warm with vanilla ice cream or whipped cream.',
        image: 'https://images.unsplash.com/photo-1459789187334-bc14b4603b56?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      },
    ],
    notes: 'This dish is best served warm the day it is made. If you want to prepare ahead, you can make the dough up to 2 days in advance.',
    relatedRecipes: [
      {
        id: '2',
        title: 'Blueberry Galette',
        image: 'https://images.unsplash.com/photo-1521089822534-fb02b3a3644f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      },
      {
        id: '3',
        title: 'Classic Apple Pie',
        image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      }
    ]
  };

  const displayRecipe = {
    ...recipe,
    cookTime: recipeDetails.cookTime,
    servings: recipeDetails.servings,
    rating: recipeDetails.rating,
    author: recipeDetails.author,
    createdAt: recipeDetails.createdAt,
    ingredients: recipeDetails.ingredients,
    steps: recipeDetails.steps,
    notes: recipeDetails.notes,
    relatedRecipes: recipeDetails.relatedRecipes
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-wood hover:text-wood-dark transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to recipes
          </Link>
        </div>
        
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {displayRecipe.categories.map((category, index) => (
              <CategoryPill key={index} name={category} />
            ))}
          </div>
          
          <h1 className="recipe-title mb-4">{displayRecipe.title}</h1>
          
          <p className="text-wood-dark mb-6">{displayRecipe.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <div className="flex items-center">
              <Clock size={16} className="mr-1 text-wood" />
              <span>Prep: {displayRecipe.prepTime}</span>
            </div>
            <div className="flex items-center">
              <Utensils size={16} className="mr-1 text-wood" />
              <span>Cook: {displayRecipe.cookTime}</span>
            </div>
            <div className="flex items-center">
              <ChefHat size={16} className="mr-1 text-wood" />
              <span>Difficulty: {displayRecipe.difficulty}</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-1 text-butter-dark" />
              <span>{displayRecipe.rating}/5</span>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            By {displayRecipe.author} • Published on {new Date(displayRecipe.createdAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </header>
        
        <div className="mb-8">
          <img 
            src={displayRecipe.image} 
            alt={displayRecipe.title} 
            className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md" 
          />
        </div>
        
        <RecipeInteractions
          recipeId={displayRecipe.id}
          initialLikes={0}
          initialComments={0}
          initialRating={0}
        />
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <IngredientList servings={displayRecipe.servings} ingredients={displayRecipe.ingredients} />
          </div>
          
          <div className="md:col-span-8">
            <StepByStep steps={displayRecipe.steps} />
            
            {displayRecipe.notes && (
              <div className="mt-8 paper-texture p-6">
                <h3 className="font-handwritten text-2xl text-wood-dark mb-4">Recipe Notes</h3>
                <p className="text-wood-dark">{displayRecipe.notes}</p>
              </div>
            )}
          </div>
        </div>
        
        <RecipeComments recipeId={displayRecipe.id} />
        
        {displayRecipe.relatedRecipes && displayRecipe.relatedRecipes.length > 0 && (
          <section className="mt-16">
            <h3 className="section-title mb-6">You Might Also Like</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {displayRecipe.relatedRecipes.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/recipe/${related.id}`}
                  className="group"
                >
                  <div className="recipe-card overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={related.image} 
                        alt={related.title} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-wood/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-handwritten text-xl text-wood-dark group-hover:text-wood transition-colors duration-200">
                        {related.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default RecipeDetail;
