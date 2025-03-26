
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { motion } from 'framer-motion';
import { Activity, Calendar, RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/button';

interface Match {
  id: string;
  teamA: string;
  teamB: string;
  scoreA: string;
  scoreB: string;
  overs: string;
  status: 'live' | 'upcoming' | 'completed';
  location: string;
  date: string;
}

const LiveScoring: React.FC = () => {
  const [activeMatches, setActiveMatches] = useState<Match[]>([
    {
      id: '1',
      teamA: 'Mumbai Lions',
      teamB: 'Delhi Tigers',
      scoreA: '156/4',
      scoreB: '89/2',
      overs: '12.3/20',
      status: 'live',
      location: 'Mumbai Cricket Stadium',
      date: '2023-08-15'
    },
    {
      id: '2',
      teamA: 'Bangalore Eagles',
      teamB: 'Chennai Kings',
      scoreA: '201/5',
      scoreB: '145/6',
      overs: '15.2/20',
      status: 'live',
      location: 'Bangalore International Stadium',
      date: '2023-08-15'
    },
    {
      id: '3',
      teamA: 'Kolkata Knights',
      teamB: 'Punjab Warriors',
      scoreA: '0/0',
      scoreB: '',
      overs: '0.0/20',
      status: 'upcoming',
      location: 'Kolkata Cricket Ground',
      date: '2023-08-16'
    }
  ]);

  const refreshMatches = () => {
    // Simulate refreshing data
    const updatedMatches = [...activeMatches];
    updatedMatches[0].scoreB = '93/2';
    updatedMatches[0].overs = '13.1/20';
    updatedMatches[1].scoreB = '151/6';
    updatedMatches[1].overs = '16.0/20';
    setActiveMatches(updatedMatches);
  };

  return (
    <div className="container py-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Live Scoring</h1>
            <p className="text-muted-foreground mt-1">
              Follow live cricket matches in real-time
            </p>
          </div>
          <Button onClick={refreshMatches} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="live" className="relative">
              Live Matches
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                {activeMatches.filter((match) => match.status === 'live').length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="live" className="space-y-6">
            {activeMatches
              .filter((match) => match.status === 'live')
              .map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-6">
            {activeMatches
              .filter((match) => match.status === 'upcoming')
              .map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No completed matches today</h3>
              <p className="text-muted-foreground max-w-md">
                Check back later for completed match results and statistics
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <Card className="overflow-hidden border-l-4 border-l-cricket-500">
      <CardHeader className="bg-muted/50 pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            {match.status === 'live' && (
              <span className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Live
              </span>
            )}
            {match.teamA} vs {match.teamB}
          </CardTitle>
          <CardDescription>{match.location}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <h3 className="text-lg font-bold">{match.teamA}</h3>
            <div className="text-2xl font-extrabold mt-2">{match.scoreA}</div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Badge variant={match.status === 'live' ? "default" : "outline"} className="mb-2">
              {match.status === 'live' ? 'In Progress' : match.status === 'upcoming' ? 'Upcoming' : 'Completed'}
            </Badge>
            {match.status === 'live' && (
              <div className="flex items-center mt-2 text-sm">
                <Activity className="h-4 w-4 mr-1 text-cricket-500" />
                <span>{match.overs}</span>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-bold">{match.teamB}</h3>
            <div className="text-2xl font-extrabold mt-2">{match.scoreB || '—'}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 flex justify-between">
        <span className="text-sm text-muted-foreground">{new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
        <Button variant="link" className="text-cricket-500">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default LiveScoring;
