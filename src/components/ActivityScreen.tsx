import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, ArrowRight, User, CreditCard, Zap, MessageSquare } from "lucide-react";

export function ActivityScreen() {
  const activities = [
    {
      type: "payment",
      icon: CreditCard,
      title: "Payment processed",
      description: "Monthly bill for February 2024",
      amount: "kr 1,950",
      date: "2 hours ago",
      status: "completed"
    },
    {
      type: "switch",
      icon: Zap,
      title: "Service switched",
      description: "Moved to better electricity offer",
      amount: "Save kr 180/month",
      date: "3 days ago",
      status: "completed"
    },
    {
      type: "message",
      icon: MessageSquare,
      title: "Price change notification",
      description: "Your mobile plan price will decrease next month",
      amount: "",
      date: "1 week ago",
      status: "info"
    },
    {
      type: "onboarding",
      icon: User,
      title: "Account setup completed",
      description: "Welcome to Lumo! Your services are now managed",
      amount: "",
      date: "2 weeks ago",
      status: "completed"
    },
    {
      type: "switch",
      icon: Zap,
      title: "Service added",
      description: "Netflix added to your plan",
      amount: "kr 179/month",
      date: "2 weeks ago",
      status: "completed"
    },
    {
      type: "payment",
      icon: CreditCard,
      title: "Payment method added",
      description: "Vipps connected successfully",
      amount: "",
      date: "2 weeks ago",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "info":
        return "bg-primary/10 text-primary";
      case "warning":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border/50">
        <h1 className="text-xl font-semibold text-foreground">Activity</h1>
        <p className="text-sm text-muted-foreground">Your account timeline and updates</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="p-4 shadow-sm border-0 bg-card">
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    activity.status === 'completed' ? 'bg-success/10' :
                    activity.status === 'info' ? 'bg-primary/10' : 'bg-muted/10'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      activity.status === 'completed' ? 'text-success' :
                      activity.status === 'info' ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {activity.amount && (
                          <span className={`text-sm font-medium ${
                            activity.amount.includes('Save') ? 'text-success' : 'text-foreground'
                          }`}>
                            {activity.amount}
                          </span>
                        )}
                        <Badge 
                          variant="secondary" 
                          className={`text-xs px-2 py-0.5 border-0 ${getStatusColor(activity.status)}`}
                        >
                          {activity.status}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary Card */}
        <Card className="mt-6 p-4 bg-muted/30 border-0">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium text-foreground">All systems running smoothly</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your services are monitored 24/7 for better offers and price changes
            </p>
          </div>
        </Card>

        {/* Bottom spacing for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}