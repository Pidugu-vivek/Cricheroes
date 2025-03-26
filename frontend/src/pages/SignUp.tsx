
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';
import { useAuth } from '../context/AuthContext';

const SignUp: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout 
      title="Create an Account" 
      subtitle="Join our cricket community today"
    >
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
