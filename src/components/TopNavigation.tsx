import { Bell, User, Menu, ChevronLeft, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

interface TopNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export function TopNavigation({ currentTab, onTabChange, sidebarCollapsed, onToggleSidebar }: TopNavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "services", label: "Services" },
    { id: "transactions", label: "Transactions" },
    { id: "analytics", label: "Analytics" },
    { id: "support", label: "Support" },
    { id: "settings", label: "Settings" }
  ];

  return (
    <div className="navbar-integrated border-b border-border/30">
      <div className="flex items-center">
        {/* Left: Lumo Logo Section with Sidebar Toggle */}
        <div className={`${sidebarCollapsed ? 'w-20' : 'w-80'} px-4 py-4 border-r border-border/30 flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} transition-all duration-300`}>
          <div className={`flex items-center ${sidebarCollapsed ? 'flex-col space-y-2' : 'space-x-3'}`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
              className="p-2 hover:bg-white/10 hover:scale-105 transition-all duration-300 rounded-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {sidebarCollapsed ? (
                <PanelLeftOpen className="w-5 h-5 text-white group-hover:text-primary transition-all duration-200 relative z-10" />
              ) : (
                <PanelLeftClose className="w-5 h-5 text-white group-hover:text-primary transition-all duration-200 relative z-10" />
              )}
            </Button>
            <Logo className={sidebarCollapsed ? 'text-xs' : ''} />
          </div>
        </div>
        
        {/* Center: Navigation */}
        <div className="flex-1 flex items-center justify-center px-4 py-4">
          <nav className="flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-6 py-3 text-base font-semibold transition-all duration-300 rounded-lg relative overflow-hidden whitespace-nowrap ${
                  currentTab === item.id 
                    ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 scale-105' 
                    : 'text-muted-foreground hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                {currentTab === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Right: User Actions */}
        <div className="px-4 py-4 flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-3 relative hover:bg-white/10 transition-all duration-200 hover:scale-110"
            onClick={() => onTabChange("notifications")}
          >
            <Bell className="w-6 h-6 text-muted-foreground hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => onTabChange("settings")}
            className="flex items-center space-x-2 px-3 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 hover:scale-105"
          >
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-3 h-3 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Ola Nordmann</p>
              <p className="text-xs text-white/70">ola.nordmann@lumolink.net</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}