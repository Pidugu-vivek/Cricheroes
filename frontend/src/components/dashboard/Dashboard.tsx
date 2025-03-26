
import React from 'react';
import { useAuth, UserRole } from '../../context/AuthContext';
import PlayerDashboard from './PlayerDashboard';
import OrganizerDashboard from './OrganizerDashboard';
import ScorerDashboard from './ScorerDashboard';
import AdminDashboard from './AdminDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import RoleSelector from '../../components/shared/RoleSelector';
import { ShoppingBag, UserCircle, Award, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';

const Dashboard: React.FC = () => {
  const { user, updateUserRole } = useAuth();
  
  if (!user) {
    return null;
  }

  const handleRoleChange = (role: UserRole) => {
    updateUserRole(role);
  };

  const renderDashboardByRole = () => {
    switch (user.role) {
      case 'player':
        return <PlayerDashboard />;
      case 'organizer':
        return <OrganizerDashboard />;
      case 'scorer':
        return <ScorerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <PlayerDashboard />;
    }
  };

  const getRoleIcon = () => {
    switch (user.role) {
      case 'player': return '🏏';
      case 'organizer': return '🏆';
      case 'scorer': return '📋';
      case 'admin': return '⚙️';
      default: return '🏏';
    }
  };

  const getRoleColor = () => {
    switch (user.role) {
      case 'player': return 'bg-gradient-primary text-white';
      case 'organizer': return 'bg-gradient-secondary text-white';
      case 'scorer': return 'bg-gradient-amber text-white';
      case 'admin': return 'bg-gradient-violet text-white';
      default: return 'bg-gradient-primary text-white';
    }
  };

  const getRoleBadgeColor = () => {
    switch (user.role) {
      case 'player': return 'bg-cricket-500';
      case 'organizer': return 'bg-emerald-500';
      case 'scorer': return 'bg-amber-500';
      case 'admin': return 'bg-violet-500';
      default: return 'bg-cricket-500';
    }
  };

  return (
    <div className="container py-8 max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Welcome Header with Enhanced Design */}
        <div className={`rounded-2xl p-6 shadow-lg ${getRoleColor()}`}>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-md text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
              {getRoleIcon()}
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h1>
              <div className="flex items-center mt-1 gap-2">
                <Badge className={`${getRoleBadgeColor()} capitalize text-white`}>{user.role}</Badge>
                <p className="text-white/80">
                  Access your cricket platform features
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role Selector with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle>Change Your Role</CardTitle>
              <CardDescription>
                Select a different role to access different features of the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <RoleSelector 
                selectedRole={user.role} 
                onRoleSelect={handleRoleChange} 
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          {renderDashboardByRole()}
        </motion.div>
        
        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Dressing Room / Merchandise Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="card-gradient-primary border-0 h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                    <ShoppingBag size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">Visit The Dressing Room</h3>
                    <p className="text-white/80 mt-1">Explore official cricket merchandise and equipment</p>
                  </div>
                  <Link to="/merchandise">
                    <Button className="bg-white/20 hover:bg-white/30 text-white">
                      Shop Now
                      <ChevronRight size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="card-gradient-accent border-0 h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                    <UserCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">Complete Your Profile</h3>
                    <p className="text-white/80 mt-1">Update your cricket stats and personal information</p>
                  </div>
                  <Link to="/profile">
                    <Button variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
                      View Profile
                      <ChevronRight size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training Academy Card - Only visible for certain roles */}
          {(user.role === 'player' || user.role === 'scorer') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2"
            >
              <Card className="card-gradient-secondary border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                      <Trophy size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">Cricket Training Academy</h3>
                      <p className="text-white/80 mt-1">Improve your skills with professional coaching and training programs</p>
                    </div>
                    <Link to="/training">
                      <Button className="bg-white/20 hover:bg-white/30 text-white">
                        Learn More
                        <ChevronRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
