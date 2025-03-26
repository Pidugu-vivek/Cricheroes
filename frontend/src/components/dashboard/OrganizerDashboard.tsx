
import React from 'react';
import FeatureCard from '../../components/shared/FeatureCard';
import { Calendar, BarChart2, Eye, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrganizerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Organize & Manage Tournaments',
      description: 'Create and manage cricket tournaments',
      onClick: () => navigate('/tournaments/manage'),
    },
    {
      icon: BarChart2,
      title: 'Track Tournament Stats & Revenue',
      description: 'Monitor statistics and financial data',
      onClick: () => navigate('/tournaments/stats'),
    },
    {
      icon: Eye,
      title: 'View Reported Teams',
      description: 'Review teams that have been reported',
      onClick: () => navigate('/tournaments/reports'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Organizer Dashboard</h2>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary rounded-full p-3">
            <Trophy size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium">Create Your First Tournament</h3>
            <p className="text-muted-foreground mt-1">Start organizing cricket tournaments and manage them efficiently</p>
          </div>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={feature.onClick}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OrganizerDashboard;
