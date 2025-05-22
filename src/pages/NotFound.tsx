
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/ui-custom/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg animate-fade-in">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-foreground mb-6">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" size="lg">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
