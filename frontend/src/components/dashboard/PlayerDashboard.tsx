
import React from 'react';
import FeatureCard from '../../components/shared/FeatureCard';
import { Trophy, Activity, Target, BarChart3, Search, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlayerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: 'View Live Scoring',
      description: 'Check real-time scores from ongoing matches',
      onClick: () => navigate('/live-scoring'),
    },
    {
      icon: Target,
      title: 'Access Professional Scorecard',
      description: 'Get detailed statistics and analysis',
      onClick: () => navigate('/scorecard'),
    },
    {
      icon: Trophy,
      title: 'Explore Leaderboards',
      description: 'See top performers across tournaments',
      onClick: () => navigate('/leaderboards'),
    },
    {
      icon: BarChart3,
      title: 'Check Career & Achievements',
      description: 'View your cricket journey and milestones',
      onClick: () => navigate('/career'),
    },
    {
      icon: Activity,
      title: 'Performance Analysis',
      description: 'Use CricInsights for advanced analytics',
      onClick: () => navigate('/analysis'),
    },
    {
      icon: Search,
      title: 'Find Players & Teams',
      description: 'Search for players, teams, umpires, and scorers',
      onClick: () => navigate('/find'),
    },
    {
      icon: Users,
      title: 'Join Cricket Community',
      description: 'Connect with cricket enthusiasts',
      onClick: () => navigate('/community'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Player Dashboard</h2>
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

export default PlayerDashboard;
