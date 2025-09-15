import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { User, Settings, Bell, HelpCircle, Shield, LogOut, ChevronRight } from "lucide-react";

export function ProfileScreen() {
  const menuItems = [
    {
      icon: Settings,
      title: "Account Settings",
      description: "Manage your personal information",
      action: "navigate"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Price alerts and service updates",
      action: "navigate",
      badge: "3"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Data protection and login settings",
      action: "navigate"
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help and contact support",
      action: "navigate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border/50">
        <h1 className="text-xl font-semibold text-foreground">Profile</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 shadow-lg border-0 bg-card">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">Ola Nordmann</h2>
              <p className="text-sm text-muted-foreground">ola.nordmann@email.com</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-success/10 text-success border-0">
                  Verified
                </Badge>
                <span className="text-xs text-muted-foreground">Member since Jan 2024</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Savings Summary */}
        <Card className="p-4 bg-gradient-to-br from-success/5 to-accent/5 border-0">
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Your savings this year</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-semibold text-success">kr 1,420</p>
                <p className="text-sm text-muted-foreground">Total saved</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">18%</p>
                <p className="text-sm text-muted-foreground">Average savings</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-4 shadow-sm border-0 bg-card cursor-pointer hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-muted/50 rounded-2xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-0">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* App Info */}
        <Card className="p-4 bg-muted/30 border-0">
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">App Information</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Version</span>
                <span>1.2.3</span>
              </div>
              <div className="flex justify-between">
                <span>Last updated</span>
                <span>March 2024</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Sign Out */}
        <Button 
          variant="outline" 
          className="w-full h-12 border-destructive/20 text-destructive hover:bg-destructive/10 rounded-2xl"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </Button>

        {/* Bottom spacing for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}