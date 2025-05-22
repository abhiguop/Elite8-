
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  to,
  href,
  variant = 'default',
  size = 'default',
  className,
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    ghost: "bg-transparent hover:bg-secondary hover:text-secondary-foreground"
  };
  
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-3 py-1 text-sm",
    lg: "h-12 px-8 py-3 text-lg"
  };
  
  const allClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button className={allClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
