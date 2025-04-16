
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryPillProps {
  name: string;
  href?: string;
}

const CategoryPill = ({ name, href }: CategoryPillProps) => {
  const content = (
    <span className="inline-block px-3 py-1 rounded-full bg-butter text-wood-dark text-sm font-medium hover:bg-butter-dark transition-colors duration-200">
      {name}
    </span>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }
  
  return content;
};

export default CategoryPill;
