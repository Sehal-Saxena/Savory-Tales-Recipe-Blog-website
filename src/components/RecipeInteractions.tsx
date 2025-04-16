
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface RecipeInteractionsProps {
  recipeId: string;
  initialLikes?: number;
}

const RecipeInteractions = ({ 
  recipeId, 
  initialLikes = 12, 
}: RecipeInteractionsProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = async () => {
    try {
      if (isLiked) {
        setLikes(prev => prev - 1);
        setIsLiked(false);
      } else {
        setLikes(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update like status",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex items-center gap-6 py-4">
      <Button
        variant="ghost"
        onClick={handleLike}
        className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : ''}`}
      >
        <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
        <span>{likes}</span>
      </Button>
    </div>
  );
};

export default RecipeInteractions;
