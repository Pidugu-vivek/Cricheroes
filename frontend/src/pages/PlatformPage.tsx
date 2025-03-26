
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Users, Activity, FileText, 
  Shield, Download, BarChart, Zap,
  Map, Globe, CircleUser, Database
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';

const PlatformPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Match Organization",
      description: "Create and manage cricket matches with comprehensive scheduling tools.",
      icon: <Trophy className="h-10 w-10 text-primary" />
    },
    {
      title: "Team Management",
      description: "Form teams, manage players, and track performance statistics.",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "Live Scoring",
      description: "Real-time scoring and updates for matches in progress.",
      icon: <Activity className="h-10 w-10 text-primary" />
    },
    {
      title: "Comprehensive Statistics",
      description: "In-depth player and team statistics with historical data.",
      icon: <BarChart className="h-10 w-10 text-primary" />
    },
    {
      title: "Tournament Creation",
      description: "Organize tournaments with customizable formats and rules.",
      icon: <Trophy className="h-10 w-10 text-primary" />
    },
    {
      title: "Official Certification",
      description: "Get certified as an umpire or scorer through our platform.",
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      title: "Mobile Application",
      description: "Access Cricket Connect on the go with our mobile app.",
      icon: <Download className="h-10 w-10 text-primary" />
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics to improve player and team performance.",
      icon: <Zap className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-cricket-900 via-cricket-800 to-cricket-700 text-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Cricket Connect Platform</h1>
            <p className="text-xl md:text-2xl mb-8 text-cricket-100">
              A comprehensive ecosystem designed to elevate cricket management and participation at all levels
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="bg-cricket-500 hover:bg-cricket-400 text-white"
            >
              Join Cricket Connect
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-lg text-muted-foreground">
              Cricket Connect provides a complete suite of tools for players, 
              organizers, umpires, and cricket enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Solutions */}
      <section className="py-24 bg-gradient-to-br from-cricket-50 to-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Solutions For Every Cricket Role</h2>
            <p className="text-lg text-muted-foreground">
              Cricket Connect provides specialized tools for every participant in the cricket ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <CircleUser className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">For Players</CardTitle>
                <CardDescription>Everything a cricket player needs</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Performance statistics and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Team management and communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Match scheduling and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Professional performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Training resources and coaching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-t-lg">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">For Organizers</CardTitle>
                <CardDescription>Tools to manage cricket events</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Tournament creation and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Team registration and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Venue booking and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Financial tracking and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Sponsor management and integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-t-lg">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-amber-800">For Officials</CardTitle>
                <CardDescription>Umpires and scorers platform</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Official certification and training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Match assignment and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Digital scoring and statistics tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Rule references and decision support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">✓</div>
                    <span>Performance rating and feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cricket-100 text-cricket-900">
                  <Globe className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">Global Cricket Network</h2>
                <p className="text-xl text-muted-foreground">
                  Connect with cricket enthusiasts from around the world and expand your cricket network.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-cricket-100 text-cricket-900 rounded-full mr-3 mt-1">
                      <Map className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Worldwide Coverage</h3>
                      <p className="text-muted-foreground">Active in over 30 countries with growing communities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cricket-100 text-cricket-900 rounded-full mr-3 mt-1">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Driven</h3>
                      <p className="text-muted-foreground">Built by and for cricket enthusiasts at all levels.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cricket-100 text-cricket-900 rounded-full mr-3 mt-1">
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Comprehensive Database</h3>
                      <p className="text-muted-foreground">Access statistics and information from thousands of matches.</p>
                    </div>
                  </li>
                </ul>
                <Button
                  onClick={() => navigate('/signup')}
                  className="bg-cricket-800 text-white hover:bg-cricket-700"
                >
                  Join Our Network
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cricket-900/70 via-cricket-800/40 to-transparent z-10 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">10,000+ Members</h3>
                  <p className="text-lg">Across 30+ Countries</p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                alt="Cricket match"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cricket-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cricket Experience?</h2>
            <p className="text-xl mb-8 text-cricket-100">
              Join thousands of cricket players, organizers, and officials on Cricket Connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate('/signup')}
              >
                Create Free Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-cricket-900"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PlatformPage;
