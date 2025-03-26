
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { 
  Shield, AlertCircle, FileText, Lock,
  Mail, BookOpen, Calendar, Clock
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const LegalPage: React.FC = () => {
  const legalTabs = [
    {
      id: "terms",
      title: "Terms of Service",
      icon: <FileText className="h-4 w-4" />,
      lastUpdated: "June 15, 2023"
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: <Lock className="h-4 w-4" />,
      lastUpdated: "August 22, 2023"
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      icon: <BookOpen className="h-4 w-4" />,
      lastUpdated: "May 10, 2023"
    },
    {
      id: "licensing",
      title: "Licensing",
      icon: <Shield className="h-4 w-4" />,
      lastUpdated: "March 5, 2023"
    }
  ];

  // Privacy policy FAQ items
  const privacyFaqs = [
    {
      question: "What personal information do you collect?",
      answer: "We collect information that you provide directly to us, such as your name, email address, and cricket-related information when you register for an account. We also collect information about your usage of the platform and device information when you access our services."
    },
    {
      question: "How do you use my information?",
      answer: "We use your information to provide, maintain, and improve our services, to communicate with you about updates and promotions, to personalize your experience, and to analyze usage patterns to enhance the platform."
    },
    {
      question: "Do you share my information with third parties?",
      answer: "We do not sell your personal information. We may share information with service providers who help us operate our platform, with your consent, or as required by law. We may also share anonymized, aggregated data for analytics purposes."
    },
    {
      question: "How do you protect my data?",
      answer: "We implement a variety of security measures to maintain the safety of your personal information, including encryption, secure servers, and regular security assessments. We follow industry best practices for data protection."
    },
    {
      question: "What are my privacy rights?",
      answer: "Depending on your location, you may have rights to access, correct, or delete your personal information. You can update your account information at any time, and you can contact us to exercise any applicable privacy rights."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-cricket-50 to-white">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
                <p className="text-xl text-muted-foreground">
                  Our commitment to transparency and compliance
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center space-x-2 p-2 bg-amber-50 text-amber-800 rounded-md">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Important documents</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="terms" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-muted/50 p-1">
                {legalTabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="flex items-center data-[state=active]:bg-white"
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Terms of Service */}
              <TabsContent value="terms" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Terms of Service</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last updated: June 15, 2023</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="lead mb-6">
                      Welcome to Cricket Connect. By using our platform, you agree to these terms.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
                    <p>
                      By accessing or using Cricket Connect, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not access or use our services.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2. Description of Service</h3>
                    <p>
                      Cricket Connect provides a platform for cricket enthusiasts, players, organizers, and officials to connect, manage teams, organize matches, and access cricket-related resources. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3. User Accounts</h3>
                    <p>
                      To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information during registration and keep your information updated.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4. User Conduct</h3>
                    <p>
                      You agree not to use Cricket Connect for any illegal purpose or in violation of any local, state, national, or international law. You are solely responsible for your conduct and any content you submit, post, or display on our platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5. Content Ownership</h3>
                    <p>
                      Cricket Connect does not claim ownership of the content you submit or post on our platform. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with our services.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">6. Termination</h3>
                    <p>
                      We reserve the right to terminate or suspend your account and access to our services at our discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users or us.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">7. Disclaimer of Warranties</h3>
                    <p>
                      Cricket Connect is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">8. Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, Cricket Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">9. Changes to Terms</h3>
                    <p>
                      We may modify these Terms of Service at any time. We will provide notice of significant changes by posting an announcement on our platform. Your continued use of Cricket Connect after any changes indicates your acceptance of the modified terms.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">10. Contact Information</h3>
                    <p>
                      If you have any questions about these Terms of Service, please contact us at legal@cricketconnect.com.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Reading time: ~10 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Privacy Policy */}
              <TabsContent value="privacy" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Privacy Policy</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last updated: August 22, 2023</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="lead mb-6">
                      This Privacy Policy explains how Cricket Connect collects, uses, and protects your personal information.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1. Information Collection</h3>
                    <p>
                      We collect information you provide directly to us when you create an account, fill out forms, or communicate with us. This may include your name, email address, phone number, profile picture, and cricket-related information. We also collect certain information automatically when you use our platform, including your IP address, device information, and browsing activity.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2. Use of Information</h3>
                    <p>
                      We use your information to provide, maintain, and improve our services, to communicate with you about updates and promotions, to personalize your experience, to analyze usage patterns, and to protect the security and integrity of our platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3. Information Sharing</h3>
                    <p>
                      We do not sell your personal information. We may share information with service providers who help us operate our platform, with your consent, or as required by law. We may also share anonymized, aggregated data for analytics purposes.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h3>
                    <p>
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5. Your Choices</h3>
                    <p>
                      You can update your account information at any time by logging into your account. You can also opt-out of promotional communications by following the instructions in those communications. However, you will continue to receive service-related messages.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h3>
                    <p>
                      Depending on your location, you may have rights to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">7. Children's Privacy</h3>
                    <p>
                      Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">8. Changes to Privacy Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our platform or sending you an email. Your continued use of Cricket Connect after the changes indicates your acceptance of the updated Privacy Policy.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {privacyFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Reading time: ~8 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Cookie Policy */}
              <TabsContent value="cookies" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Cookie Policy</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last updated: May 10, 2023</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="lead mb-6">
                      This Cookie Policy explains how Cricket Connect uses cookies and similar technologies to recognize you when you visit our platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1. What Are Cookies</h3>
                    <p>
                      Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2. Types of Cookies We Use</h3>
                    <p>
                      We use the following types of cookies:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                      <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
                      <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                      <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3. How to Control Cookies</h3>
                    <p>
                      You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4. Third-Party Cookies</h3>
                    <p>
                      We may use third-party services, such as Google Analytics, that place cookies on your device to collect information about your use of our platform. This information is used to compile reports and help us improve our platform. The cookies collect information in an anonymous form, including the number of visitors to the platform, where visitors have come from, and the pages they visited.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5. Changes to Cookie Policy</h3>
                    <p>
                      We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting a notice on our platform. Your continued use of Cricket Connect after the changes indicates your acceptance of the updated Cookie Policy.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Cookie Preferences</h4>
                      <p className="text-sm mb-4">You can adjust your cookie preferences at any time</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Essential Cookies</span>
                          <span className="text-sm text-muted-foreground">Always Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Performance Cookies</span>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Functionality Cookies</span>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Targeting Cookies</span>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="default" size="sm">Save Preferences</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Licensing */}
              <TabsContent value="licensing" className="mt-0">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Licensing Information</h2>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Last updated: March 5, 2023</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="lead mb-6">
                      This document outlines the licensing terms for Cricket Connect platform content and intellectual property.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1. Platform Content</h3>
                    <p>
                      All content provided on Cricket Connect, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of Cricket Connect or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2. User-Generated Content</h3>
                    <p>
                      By posting, uploading, or submitting content to Cricket Connect, you grant us a worldwide, non-exclusive, royalty-free, transferable, and sublicensable license to use, reproduce, distribute, prepare derivative works of, display, and perform your content in connection with our services and business operations.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3. Cricket Connect Brand</h3>
                    <p>
                      The Cricket Connect name, logo, and related trademarks are owned by Cricket Connect. You may not use our trademarks without our prior written permission. This includes using our trademarks in any way that suggests endorsement or affiliation with our platform without our consent.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4. Third-Party Software</h3>
                    <p>
                      Cricket Connect uses third-party software and components, some of which are licensed under open-source licenses. Information about these components and their licenses can be provided upon request.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5. Data Usage</h3>
                    <p>
                      We may collect and use anonymized and aggregated data from our platform for research, analysis, and improvement of our services. This usage is governed by our Privacy Policy.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">6. License Restrictions</h3>
                    <p>
                      You may not:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of Cricket Connect without express written permission.</li>
                      <li>Use our platform for any illegal or unauthorized purpose.</li>
                      <li>Modify, adapt, or hack our platform or modify another website to falsely imply an association with Cricket Connect.</li>
                      <li>Use any automated system to access our platform in a manner that sends more request messages to our servers than a human can reasonably produce in the same period.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">7. Changes to Licensing Terms</h3>
                    <p>
                      We reserve the right to modify these licensing terms at any time. We will provide notice of significant changes by posting an announcement on our platform. Your continued use of Cricket Connect after any changes indicates your acceptance of the modified terms.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Reading time: ~6 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-3 bg-cricket-100 text-cricket-700 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Have Questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our legal documents or need further clarification, our legal team is here to help.
                  </p>
                  <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                    Contact Legal Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LegalPage;
