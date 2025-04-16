import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Minus, Plus } from 'lucide-react';

interface Ingredient {
  name: string;
  amount: string;
  note?: string;
}

interface IngredientListProps {
  servings: number;
  ingredients: Ingredient[];
}

const IngredientList = ({ servings, ingredients }: IngredientListProps) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [currentServings, setCurrentServings] = useState<number>(servings);
  
  const toggleChecked = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const adjustServings = (newServings: number) => {
    setCurrentServings(Math.max(1, newServings));
  };
  
  const ratio = currentServings / servings;
  
  return (
    <div className="paper-texture p-6 rounded-lg bg-[#f8f0d8]">
      <div className="mb-6">
        <div className="flex items-center">
          <h3 className="font-handwritten text-3xl text-[#5a3e29] mr-4">Ingredients</h3>
          
          <div className="flex items-center">
            <span className="text-[#5a3e29] mr-2">Servings:</span>
            <div className="flex items-center border border-[#a5855c] rounded-md overflow-hidden">
              <button 
                onClick={() => adjustServings(currentServings - 1)}
                className="px-3 py-1 text-[#5a3e29] hover:bg-[#a5855c]/20 transition-colors"
                aria-label="Decrease servings"
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                className="w-12 text-center border-none focus:outline-none bg-transparent text-[#5a3e29]"
                value={currentServings}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value > 0) {
                    adjustServings(value);
                  }
                }}
                min="1"
              />
              <button 
                onClick={() => adjustServings(currentServings + 1)}
                className="px-3 py-1 text-[#5a3e29] hover:bg-[#a5855c]/20 transition-colors"
                aria-label="Increase servings"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ul className="space-y-5">
        {ingredients.map((ingredient, index) => {
          let amount = ingredient.amount;
          
          if (!isNaN(parseFloat(amount))) {
            const value = parseFloat(amount) * ratio;
            amount = value % 1 === 0 ? value.toString() : value.toFixed(1);
          } else if (amount.match(/^\d+(\.\d+)?/)) {
            const parts = amount.match(/^(\d+(\.\d+)?)(.*)$/);
            if (parts) {
              const value = parseFloat(parts[1]) * ratio;
              const adjustedValue = value % 1 === 0 ? value.toString() : value.toFixed(1);
              amount = `${adjustedValue}${parts[3]}`;
            }
          }
          
          return (
            <li 
              key={index}
              className="flex items-start gap-3"
            >
              <div className="mt-1">
                <Checkbox 
                  id={`ingredient-${index}`}
                  checked={!!checkedItems[index]}
                  onCheckedChange={() => toggleChecked(index)}
                  className="border-[#a5855c] data-[state=checked]:bg-[#a5855c] data-[state=checked]:text-white"
                />
              </div>
              <label 
                htmlFor={`ingredient-${index}`}
                className={`cursor-pointer text-[#5a3e29] ${checkedItems[index] ? 'line-through opacity-70' : ''}`}
              >
                <span className="font-medium">{amount} {ingredient.name}</span>
                {ingredient.note && (
                  <span className="text-[#786245] block ml-0">({ingredient.note})</span>
                )}
              </label>
            </li>
          );
        })}
      </ul>
      
      <button
        className="mt-6 text-sm text-[#a5855c] underline hover:text-[#5a3e29] transition-colors"
        onClick={() => window.print()}
      >
        Print Ingredient List
      </button>
    </div>
  );
};

export default IngredientList;
