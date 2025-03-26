
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Separator } from '../../components/ui/separator';
import { Badge } from '../../components/ui/badge';
import { toast } from '../../components/ui/use-toast';
import { motion } from 'framer-motion';
import { UserCircle, Mail, Trophy, Calendar, MapPin, Save } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';

const ProfileContent: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const getRoleBadgeColor = () => {
    switch (user.role) {
      case 'player': return 'bg-cricket-500';
      case 'organizer': return 'bg-emerald-500';
      case 'scorer': return 'bg-amber-500';
      case 'admin': return 'bg-violet-500';
      default: return 'bg-cricket-500';
    }
  };

  return (
    <div className="container py-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <Card className="md:col-span-1 glass-card">
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src ="/placeholder.svg" alt={user.name} />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-muted-foreground">{user.email}</p>
              <Badge className={`${getRoleBadgeColor()} mt-2 capitalize text-white`}>
                {user.role}
              </Badge>
              
              <Separator className="my-4" />
              
              <div className="w-full space-y-3">
                <div className="flex items-center">
                  <Trophy className="mr-2 h-4 w-4 text-amber-500" />
                  <span className="text-sm">Member since 2023</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-cricket-500" />
                  <span className="text-sm">Last match: 2 weeks ago</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-emerald-500" />
                  <span className="text-sm">Location: Not specified</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Profile Details Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <UserCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        defaultValue={user.name}
                        className="pl-10" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address" 
                        defaultValue={user.email}
                        className="pl-10" 
                        disabled
                      />
                    </div>
                  </div>
                </div>
                
                {user.role === 'player' && (
                  <>
                    <Separator />
                    <h3 className="text-lg font-medium">Cricket Statistics</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="battingStyle">Batting Style</Label>
                        <Input id="battingStyle" placeholder="e.g. Right-handed" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bowlingStyle">Bowling Style</Label>
                        <Input id="bowlingStyle" placeholder="e.g. Right-arm fast" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="matches">Matches Played</Label>
                        <Input id="matches" type="number" placeholder="0" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="highestScore">Highest Score</Label>
                        <Input id="highestScore" type="number" placeholder="0" />
                      </div>
                    </div>
                  </>
                )}
                
                <Button type="submit" className="w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" /> Save Profile
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileContent;
