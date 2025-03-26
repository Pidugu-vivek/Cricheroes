
import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LiveScoring from '../components/livescoring/LiveScoring';
import { motion } from 'framer-motion';

const LiveScoringPage: React.FC = () => {
  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 border-b border-red-200 pb-4">
          <h1 className="text-3xl font-bold text-red-700">Live Scoring</h1>
          <p className="text-gray-600 mt-2">Follow matches in real-time with our live scoring feature</p>
        </div>
        <LiveScoring />
      </motion.div>
    </AuthLayout>
  );
};

export default LiveScoringPage;
