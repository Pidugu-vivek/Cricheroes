
import React from 'react';
import FeatureCard from '../../components/shared/FeatureCard';
import { Award, FileText, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScorerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Award,
      title: 'Enroll in Training Academy',
      description: 'Get certified as a scorer or umpire',
      onClick: () => navigate('/training'),
    },
    {
      icon: ClipboardList,
      title: 'Get Certification & Officiate Matches',
      description: 'Become an official scorer or umpire',
      onClick: () => navigate('/certification'),
    },
    {
      icon: FileText,
      title: 'Submit Match Reports',
      description: 'Complete post-match documentation',
      onClick: () => navigate('/reports'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Scorer/Umpire Dashboard</h2>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary rounded-full p-3">
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium">Become a Certified Official</h3>
            <p className="text-muted-foreground mt-1">Enroll in our training program to become a certified scorer or umpire</p>
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

export default ScorerDashboard;
