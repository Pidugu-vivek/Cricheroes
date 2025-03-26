import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Medal } from 'lucide-react';

interface LeaderboardPlayer {
  id: number;
  rank: number;
  name: string;
  team: string;
  value: number;
  matches: number;
  change?: 'up' | 'down' | 'none';
}

const Leaderboards: React.FC = () => {
  const batsmen: LeaderboardPlayer[] = [
    { id: 1, rank: 1, name: 'Rohit Sharma', team: 'Mumbai Lions', value: 435, matches: 8, change: 'none' },
    { id: 2, rank: 2, name: 'Virat Kohli', team: 'Bangalore Eagles', value: 402, matches: 8, change: 'up' },
    { id: 3, rank: 3, name: 'KL Rahul', team: 'Punjab Warriors', value: 398, matches: 9, change: 'down' },
    { id: 4, rank: 4, name: 'Shikhar Dhawan', team: 'Delhi Tigers', value: 365, matches: 8, change: 'up' },
    { id: 5, rank: 5, name: 'MS Dhoni', team: 'Chennai Kings', value: 352, matches: 8, change: 'none' },
    { id: 6, rank: 6, name: 'Faf du Plessis', team: 'Bangalore Eagles', value: 339, matches: 9, change: 'down' },
    { id: 7, rank: 7, name: 'Quinton de Kock', team: 'Mumbai Lions', value: 325, matches: 8, change: 'up' },
    { id: 8, rank: 8, name: 'David Warner', team: 'Delhi Tigers', value: 312, matches: 7, change: 'down' },
    { id: 9, rank: 9, name: 'Jos Buttler', team: 'Rajasthan Royals', value: 289, matches: 7, change: 'up' },
    { id: 10, rank: 10, name: 'Jonny Bairstow', team: 'Punjab Warriors', value: 275, matches: 8, change: 'down' },
  ];

  const bowlers: LeaderboardPlayer[] = [
    { id: 11, rank: 1, name: 'Jasprit Bumrah', team: 'Mumbai Lions', value: 18, matches: 8, change: 'up' },
    { id: 12, rank: 2, name: 'Kagiso Rabada', team: 'Delhi Tigers', value: 17, matches: 8, change: 'none' },
    { id: 13, rank: 3, name: 'Rashid Khan', team: 'Hyderabad Sunrisers', value: 16, matches: 9, change: 'down' },
    { id: 14, rank: 4, name: 'Yuzvendra Chahal', team: 'Rajasthan Royals', value: 15, matches: 8, change: 'up' },
    { id: 15, rank: 5, name: 'Trent Boult', team: 'Mumbai Lions', value: 14, matches: 8, change: 'none' },
    { id: 16, rank: 6, name: 'Mohammed Shami', team: 'Gujarat Titans', value: 14, matches: 9, change: 'down' },
    { id: 17, rank: 7, name: 'Ravindra Jadeja', team: 'Chennai Kings', value: 13, matches: 8, change: 'up' },
    { id: 18, rank: 8, name: 'Pat Cummins', team: 'Kolkata Knights', value: 12, matches: 7, change: 'none' },
    { id: 19, rank: 9, name: 'Bhuvneshwar Kumar', team: 'Hyderabad Sunrisers', value: 11, matches: 7, change: 'down' },
    { id: 20, rank: 10, name: 'T Natarajan', team: 'Hyderabad Sunrisers', value: 10, matches: 8, change: 'up' },
  ];

  const teams: LeaderboardPlayer[] = [
    { id: 21, rank: 1, name: 'Mumbai Lions', team: '', value: 16, matches: 9, change: 'none' },
    { id: 22, rank: 2, name: 'Delhi Tigers', team: '', value: 14, matches: 9, change: 'up' },
    { id: 23, rank: 3, name: 'Chennai Kings', team: '', value: 12, matches: 9, change: 'down' },
    { id: 24, rank: 4, name: 'Bangalore Eagles', team: '', value: 12, matches: 9, change: 'none' },
    { id: 25, rank: 5, name: 'Kolkata Knights', team: '', value: 10, matches: 9, change: 'up' },
    { id: 26, rank: 6, name: 'Punjab Warriors', team: '', value: 8, matches: 9, change: 'down' },
    { id: 27, rank: 7, name: 'Rajasthan Royals', team: '', value: 8, matches: 9, change: 'none' },
    { id: 28, rank: 8, name: 'Hyderabad Sunrisers', team: '', value: 6, matches: 9, change: 'down' },
    { id: 29, rank: 9, name: 'Gujarat Titans', team: '', value: 6, matches: 9, change: 'none' },
    { id: 30, rank: 10, name: 'Lucknow Giants', team: '', value: 4, matches: 9, change: 'down' },
  ];

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
            <h1 className="text-3xl font-bold tracking-tight">Leaderboards</h1>
            <p className="text-muted-foreground mt-1">
              Top performers and rankings across tournaments
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Medal className="h-5 w-5" />
                Most Runs
              </CardTitle>
              <CardDescription className="text-amber-600">Batting leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{batsmen[0].name}</div>
                  <div className="text-sm text-muted-foreground">{batsmen[0].team}</div>
                </div>
                <div className="text-3xl font-bold text-amber-700">{batsmen[0].value}</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Medal className="h-5 w-5" />
                Most Wickets
              </CardTitle>
              <CardDescription className="text-blue-600">Bowling leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{bowlers[0].name}</div>
                  <div className="text-sm text-muted-foreground">{bowlers[0].team}</div>
                </div>
                <div className="text-3xl font-bold text-blue-700">{bowlers[0].value}</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Award className="h-5 w-5" />
                Top Team
              </CardTitle>
              <CardDescription className="text-green-600">Points table leader</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{teams[0].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {teams[0].value} points from {teams[0].matches} matches
                  </div>
                </div>
                <div>
                  <Badge className="bg-green-200 text-green-800 hover:bg-green-300">#1</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tournament Rankings</CardTitle>
            <CardDescription>Current season statistics and rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="batsmen">
              <TabsList className="mb-6">
                <TabsTrigger value="batsmen">Batting</TabsTrigger>
                <TabsTrigger value="bowlers">Bowling</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
              </TabsList>
              
              <TabsContent value="batsmen">
                <LeaderboardTable 
                  data={batsmen} 
                  valueLabel="Runs" 
                  valueHighlight="text-amber-600" 
                />
              </TabsContent>
              
              <TabsContent value="bowlers">
                <LeaderboardTable 
                  data={bowlers} 
                  valueLabel="Wickets" 
                  valueHighlight="text-blue-600" 
                />
              </TabsContent>
              
              <TabsContent value="teams">
                <LeaderboardTable 
                  data={teams} 
                  valueLabel="Points" 
                  teamMode={true}
                  valueHighlight="text-green-600" 
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

interface LeaderboardTableProps {
  data: LeaderboardPlayer[];
  valueLabel: string;
  valueHighlight: string;
  teamMode?: boolean;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ 
  data, 
  valueLabel, 
  valueHighlight,
  teamMode = false
}) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Rank</TableHead>
            <TableHead>Name</TableHead>
            {!teamMode && <TableHead>Team</TableHead>}
            <TableHead className="text-right">{valueLabel}</TableHead>
            <TableHead className="text-right">Matches</TableHead>
            <TableHead className="text-right">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player) => (
            <TableRow key={player.id}>
              <TableCell className="font-medium">
                {player.rank <= 3 ? (
                  <Badge className={`
                    ${player.rank === 1 ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 
                      player.rank === 2 ? 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200' : 
                      'bg-orange-100 text-orange-800 hover:bg-orange-200'}
                  `}>
                    {player.rank}
                  </Badge>
                ) : (
                  player.rank
                )}
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              {!teamMode && <TableCell>{player.team}</TableCell>}
              <TableCell className={`text-right font-bold ${valueHighlight}`}>{player.value}</TableCell>
              <TableCell className="text-right">{player.matches}</TableCell>
              <TableCell className="text-right">
                {player.change === 'up' && <TrendingUp className="ml-auto h-4 w-4 text-green-500" />}
                {player.change === 'down' && <TrendingUp className="ml-auto h-4 w-4 text-red-500 rotate-180" />}
                {player.change === 'none' && <span className="ml-auto inline-block h-4 w-4 text-muted-foreground">-</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboards;
