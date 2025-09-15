import { useState } from "react";
import { TopNavigation } from "./components/TopNavigation";
import { DashboardScreen } from "./components/DashboardScreen";
import { ServicesScreen } from "./components/ServicesScreen";
import { TransactionsScreen } from "./components/TransactionsScreen";
import { AnalyticsScreen } from "./components/AnalyticsScreen";
import { NotificationsScreen } from "./components/NotificationsScreen";
import { SupportScreen } from "./components/SupportScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { ServicesLibrary } from "./components/ServicesLibrary";
import { ServiceDetailPanel } from "./components/ServiceDetailPanel";

type AppTab =
  | "dashboard"
  | "services"
  | "transactions"
  | "analytics"
  | "notifications"
  | "support"
  | "settings";

interface Service {
  id: string;
  name: string;
  provider: string;
  icon: any;
  status: "active" | "paused" | "pending";
  monthlyRate: number;
  category: string;
  color: string;
}

export default function App() {
  const [currentTab, setCurrentTab] =
    useState<AppTab>("dashboard");
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  const renderScreen = () => {
    // Show service detail panel if a service is selected
    if (selectedService) {
      return (
        <ServiceDetailPanel
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      );
    }

    // Otherwise render the current tab screen
    switch (currentTab) {
      case "dashboard":
        return <DashboardScreen />;
      case "services":
        return <ServicesScreen />;
      case "transactions":
        return <TransactionsScreen />;
      case "analytics":
        return <AnalyticsScreen />;
      case "notifications":
        return <NotificationsScreen />;
      case "support":
        return <SupportScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen steam-gradient">
      {/* Top Navigation - Full Width */}
      <div className="sticky top-0 z-50">
        <TopNavigation
          currentTab={currentTab}
          onTabChange={(tab) => {
            setCurrentTab(tab as AppTab);
            setSelectedService(null); // Clear service selection when changing tabs
          }}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() =>
            setSidebarCollapsed(!sidebarCollapsed)
          }
        />
      </div>

      {/* Main Layout with Sidebar */}
      <div className="flex min-h-[calc(100vh-72px)]">
        {/* Services Library Sidebar - Collapsible and Sticky */}
        <div className="sticky top-18 h-[calc(100vh-72px)]">
          <ServicesLibrary
            onServiceSelect={(service) => {
              // Toggle selection - if same service is clicked, deselect it
              setSelectedService(
                selectedService?.id === service.id
                  ? null
                  : service,
              );
            }}
            selectedService={selectedService}
            collapsed={sidebarCollapsed}
            onNavigateToServices={() => {
              setCurrentTab("services");
              setSelectedService(null);
            }}
            onNavigateToSettings={() => {
              setCurrentTab("settings");
              setSelectedService(null);
            }}
            onNavigateToTransactions={() => {
              setCurrentTab("transactions");
              setSelectedService(null);
            }}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1">{renderScreen()}</div>
      </div>
    </div>
  );
}