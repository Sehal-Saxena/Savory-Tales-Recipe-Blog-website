
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
}

interface RecipeCommentsProps {
  recipeId: string;
}

const RecipeComments = ({ recipeId }: RecipeCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      content: 'This recipe turned out amazing! My whole family loved it.',
      created_at: '2025-04-01T12:00:00Z',
      user_id: 'user-1'
    },
    {
      id: '2',
      content: 'Great flavors! I added a bit more garlic and it was perfect.',
      created_at: '2025-04-02T15:30:00Z',
      user_id: 'user-2'
    },
    {
      id: '3',
      content: 'Simple and delicious, will make again!',
      created_at: '2025-04-03T18:45:00Z', 
      user_id: 'user-3'
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;

    try {
      // Simulate adding a new comment
      const newCommentObj = {
        id: `${comments.length + 1}`,
        content: newComment.trim(),
        created_at: new Date().toISOString(),
        user_id: 'current-user'
      };
      
      setComments([newCommentObj, ...comments]);
      setNewComment('');
      
      toast({
        title: "Comment posted",
        description: "Your comment has been added successfully!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not post comment",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="mt-8">
      <h3 className="font-handwritten text-2xl text-wood-dark mb-4">Comments</h3>
      
      <div className="space-y-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts about this recipe..."
          className="w-full"
        />
        <Button onClick={handleSubmitComment} className="w-full">
          Post Comment
        </Button>
      </div>

      <div className="mt-6 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-parchment rounded-lg">
            <p className="text-wood-dark">{comment.content}</p>
            <div className="text-sm text-muted-foreground mt-2">
              {new Date(comment.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeComments;
