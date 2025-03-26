
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { motion } from 'framer-motion';
import { Plus, Trash2, Calendar, Edit, Trophy, Users, MapPin, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { toast } from 'sonner';

interface Tournament {
  id: string;
  name: string;
  status: 'upcoming' | 'active' | 'completed' | 'draft';
  startDate: string;
  endDate: string;
  location: string;
  teams: number;
  format: string;
  description: string;
}

const TournamentsManager: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([
    {
      id: '1',
      name: 'Summer Cricket Championship',
      status: 'active',
      startDate: '2023-07-10',
      endDate: '2023-08-20',
      location: 'Mumbai Cricket Stadium',
      teams: 8,
      format: 'T20',
      description: 'Annual summer cricket tournament featuring top local teams.'
    },
    {
      id: '2',
      name: 'Winter Cricket League',
      status: 'upcoming',
      startDate: '2023-12-05',
      endDate: '2024-01-15',
      location: 'Delhi Sports Complex',
      teams: 10,
      format: 'ODI',
      description: 'Winter cricket league with teams from across the country.'
    },
    {
      id: '3',
      name: 'Corporate Cricket Challenge',
      status: 'draft',
      startDate: '2023-09-15',
      endDate: '2023-10-30',
      location: 'Bangalore International Stadium',
      teams: 12,
      format: 'T10',
      description: 'Cricket tournament for corporate teams to compete against each other.'
    },
    {
      id: '4',
      name: 'College Cricket Cup',
      status: 'completed',
      startDate: '2023-03-01',
      endDate: '2023-04-10',
      location: 'Chennai Cricket Ground',
      teams: 16,
      format: 'T20',
      description: 'Cricket tournament for college teams to showcase their talent.'
    }
  ]);

  const deleteTournament = (id: string) => {
    setTournaments(tournaments.filter(tournament => tournament.id !== id));
    toast.success('Tournament deleted successfully');
  };

  const publishTournament = (id: string) => {
    setTournaments(tournaments.map(tournament => 
      tournament.id === id ? { ...tournament, status: 'upcoming' as const } : tournament
    ));
    toast.success('Tournament published successfully');
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
            <h1 className="text-3xl font-bold tracking-tight">Tournament Management</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage cricket tournaments
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Tournament
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Create New Tournament</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new cricket tournament
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Form fields would go here */}
                <p className="text-muted-foreground text-sm">Tournament creation form would be implemented here</p>
              </div>
              <DialogFooter>
                <Button onClick={() => toast.success('Tournament created as draft')}>Create as Draft</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          {['active', 'upcoming', 'draft', 'completed'].map((status) => (
            <TabsContent key={status} value={status} className="space-y-6">
              {tournaments.filter(t => t.status === status).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Trophy className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No {status} tournaments</h3>
                  {status === 'draft' && (
                    <p className="text-muted-foreground max-w-md">
                      Create your first tournament to get started
                    </p>
                  )}
                  {status !== 'draft' && (
                    <p className="text-muted-foreground max-w-md">
                      You don't have any {status} tournaments at the moment
                    </p>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tournaments
                    .filter(tournament => tournament.status === status)
                    .map((tournament) => (
                      <TournamentCard 
                        key={tournament.id}
                        tournament={tournament}
                        onDelete={deleteTournament}
                        onPublish={publishTournament}
                      />
                    ))
                  }
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

interface TournamentCardProps {
  tournament: Tournament;
  onDelete: (id: string) => void;
  onPublish: (id: string) => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onDelete, onPublish }) => {
  const getStatusBadge = (status: Tournament['status']) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'upcoming':
        return <Badge className="bg-blue-500">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-gray-500">Completed</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold">{tournament.name}</CardTitle>
            <CardDescription className="mt-1 flex items-center gap-2">
              {getStatusBadge(tournament.status)}
              <span>{tournament.format}</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {new Date(tournament.startDate).toLocaleDateString()} to {new Date(tournament.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{tournament.teams} Teams</span>
          </div>
          <p className="mt-3 text-muted-foreground">{tournament.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-muted/30 pt-3">
        {tournament.status === 'draft' ? (
          <>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Edit className="h-3 w-3" />
              Edit
            </Button>
            <div className="space-x-2">
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => onDelete(tournament.id)}
                className="flex items-center gap-1"
              >
                <Trash2 className="h-3 w-3" />
                Delete
              </Button>
              <Button 
                size="sm" 
                onClick={() => onPublish(tournament.id)}
                className="flex items-center gap-1"
              >
                <Trophy className="h-3 w-3" />
                Publish
              </Button>
            </div>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Schedule
            </Button>
            <Button size="sm" className="flex items-center gap-1">
              <Trophy className="h-3 w-3" />
              Manage
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default TournamentsManager;
