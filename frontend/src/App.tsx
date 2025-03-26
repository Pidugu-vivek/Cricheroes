
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/DashboardPage";
import MerchandisePage from "./pages/MerchandisePage";
import ProfilePage from "./pages/ProfilePage";
import TrainingPage from "./pages/TrainingPage";
import PlatformPage from "./pages/PlatformPage";
import ResourcesPage from "./pages/ResourcesPage";
import LegalPage from "./pages/LegalPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LiveScoringPage from "./pages/LiveScoringPage";
import ScoreCardPage from "./pages/ScoreCardPage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import TournamentsPage from "./pages/TournamentsPage";

const queryClient = new QueryClient();

// Add page transition component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/merchandise" element={<MerchandisePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Player Dashboard Routes */}
              <Route path="/live-scoring" element={<LiveScoringPage />} />
              <Route path="/scorecard" element={<ScoreCardPage />} />
              <Route path="/leaderboards" element={<LeaderboardsPage />} />
              
              {/* Organizer Dashboard Routes */}
              <Route path="/tournaments/manage" element={<TournamentsPage />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
