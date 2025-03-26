
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, Video, FileText, Download, 
  Search, Bookmark, Play, Clock,
  ExternalLink, CheckCircle2, Tag, Filter
} from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();

  const featuredResources = [
    {
      title: "Mastering the Cricket Bat Grip",
      type: "Video",
      duration: "15 min",
      level: "Beginner",
      icon: <Video className="h-6 w-6 text-red-500" />,
      imgSrc: "https://images.unsplash.com/photo-1595435742656-5272ce002b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Advanced Bowling Techniques",
      type: "Guide",
      duration: "25 pages",
      level: "Advanced",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      imgSrc: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    },
    {
      title: "Cricket Field Positions Explained",
      type: "Interactive",
      duration: "Interactive",
      level: "All Levels",
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      imgSrc: "https://images.unsplash.com/photo-1568290747765-1b4a40f3b4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      title: "Mental Preparation for Match Day",
      type: "Podcast",
      duration: "45 min",
      level: "Intermediate",
      icon: <Play className="h-6 w-6 text-purple-500" />,
      imgSrc: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }
  ];

  const resourceCategories = [
    {
      id: "videos",
      title: "Video Tutorials",
      description: "Learn from visual demonstrations and expert tutorials",
      resources: [
        { title: "Batting Fundamentals for Beginners", duration: "20 min", level: "Beginner" },
        { title: "Fast Bowling Masterclass", duration: "35 min", level: "Advanced" },
        { title: "Wicket-Keeping Techniques", duration: "25 min", level: "Intermediate" },
        { title: "Fielding Drills and Practice", duration: "18 min", level: "All Levels" },
        { title: "Cricket Fitness Training", duration: "40 min", level: "All Levels" },
        { title: "Spin Bowling Variations", duration: "30 min", level: "Advanced" }
      ]
    },
    {
      id: "guides",
      title: "Cricket Guides",
      description: "Comprehensive written guides and ebooks",
      resources: [
        { title: "Cricket Rules and Regulations", pages: "40 pages", level: "Beginner" },
        { title: "Advanced Cricket Strategy", pages: "65 pages", level: "Advanced" },
        { title: "Cricket Equipment Guide", pages: "25 pages", level: "All Levels" },
        { title: "Team Captain's Handbook", pages: "50 pages", level: "Intermediate" },
        { title: "Umpiring Guidelines", pages: "35 pages", level: "Official" },
        { title: "Cricket Scoring Manual", pages: "28 pages", level: "Official" }
      ]
    },
    {
      id: "training",
      title: "Training Programs",
      description: "Structured training programs for skill development",
      resources: [
        { title: "8-Week Batting Improvement Program", duration: "8 weeks", level: "Intermediate" },
        { title: "Fast Bowling Development Course", duration: "12 weeks", level: "Advanced" },
        { title: "Junior Cricket Foundation", duration: "6 weeks", level: "Beginner" },
        { title: "Cricket Fitness Bootcamp", duration: "4 weeks", level: "All Levels" },
        { title: "Spin Bowling Mastery", duration: "10 weeks", level: "Advanced" },
        { title: "Wicket-Keeping Skills Program", duration: "6 weeks", level: "Intermediate" }
      ]
    },
    {
      id: "tools",
      title: "Cricket Tools",
      description: "Digital tools and resources for cricket analysis",
      resources: [
        { title: "Cricket Performance Tracker", type: "Web App", status: "Free" },
        { title: "Bowling Action Analyzer", type: "Mobile App", status: "Premium" },
        { title: "Cricket Strategy Simulator", type: "Web App", status: "Premium" },
        { title: "Cricket Field Designer", type: "Web App", status: "Free" },
        { title: "Match Analysis Tool", type: "Desktop App", status: "Premium" },
        { title: "Cricket Training Planner", type: "Mobile App", status: "Free" }
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-cricket-800 via-cricket-700 to-cricket-600 text-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cricket Resources</h1>
            <p className="text-xl md:text-2xl mb-8 text-cricket-100">
              Comprehensive cricket learning materials, guides, videos, and tools to improve your cricket skills
            </p>
            <div className="max-w-xl mx-auto relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center p-2">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search cricket resources..."
                  className="w-full p-2 pl-3 text-gray-700 focus:outline-none"
                />
                <Button size="sm" className="bg-cricket-600 hover:bg-cricket-500">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Resources</h2>
              <p className="text-muted-foreground">
                Handpicked content to help you improve your cricket skills
              </p>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => {}}
              className="text-cricket-700 hover:text-cricket-800 flex items-center mt-4 md:mt-0"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              View all resources
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={resource.imgSrc}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-sm font-medium flex items-center">
                      {resource.icon}
                      <span className="ml-1">{resource.type}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{resource.duration}</span>
                      <span className="mx-2">•</span>
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{resource.level}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="text-cricket-700 hover:text-cricket-800 p-0 flex items-center"
                    >
                      View Resource
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cricket Resource Library</h2>
            <p className="text-lg text-muted-foreground">
              Browse our extensive collection of cricket learning materials
            </p>
          </div>

          <Tabs defaultValue="videos" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="videos" className="flex items-center">
                  <Video className="mr-2 h-4 w-4" /> Videos
                </TabsTrigger>
                <TabsTrigger value="guides" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" /> Guides
                </TabsTrigger>
                <TabsTrigger value="training" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" /> Training
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Tools
                </TabsTrigger>
              </TabsList>
            </div>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-muted-foreground">
                      Showing {category.resources.length} resources
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {category.resources.map((resource, index) => (
                      <div 
                        key={index} 
                        className="p-4 border border-gray-100 rounded-lg hover:bg-muted/50 transition-colors flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            {resource.duration && (
                              <>
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{resource.duration}</span>
                              </>
                            )}
                            {resource.pages && (
                              <>
                                <FileText className="h-3 w-3 mr-1" />
                                <span>{resource.pages}</span>
                              </>
                            )}
                            {resource.type && (
                              <>
                                <Download className="h-3 w-3 mr-1" />
                                <span>{resource.type}</span>
                              </>
                            )}
                            <span className="mx-2">•</span>
                            <Tag className="h-3 w-3 mr-1" />
                            <span>{resource.level || resource.status}</span>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-cricket-700"
                        >
                          Access
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      View All {category.title}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Resource Access */}
      <section className="py-16 bg-gradient-to-br from-cricket-900 to-cricket-800 text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Premium Resource Access</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cricket-400 mr-3 flex-shrink-0" />
                    <p>Unlimited access to all premium video tutorials</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cricket-400 mr-3 flex-shrink-0" />
                    <p>Downloadable guides and training materials</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cricket-400 mr-3 flex-shrink-0" />
                    <p>Exclusive cricket analysis tools and apps</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cricket-400 mr-3 flex-shrink-0" />
                    <p>Direct access to professional coaching sessions</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cricket-400 mr-3 flex-shrink-0" />
                    <p>Personalized training programs and feedback</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-cricket-500 hover:bg-cricket-400 text-white"
                    onClick={() => navigate('/signup')}
                  >
                    Get Premium Access
                  </Button>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-4">Unlock All Cricket Resources</h2>
              <p className="text-xl text-cricket-100 mb-6">
                Get unlimited access to our complete library of cricket resources, training materials, and coaching sessions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-cricket-400 mb-2">
                    <Video className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-medium mb-1">200+ Videos</h4>
                  <p className="text-cricket-100 text-sm">
                    Professional coaching videos
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-cricket-400 mb-2">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-medium mb-1">150+ Guides</h4>
                  <p className="text-cricket-100 text-sm">
                    Comprehensive learning guides
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-cricket-400 mb-2">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-medium mb-1">50+ Programs</h4>
                  <p className="text-cricket-100 text-sm">
                    Structured training programs
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-cricket-400 mb-2">
                    <Download className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-medium mb-1">25+ Tools</h4>
                  <p className="text-cricket-100 text-sm">
                    Cricket analysis applications
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Cricket Skills?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Access our comprehensive library of cricket resources today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/signup')}
                className="bg-cricket-700 hover:bg-cricket-600 text-white"
              >
                Get Started For Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {}}
              >
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ResourcesPage;
