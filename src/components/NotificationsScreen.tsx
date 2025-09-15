import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Bell, CheckCircle, AlertCircle, Info, DollarSign, Calendar, Zap, Tv, Phone } from "lucide-react";

export function NotificationsScreen() {
  const notifications = [
    {
      id: "1",
      type: "bill",
      title: "Bill Due Reminder",
      message: "Your monthly bill of $295.00 is due in 3 days (April 15th)",
      timestamp: "2 hours ago",
      read: false,
      priority: "high",
      icon: Calendar,
      actions: ["Pay Now", "View Bill"]
    },
    {
      id: "2", 
      type: "savings",
      title: "New Savings Opportunity",
      message: "Switch to GreenPower Pro and save an additional $8/month on electricity",
      timestamp: "5 hours ago",
      read: false,
      priority: "medium",
      icon: DollarSign,
      actions: ["Learn More", "Switch Now"]
    },
    {
      id: "3",
      type: "service",
      title: "Service Upgrade Available", 
      message: "Netflix has a new plan that might save you $4/month with the same features",
      timestamp: "1 day ago",
      read: true,
      priority: "low",
      icon: Tv,
      actions: ["Compare Plans"]
    },
    {
      id: "4",
      type: "usage",
      title: "High Usage Alert",
      message: "Your electricity usage is 20% higher than usual this month",
      timestamp: "2 days ago", 
      read: true,
      priority: "medium",
      icon: Zap,
      actions: ["View Details", "Get Tips"]
    },
    {
      id: "5",
      type: "payment",
      title: "Payment Successful",
      message: "Your monthly payment of $295.00 has been processed successfully",
      timestamp: "3 days ago",
      read: true,
      priority: "low",
      icon: CheckCircle,
      actions: ["View Receipt"]
    },
    {
      id: "6",
      type: "service",
      title: "Service Interruption", 
      message: "Scheduled maintenance for FiberMax Internet on April 20th, 2-4 AM",
      timestamp: "1 week ago",
      read: true,
      priority: "medium",
      icon: Phone,
      actions: ["Learn More"]
    }
  ];

  const notificationSettings = [
    {
      category: "Bills & Payments",
      icon: DollarSign,
      settings: [
        { name: "Bill due reminders", description: "3 days before due date", enabled: true },
        { name: "Payment confirmations", description: "When payments are processed", enabled: true },
        { name: "Failed payment alerts", description: "Immediate notification", enabled: true },
        { name: "Refund notifications", description: "When refunds are issued", enabled: true }
      ]
    },
    {
      category: "Savings & Offers",
      icon: Bell,
      settings: [
        { name: "Better deal alerts", description: "When cheaper alternatives are found", enabled: true },
        { name: "New service offers", description: "Weekly digest of new services", enabled: false },
        { name: "Seasonal promotions", description: "Special offers and discounts", enabled: true },
        { name: "Price change notifications", description: "When service prices change", enabled: true }
      ]
    },
    {
      category: "Usage & Performance",
      icon: Zap,
      settings: [
        { name: "High usage alerts", description: "When usage exceeds normal patterns", enabled: true },
        { name: "Service outages", description: "When services experience issues", enabled: true },
        { name: "Maintenance notifications", description: "Scheduled service maintenance", enabled: true },
        { name: "Monthly usage reports", description: "End of month usage summary", enabled: false }
      ]
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "bill":
        return Calendar;
      case "savings":
        return DollarSign;
      case "service":
        return Bell;
      case "usage":
        return Zap;
      case "payment":
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === "high") return "text-destructive";
    switch (type) {
      case "savings":
        return "text-success";
      case "payment":
        return "text-success";
      case "service":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning/10 text-warning";
      case "low":
        return "bg-muted/10 text-muted-foreground";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Notifications</h1>
              <p className="text-muted-foreground">Stay updated with important alerts and opportunities.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">Mark All Read</Button>
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 bg-card border-border">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Unread</p>
                <p className="text-xl font-semibold text-foreground">2</p>
              </div>
            </Card>
            <Card className="p-4 bg-card border-border">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-xl font-semibold text-foreground">4</p>
              </div>
            </Card>
            <Card className="p-4 bg-card border-border">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">High Priority</p>
                <p className="text-xl font-semibold text-destructive">1</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Notifications List */}
        <Card className="p-6 bg-card border-border mb-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Recent Notifications</h3>
            <div className="space-y-4">
              {notifications.map((notification) => {
                const Icon = getNotificationIcon(notification.type);
                return (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      notification.read 
                        ? 'border-border bg-muted/20' 
                        : 'border-primary/20 bg-primary/5'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.read ? 'bg-muted' : 'bg-primary/10'
                          }`}>
                            <Icon className={`w-5 h-5 ${getNotificationColor(notification.type, notification.priority)}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className={`font-medium ${notification.read ? 'text-muted-foreground' : 'text-foreground'}`}>
                                {notification.title}
                              </h4>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs px-2 py-0.5 border-0 ${getPriorityColor(notification.priority)}`}
                              >
                                {notification.priority}
                              </Badge>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                            </div>
                            <p className={`text-sm ${notification.read ? 'text-muted-foreground' : 'text-foreground'}`}>
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                          </div>
                        </div>
                      </div>

                      {notification.actions && notification.actions.length > 0 && (
                        <div className="flex items-center space-x-2 ml-13">
                          {notification.actions.map((action, index) => (
                            <Button 
                              key={index}
                              variant={index === 0 ? "default" : "outline"} 
                              size="sm"
                              className={index === 0 ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6 bg-card border-border">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Notification Settings</h3>
            <div className="space-y-8">
              {notificationSettings.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-medium text-foreground">{category.category}</h4>
                    </div>
                    
                    <div className="space-y-3 ml-11">
                      {category.settings.map((setting, settingIndex) => (
                        <div key={settingIndex} className="flex items-center justify-between py-2">
                          <div>
                            <h5 className="text-sm font-medium text-foreground">{setting.name}</h5>
                            <p className="text-xs text-muted-foreground">{setting.description}</p>
                          </div>
                          <Switch 
                            checked={setting.enabled} 
                            onCheckedChange={() => {}}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}