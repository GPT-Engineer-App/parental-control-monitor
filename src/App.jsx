import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Users, BarChart, CheckSquare, Calendar, FileText, Box, History, MapPin, Edit, Mail } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
import Contacts from "./pages/Contacts.jsx";
import SalesTracking from "./pages/SalesTracking.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import CalendarIntegration from "./pages/CalendarIntegration.jsx";
import ReportingAnalytics from "./pages/ReportingAnalytics.jsx";
import ProductCatalog from "./pages/ProductCatalog.jsx";
import CustomerInteractionHistory from "./pages/CustomerInteractionHistory.jsx";
import GeoLocation from "./pages/GeoLocation.jsx";
import NoteTaking from "./pages/NoteTaking.jsx";
import EmailIntegration from "./pages/EmailIntegration.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Sales Tracking",
    to: "/sales-tracking",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    title: "Task Management",
    to: "/task-management",
    icon: <CheckSquare className="h-4 w-4" />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Reporting & Analytics",
    to: "/reporting-analytics",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Product Catalog",
    to: "/product-catalog",
    icon: <Box className="h-4 w-4" />,
  },
  {
    title: "Customer Interaction History",
    to: "/customer-interaction-history",
    icon: <History className="h-4 w-4" />,
  },
  {
    title: "Geo-location",
    to: "/geo-location",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    title: "Note Taking",
    to: "/note-taking",
    icon: <Edit className="h-4 w-4" />,
  },
  {
    title: "Email Integration",
    to: "/email-integration",
    icon: <Mail className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="sales-tracking" element={<SalesTracking />} />
              <Route path="task-management" element={<TaskManagement />} />
              <Route path="calendar" element={<CalendarIntegration />} />
              <Route path="reporting-analytics" element={<ReportingAnalytics />} />
              <Route path="product-catalog" element={<ProductCatalog />} />
              <Route path="customer-interaction-history" element={<CustomerInteractionHistory />} />
              <Route path="geo-location" element={<GeoLocation />} />
              <Route path="note-taking" element={<NoteTaking />} />
              <Route path="email-integration" element={<EmailIntegration />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;