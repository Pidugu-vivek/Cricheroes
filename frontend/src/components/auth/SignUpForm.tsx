
import React, { useState } from 'react';
import { useAuth, UserRole } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import RoleSelector from '../../components/shared/RoleSelector';

const SignUpForm: React.FC = () => {
  const { signup, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [selectedRole, setSelectedRole] = useState<UserRole>('player');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    
    await signup(formData.name, formData.email, formData.password, selectedRole);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="••••••••"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full"
          />
        </div>
        
        <div className="space-y-3 pt-2">
          <Label>Select your role</Label>
          <RoleSelector 
            selectedRole={selectedRole} 
            onRoleSelect={setSelectedRole} 
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          'Create Account'
        )}
      </Button>

      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link 
          to="/signin" 
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
