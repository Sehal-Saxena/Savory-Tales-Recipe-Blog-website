
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CookingTimerProps {
  minutes: number;
}

const CookingTimer = ({ minutes }: CookingTimerProps) => {
  const initialTime = minutes * 60; // Convert to seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      setCompleted(true);
      toast({
        title: "Timer completed!",
        description: `Your ${minutes} minute timer is done.`,
        duration: 5000,
      });
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isRunning, timeLeft, minutes, toast]);
  
  const toggleTimer = () => {
    setIsRunning(prev => !prev);
    
    if (completed) {
      setTimeLeft(initialTime);
      setCompleted(false);
    }
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
    setCompleted(false);
  };
  
  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate progress percentage
  const progress = Math.round((initialTime - timeLeft) / initialTime * 100);
  
  return (
    <div className={`border rounded-lg p-4 ${
      completed ? 'bg-butter/20 border-butter animate-pulse' : 'bg-parchment-dark/50 border-wood/20'
    }`}>
      <div className="flex items-center mb-3">
        <Clock size={18} className="mr-2 text-wood" />
        <span className="font-medium text-wood-dark">Timer</span>
      </div>
      
      {/* Timer display */}
      <div className="text-center mb-3">
        <span className="font-mono text-3xl font-bold text-wood-dark">
          {formatTime()}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="relative h-2 bg-parchment-dark rounded-full overflow-hidden mb-4">
        <div 
          className={`absolute top-0 left-0 h-full ${
            completed ? 'bg-butter-dark' : 'bg-butter'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="btn-primary flex items-center"
        >
          {isRunning ? 'Pause' : completed ? 'Restart' : 'Start'}
        </button>
        {(isRunning || timeLeft < initialTime) && (
          <button
            onClick={resetTimer}
            className="btn-secondary"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default CookingTimer;
