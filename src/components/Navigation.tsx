import { Home, Search, Activity, CreditCard, User } from "lucide-react";

interface NavigationProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
}

export function Navigation({ currentScreen, onScreenChange }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "catalog", label: "Catalog", icon: Search },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 px-6 py-3 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}