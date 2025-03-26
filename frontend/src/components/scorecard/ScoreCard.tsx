
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '../../components/ui/input';

interface Player {
  id: number;
  name: string;
  runs?: number;
  balls?: number;
  fours?: number;
  sixes?: number;
  strikeRate?: number;
  overs?: string;
  maidens?: number;
  runsGiven?: number;
  wickets?: number;
  economy?: number;
  status?: string;
}

interface MatchScorecard {
  id: string;
  title: string;
  date: string;
  venue: string;
  result: string;
  team1: {
    name: string;
    score: string;
    overs: string;
    batting: Player[];
    bowling: Player[];
  };
  team2: {
    name: string;
    score: string;
    overs: string;
    batting: Player[];
    bowling: Player[];
  };
}

const ScoreCard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const sampleMatch: MatchScorecard = {
    id: '1',
    title: 'Mumbai Lions vs Delhi Tigers',
    date: '2023-08-10',
    venue: 'Mumbai Cricket Stadium',
    result: 'Mumbai Lions won by 25 runs',
    team1: {
      name: 'Mumbai Lions',
      score: '187/6',
      overs: '20',
      batting: [
        { id: 1, name: 'Rohit Sharma (c)', runs: 68, balls: 43, fours: 6, sixes: 4, strikeRate: 158.14, status: 'c Maxwell b Khan' },
        { id: 2, name: 'Ishan Kishan', runs: 32, balls: 21, fours: 4, sixes: 1, strikeRate: 152.38, status: 'b Johnson' },
        { id: 3, name: 'Suryakumar Yadav', runs: 45, balls: 28, fours: 3, sixes: 3, strikeRate: 160.71, status: 'c Smith b Williams' },
        { id: 4, name: 'Hardik Pandya', runs: 22, balls: 14, fours: 1, sixes: 2, strikeRate: 157.14, status: 'not out' },
        { id: 5, name: 'Kieron Pollard', runs: 12, balls: 9, fours: 1, sixes: 1, strikeRate: 133.33, status: 'b Johnson' },
        { id: 6, name: 'Krunal Pandya', runs: 5, balls: 4, fours: 0, sixes: 0, strikeRate: 125.00, status: 'run out' },
        { id: 7, name: 'Jasprit Bumrah', runs: 2, balls: 1, fours: 0, sixes: 0, strikeRate: 200.00, status: 'not out' },
      ],
      bowling: []
    },
    team2: {
      name: 'Delhi Tigers',
      score: '162/8',
      overs: '20',
      batting: [],
      bowling: [
        { id: 8, name: 'Kagiso Rabada', overs: '4.0', maidens: 0, runsGiven: 38, wickets: 1, economy: 9.50 },
        { id: 9, name: 'Anrich Nortje', overs: '4.0', maidens: 0, runsGiven: 42, wickets: 0, economy: 10.50 },
        { id: 10, name: 'Axar Patel', overs: '4.0', maidens: 0, runsGiven: 26, wickets: 2, economy: 6.50 },
        { id: 11, name: 'Ravichandran Ashwin', overs: '4.0', maidens: 0, runsGiven: 29, wickets: 1, economy: 7.25 },
        { id: 12, name: 'Marcus Stoinis', overs: '2.0', maidens: 0, runsGiven: 24, wickets: 1, economy: 12.00 },
        { id: 13, name: 'Amit Mishra', overs: '2.0', maidens: 0, runsGiven: 26, wickets: 1, economy: 13.00 },
      ]
    }
  };

  const [selectedMatch] = useState<MatchScorecard>(sampleMatch);

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
            <h1 className="text-3xl font-bold tracking-tight">Match Scorecard</h1>
            <p className="text-muted-foreground mt-1">
              View detailed match statistics and player performances
            </p>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search matches..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Card>
          <CardHeader className="bg-muted/30">
            <div className="flex flex-col gap-2">
              <CardTitle>{selectedMatch.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span>{new Date(selectedMatch.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{selectedMatch.venue}</span>
                </div>
                <div className="mt-2">
                  <Badge variant="secondary">{selectedMatch.result}</Badge>
                </div>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="mumbai-batting">
              <TabsList className="mb-6">
                <TabsTrigger value="mumbai-batting">{selectedMatch.team1.name} Batting</TabsTrigger>
                <TabsTrigger value="delhi-bowling">{selectedMatch.team2.name} Bowling</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mumbai-batting">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Batter</TableHead>
                        <TableHead className="text-right">R</TableHead>
                        <TableHead className="text-right">B</TableHead>
                        <TableHead className="text-right">4s</TableHead>
                        <TableHead className="text-right">6s</TableHead>
                        <TableHead className="text-right">SR</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedMatch.team1.batting.map((player) => (
                        <TableRow key={player.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{player.name}</div>
                              <div className="text-xs text-muted-foreground">{player.status}</div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">{player.runs}</TableCell>
                          <TableCell className="text-right">{player.balls}</TableCell>
                          <TableCell className="text-right">{player.fours}</TableCell>
                          <TableCell className="text-right">{player.sixes}</TableCell>
                          <TableCell className="text-right">{player.strikeRate}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-muted/30 font-medium">
                        <TableCell>Total</TableCell>
                        <TableCell className="text-right">{selectedMatch.team1.score}</TableCell>
                        <TableCell className="text-right" colSpan={3}>{selectedMatch.team1.overs} overs</TableCell>
                        <TableCell className="text-right">RR: 9.35</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="delhi-bowling">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bowler</TableHead>
                        <TableHead className="text-right">O</TableHead>
                        <TableHead className="text-right">M</TableHead>
                        <TableHead className="text-right">R</TableHead>
                        <TableHead className="text-right">W</TableHead>
                        <TableHead className="text-right">ECON</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedMatch.team2.bowling.map((player) => (
                        <TableRow key={player.id}>
                          <TableCell>
                            <div className="font-medium">{player.name}</div>
                          </TableCell>
                          <TableCell className="text-right">{player.overs}</TableCell>
                          <TableCell className="text-right">{player.maidens}</TableCell>
                          <TableCell className="text-right">{player.runsGiven}</TableCell>
                          <TableCell className="text-right">{player.wickets}</TableCell>
                          <TableCell className="text-right">{player.economy}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ScoreCard;
