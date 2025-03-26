
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Mail, Phone, MapPin, Clock, 
  MessageSquare, Users, Shield, 
  HelpCircle, Send, Check
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../components/ui/use-toast";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
      variant: "default",
    });
    
    // Reset form and show the thank you state
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, department: value }));
  };

  const supportCategories = [
    {
      title: "General Support",
      icon: <HelpCircle className="h-10 w-10 text-blue-500" />,
      description: "Questions about our platform, services, or features."
    },
    {
      title: "Technical Support",
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      description: "Help with technical issues, bugs, or platform errors."
    },
    {
      title: "Account Support",
      icon: <Users className="h-10 w-10 text-green-500" />,
      description: "Assistance with account management, access, or permissions."
    },
    {
      title: "Feedback & Suggestions",
      icon: <MessageSquare className="h-10 w-10 text-amber-500" />,
      description: "Share your ideas to help us improve Cricket Connect."
    },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl mb-8 text-cricket-100">
              We're here to answer your questions and help you make the most of Cricket Connect
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-6 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-cricket-100 text-cricket-700 rounded-full mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our friendly team is here to help
                </p>
                <a href="mailto:support@cricketconnect.com" className="font-medium text-cricket-700 hover:text-cricket-800">
                  support@cricketconnect.com
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-6 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-cricket-100 text-cricket-700 rounded-full mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Mon-Fri from 8am to 5pm
                </p>
                <a href="tel:+1-555-123-4567" className="font-medium text-cricket-700 hover:text-cricket-800">
                  +1 (555) 123-4567
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-6 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-cricket-100 text-cricket-700 rounded-full mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Come say hello at our office
                </p>
                <address className="not-italic font-medium text-cricket-700">
                  123 Cricket Lane<br />
                  Sydney, Australia 2000
                </address>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-lg text-muted-foreground">
              Select a category to help us direct your inquiry to the right team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and we'll get back to you as soon as possible. Your feedback and questions are important to us.
                </p>
                
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Smith" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="How can we help?" 
                          required 
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Support</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="account">Account Support</SelectItem>
                            <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us how we can help you..." 
                        rows={6} 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto bg-cricket-700 hover:bg-cricket-600 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 bg-green-50 rounded-lg text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg h-[600px]"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.060058329605!2d151.20442061640626!3d-33.87035800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x39017f88f64ab80!2sSydney%20Cricket%20Ground!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-cricket-100 text-cricket-700 rounded-full mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Support Hours</h3>
                  <p className="text-muted-foreground">
                    Our team is available during the following hours to assist you
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">General & Technical Support</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Sales & Partnerships</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      All times are shown in Australian Eastern Standard Time (AEST)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-gradient-to-br from-cricket-900 to-cricket-800 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking for Quick Answers?</h2>
            <p className="text-xl mb-8 text-cricket-100">
              Check our frequently asked questions for immediate assistance
            </p>
            
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => window.location.href = '/resources'}
              className="text-cricket-900"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Visit FAQ Page
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
