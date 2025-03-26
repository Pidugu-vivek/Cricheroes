
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { CalendarIcon, Clock, Award, ChevronRight, Video, Users, BookOpen } from 'lucide-react';
import { toast } from '../../components/ui/use-toast';

interface TrainingProgram {
  id: string;
  title: string;
  category: 'batting' | 'bowling' | 'fielding' | 'fitness';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  date: string;
  slots: number;
  image: string;
  instructor: string;
  description: string;
}

const trainingPrograms: TrainingProgram[] = [
  {
    id: '1',
    title: 'Master Batting Techniques',
    category: 'batting',
    level: 'intermediate',
    duration: '2 hours',
    date: 'Saturdays, 9:00 AM',
    slots: 12,
    image: '/placeholder.svg',
    instructor: 'Coach Smith',
    description: 'Improve your batting skills with our comprehensive coaching program focusing on technique, timing, and shot selection.'
  },
  {
    id: '2',
    title: 'Spin Bowling Workshop',
    category: 'bowling',
    level: 'advanced',
    duration: '1.5 hours',
    date: 'Sundays, 10:00 AM',
    slots: 8,
    image: '/placeholder.svg',
    instructor: 'Coach Johnson',
    description: 'Learn advanced spin bowling techniques, variations, and strategies to deceive batsmen.'
  },
  {
    id: '3',
    title: 'Fielding Fundamentals',
    category: 'fielding',
    level: 'beginner',
    duration: '1 hour',
    date: 'Wednesdays, 5:00 PM',
    slots: 15,
    image: '/placeholder.svg',
    instructor: 'Coach Williams',
    description: 'Master the basics of fielding including catching, throwing, and ground fielding techniques.'
  },
  {
    id: '4',
    title: 'Cricket Fitness Program',
    category: 'fitness',
    level: 'intermediate',
    duration: '1.5 hours',
    date: 'Mondays & Fridays, 7:00 AM',
    slots: 20,
    image: '/placeholder.svg',
    instructor: 'Coach Davis',
    description: 'Build cricket-specific strength, agility, and endurance with our specialized fitness program.'
  },
  {
    id: '5',
    title: 'Advanced Pace Bowling',
    category: 'bowling',
    level: 'advanced',
    duration: '2 hours',
    date: 'Tuesdays, 5:30 PM',
    slots: 10,
    image: '/placeholder.svg',
    instructor: 'Coach Thompson',
    description: 'Perfect your pace bowling with focus on speed, accuracy, and various deliveries like yorkers and bouncers.'
  },
  {
    id: '6',
    title: 'Junior Batting Camp',
    category: 'batting',
    level: 'beginner',
    duration: '1.5 hours',
    date: 'Saturdays, 2:00 PM',
    slots: 15,
    image: '/placeholder.svg',
    instructor: 'Coach Wilson',
    description: 'Introduction to batting fundamentals for young cricketers aged 8-12 years.'
  }
];

const getLevelBadge = (level: string) => {
  switch (level) {
    case 'beginner':
      return <Badge className="bg-emerald-500">Beginner</Badge>;
    case 'intermediate':
      return <Badge className="bg-amber-500">Intermediate</Badge>;
    case 'advanced':
      return <Badge className="bg-cricket-500">Advanced</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'batting':
      return <Video className="h-5 w-5 text-cricket-500" />;
    case 'bowling':
      return <Video className="h-5 w-5 text-violet-500" />;
    case 'fielding':
      return <Video className="h-5 w-5 text-amber-500" />;
    case 'fitness':
      return <Video className="h-5 w-5 text-emerald-500" />;
    default:
      return <Video className="h-5 w-5" />;
  }
};

const TrainingContent: React.FC = () => {
  const { user } = useAuth();
  const [currentTab, setCurrentTab] = useState<string>('all');
  
  const handleEnroll = (programId: string) => {
    toast({
      title: "Enrollment Successful",
      description: "You have been enrolled in the training program.",
    });
  };

  const filteredPrograms = currentTab === 'all' 
    ? trainingPrograms 
    : trainingPrograms.filter(program => program.category === currentTab);

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Hero section */}
        <div className="card-gradient-primary rounded-2xl p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Cricket Training Academy</h1>
            <p className="text-white/90 mb-6">
              Improve your cricket skills with professional coaching and specialized training programs
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Professional Coaches</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Small Group Sessions</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Personalized Training</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Training program tabs and listings */}
        <Tabs defaultValue="all" className="space-y-6" onValueChange={setCurrentTab}>
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="batting">Batting</TabsTrigger>
              <TabsTrigger value="bowling">Bowling</TabsTrigger>
              <TabsTrigger value="fielding">Fielding</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={currentTab} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <motion.div 
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute top-2 right-2 z-10">
                        {getLevelBadge(program.level)}
                      </div>
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {getCategoryIcon(program.category)}
                          <Badge variant="outline" className="ml-2 capitalize">
                            {program.category}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {program.slots} slots
                        </div>
                      </div>
                      <CardTitle className="mt-2">{program.title}</CardTitle>
                      <CardDescription>
                        Instructor: {program.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{program.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{program.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        onClick={() => handleEnroll(program.id)}
                      >
                        Enroll Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default TrainingContent;
