import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { User, Bell, Shield, CreditCard, Palette, Globe } from "lucide-react";

export function SettingsScreen() {
  const settingsCategories = [
    {
      title: "Account",
      icon: User,
      items: [
        { name: "Profile Information", description: "Update your personal details", action: "edit" },
        { name: "Email Preferences", description: "Manage email notifications", action: "edit" },
        { name: "Account Security", description: "Two-factor authentication, password", action: "edit" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { name: "Bill Reminders", description: "Get notified before due dates", toggle: true, enabled: true },
        { name: "Price Changes", description: "Alert when service prices change", toggle: true, enabled: true },
        { name: "New Offers", description: "Notifications about better deals", toggle: true, enabled: false }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { name: "Data Export", description: "Download your account data", action: "download" },
        { name: "Privacy Settings", description: "Control data sharing preferences", action: "edit" },
        { name: "Connected Apps", description: "Manage third-party integrations", badge: "2 connected" }
      ]
    },
    {
      title: "Billing",
      icon: CreditCard,
      items: [
        { name: "Payment Methods", description: "Manage cards and bank accounts", action: "edit" },
        { name: "Billing Address", description: "Update your billing information", action: "edit" },
        { name: "Invoice History", description: "View and download past invoices", action: "view" }
      ]
    },
    {
      title: "Preferences",
      icon: Palette,
      items: [
        { name: "Theme", description: "Dark mode is currently enabled", toggle: true, enabled: true },
        { name: "Currency", description: "EUR (€)", action: "select" },
        { name: "Language", description: "English", action: "select" }
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-3">Settings</h1>
          <p className="text-lg text-muted-foreground">Manage your account preferences and settings.</p>
        </div>

        <div className="space-y-8">
          {settingsCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-medium text-foreground">{item.name}</h4>
                            {item.badge && (
                              <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-0">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          {item.toggle ? (
                            <Switch 
                              checked={item.enabled} 
                              onCheckedChange={() => {}}
                            />
                          ) : (
                            <Button variant="outline" size="sm">
                              {item.action === 'edit' ? 'Edit' :
                               item.action === 'download' ? 'Download' :
                               item.action === 'view' ? 'View' :
                               item.action === 'select' ? 'Change' : 'Manage'}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Account Actions */}
        <Card className="mt-8 p-6 bg-card border-border">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Account Actions</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="text-warning border-warning/20 hover:bg-warning/10">
                Deactivate Account
              </Button>
              <Button variant="outline" className="text-destructive border-destructive/20 hover:bg-destructive/10">
                Delete Account
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              These actions are permanent and cannot be undone. Your data will be deleted according to our privacy policy.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}