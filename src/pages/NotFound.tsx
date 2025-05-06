
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 - Page Not Found | Khush Patel';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center container-pad text-center">
      <div className="mb-8">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <a href="/">Return Home</a>
        </Button>
      </div>

      <div className="w-full max-w-md mx-auto mt-12">
        <div className="h-px bg-border w-full mb-8"></div>
        <p className="text-sm text-muted-foreground">
          If you believe this is an error, please contact me at{' '}
          <a
            href="mailto:KhushPatel2883@gmail.com"
            className="text-primary underline hover:no-underline"
          >
            Khushbtech20@gmail.com
          </a>
        </p>
      </div>

    </div>
  );
};

export default NotFound;
