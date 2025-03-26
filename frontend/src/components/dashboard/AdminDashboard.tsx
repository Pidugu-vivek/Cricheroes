
import React from 'react';
import FeatureCard from '../../components/shared/FeatureCard';
import { CheckCircle, UserX, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: CheckCircle,
      title: 'Approve/Reject Tournaments',
      description: 'Review tournament applications',
      onClick: () => navigate('/admin/tournaments'),
    },
    {
      icon: UserX,
      title: 'Manage Reports & Ban Users',
      description: 'Review user reports and take action',
      onClick: () => navigate('/admin/reports'),
    },
    {
      icon: BarChart,
      title: 'Monitor Overall Stats',
      description: 'View platform-wide statistics',
      onClick: () => navigate('/admin/stats'),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary rounded-full p-3">
            <CheckCircle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium">Platform Management</h3>
            <p className="text-muted-foreground mt-1">You have administrator privileges to manage the entire platform</p>
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

export default AdminDashboard;
