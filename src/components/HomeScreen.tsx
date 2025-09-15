import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Logo } from "./Logo";
import { Calendar, Zap, Smartphone, Tv, TrendingDown, Info } from "lucide-react";

interface HomeScreenProps {
  onCategoryClick: (category: string) => void;
}

export function HomeScreen({ onCategoryClick }: HomeScreenProps) {
  const nextPaymentDate = new Date();
  nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
  nextPaymentDate.setDate(15);

  const categories = [
    {
      id: "electricity",
      name: "Electricity",
      icon: Zap,
      amount: "kr 1,280",
      savings: "kr 180",
      status: "Reliable"
    },
    {
      id: "streaming",
      name: "Streaming",
      icon: Tv,
      amount: "kr 320",
      savings: "kr 45",
      status: "Top rated"
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: Smartphone,
      amount: "kr 450",
      savings: "kr 120",
      status: "Fast support"
    }
  ];

  const totalAmount = 2050;
  const totalSavings = 345;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="w-8 h-8 bg-muted rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Monthly Summary Card */}
        <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Next monthly total</h2>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-semibold text-foreground">kr {totalAmount.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">
                Payment on {nextPaymentDate.toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <TrendingDown className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">
                Estimated saving this month: kr {totalSavings}
              </span>
            </div>
          </div>
        </Card>

        {/* Heads Up Banner */}
        <Card className="p-4 bg-warning/10 border-warning/20">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-warning mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Heads up</p>
              <p className="text-sm text-muted-foreground">
                Your electricity price may change next month due to market conditions
              </p>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Your services</h3>
          
          <div className="grid gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="p-4 shadow-md border-0 bg-card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[0.98]"
                  onClick={() => onCategoryClick(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{category.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{category.amount}</span>
                          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-success/10 text-success border-0">
                            {category.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-success">-{category.savings}</p>
                      <p className="text-xs text-muted-foreground">saved</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom spacing for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}