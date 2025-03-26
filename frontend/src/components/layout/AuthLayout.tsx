
import React from 'react';
import { cn } from '../../lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-16 bg-gradient-to-r from-red-600 to-red-700 shadow-md">
        <div className="container mx-auto px-4 h-full flex items-center">
          <h1 className="text-white text-xl font-bold">Cricket Connect</h1>
        </div>
      </div>
      
      <main className={cn("container mx-auto px-4 py-6", className)}>
        <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
