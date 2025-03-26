
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { Trophy, Users, User, FileText, Activity, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cricket-50 to-cricket-100 opacity-20" />
        
        <div className="container px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              The Ultimate Platform for Cricket Enthusiasts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Connect, play, and celebrate the spirit of cricket with players, organizers, and officials around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Button size="lg" onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button size="lg" onClick={() => navigate('/signup')}>
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/signin')}>
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features for Every Cricket Enthusiast</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're a player, organizer, scorer, or umpire, our platform has something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="feature-card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <User size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Players</h3>
                <p className="text-muted-foreground">
                  Access live scoring, professional scorecards, leaderboards, and career statistics.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="feature-card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <Trophy size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Organizers</h3>
                <p className="text-muted-foreground">
                  Create and manage tournaments, track stats and revenue, and view reported teams.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="feature-card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <FileText size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Scorers/Umpires</h3>
                <p className="text-muted-foreground">
                  Get certified, officiate matches, and submit detailed match reports.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="feature-card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Admins</h3>
                <p className="text-muted-foreground">
                  Approve tournaments, manage user reports, and monitor platform statistics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Official Cricket Merchandise</h2>
            <p className="text-lg text-muted-foreground">
              Discover premium cricket equipment and apparel in The Dressing Room
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block p-3 bg-white/80 rounded-xl">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">The Dressing Room</h3>
                <p className="text-muted-foreground">
                  Browse our collection of high-quality cricket gear, jerseys, and accessories for players at all levels.
                </p>
                <Button size="lg" onClick={() => navigate('/merchandise')}>
                  Shop Now
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/80 rounded-xl p-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Cricket Jersey" className="max-h-full" />
                </div>
                <div className="aspect-square bg-white/80 rounded-xl p-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Cricket Bat" className="max-h-full" />
                </div>
                <div className="aspect-square bg-white/80 rounded-xl p-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Cricket Ball" className="max-h-full" />
                </div>
                <div className="aspect-square bg-white/80 rounded-xl p-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Cricket Helmet" className="max-h-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Join Our Cricket Community</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Connect with players, teams, umpires, and scorers from around the world. Share your passion for the game and grow together.
                </p>
                <div className="flex items-center space-x-4">
                  <Users size={48} className="text-primary" />
                  <div>
                    <p className="text-2xl font-bold">10,000+</p>
                    <p className="text-muted-foreground">Cricket enthusiasts</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="feature-card p-8 h-full"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Tournaments</h3>
                      <p className="text-muted-foreground">
                        Join or create cricket tournaments at any level of play
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Teams</h3>
                      <p className="text-muted-foreground">
                        Form teams and compete against others in your area
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <Activity size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Stats & Analysis</h3>
                      <p className="text-muted-foreground">
                        Get detailed insights into your cricket performance
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Cricket Experience?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of cricket enthusiasts on our platform today.
            </p>
            
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate(isAuthenticated ? '/dashboard' : '/signup')}
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="/platform" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="/platform" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-primary">News</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/resources" className="text-muted-foreground hover:text-primary">Help Center</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-primary">Tutorials</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/legal" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="/legal" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
                <li><a href="/legal" className="text-muted-foreground hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary">Support</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary">Social Media</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Cricket Connect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
};

export default Index;
