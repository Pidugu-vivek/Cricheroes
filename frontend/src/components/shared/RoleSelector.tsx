
import React from 'react';
import { Check, User, Users, FileText, LayoutDashboard } from 'lucide-react';
import { cn } from '../../lib/utils';
import { UserRole } from '../../context/AuthContext';
import { motion } from 'framer-motion';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
}

const roles = [
  {
    id: 'player',
    name: 'Player',
    description: 'Access live scoring, stats, and more',
    icon: User,
  },
  {
    id: 'organizer',
    name: 'Organizer',
    description: 'Manage tournaments and track stats',
    icon: Users,
  },
  {
    id: 'scorer',
    name: 'Scorer/Umpire',
    description: 'Officiate matches and submit reports',
    icon: FileText,
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'Manage the entire platform',
    icon: LayoutDashboard,
  },
];

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onRoleSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {roles.map((role) => {
        const isSelected = selectedRole === role.id as UserRole;
        const Icon = role.icon;
        
        return (
          <div
            key={role.id}
            className={cn(
              'relative rounded-xl p-4 border-2 cursor-pointer transition-all duration-300',
              isSelected
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border hover:border-primary/50'
            )}
            onClick={() => onRoleSelect(role.id as UserRole)}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                'p-2 rounded-full',
                isSelected ? 'bg-primary text-white' : 'bg-secondary text-foreground'
              )}>
                <Icon size={20} />
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium">{role.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{role.description}</p>
              </div>
              
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 bg-primary text-white rounded-full p-1"
                >
                  <Check size={16} />
                </motion.div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoleSelector;
