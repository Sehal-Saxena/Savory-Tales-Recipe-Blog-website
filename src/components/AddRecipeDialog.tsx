import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const recipeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Must be a valid image URL"),
  prepTime: z.string().min(1, "Prep time is required"),
  difficulty: z.string().min(1, "Difficulty is required"),
  categories: z.string().min(1, "At least one category is required"),
});

type RecipeFormData = z.infer<typeof recipeSchema>;

type CompleteRecipe = Omit<RecipeFormData, 'categories'> & {
  id: string;
  categories: string[];
};

interface AddRecipeDialogProps {
  onAddRecipe: (recipe: CompleteRecipe) => void;
}

const AddRecipeDialog = ({ onAddRecipe }: AddRecipeDialogProps) => {
  const form = useForm<RecipeFormData>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      prepTime: "",
      difficulty: "",
      categories: "",
    },
  });

  const onSubmit = (data: RecipeFormData) => {
    const categoriesArray = data.categories.split(",").map(cat => cat.trim());
    
    const newRecipe: CompleteRecipe = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      categories: categoriesArray,
    };
    
    onAddRecipe(newRecipe);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-butter text-wood-dark hover:bg-butter-dark">
          <Plus className="mr-2 h-4 w-4" />
          Add Recipe
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl wood-bg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-handwritten text-wood-dark">Add New Recipe</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter recipe title" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter recipe description" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Image URL</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter image URL" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prepTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Preparation Time</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., 30 minutes" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="difficulty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Difficulty</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Easy, Intermediate, Advanced" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wood-dark">Categories (comma-separated)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Breakfast, Healthy, Quick Dinner" 
                      {...field} 
                      className="border-wood/50 focus:ring-butter"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-butter text-wood-dark hover:bg-butter-dark"
            >
              Add Recipe
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecipeDialog;
