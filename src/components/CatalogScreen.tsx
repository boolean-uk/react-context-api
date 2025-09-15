import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Star, Heart } from "lucide-react";

interface CatalogScreenProps {
  category: string;
  onBack: () => void;
}

export function CatalogScreen({ category, onBack }: CatalogScreenProps) {
  const getCategoryData = () => {
    switch (category) {
      case "streaming":
        return {
          title: "Streaming Services",
          subtitle: "Sorted by total monthly cost",
          items: [
            {
              name: "Netflix",
              price: "kr 179",
              quality: "Top rated",
              description: "Premium plan with 4K streaming",
              logo: "🎬",
              savings: "kr 20"
            },
            {
              name: "Disney+",
              price: "kr 89",
              quality: "Reliable",
              description: "Full catalog access",
              logo: "🏰",
              savings: "kr 10"
            },
            {
              name: "HBO Max",
              price: "kr 119",
              quality: "High satisfaction",
              description: "Premium content library",
              logo: "🎭",
              savings: "kr 15"
            },
            {
              name: "Spotify",
              price: "kr 109",
              quality: "Fast support",
              description: "Music and podcasts",
              logo: "🎵",
              savings: "kr 12"
            }
          ]
        };
      case "mobile":
        return {
          title: "Mobile Plans",
          subtitle: "Comparison by data and features",
          items: [
            {
              name: "Telenor Unlimited",
              price: "kr 599",
              quality: "Reliable",
              description: "Unlimited data, 5G coverage",
              logo: "📱",
              data: "Unlimited",
              savings: "kr 100"
            },
            {
              name: "Telia Smart",
              price: "kr 449",
              quality: "Fast support",
              description: "50GB data, good coverage",
              logo: "📶",
              data: "50GB",
              savings: "kr 80"
            },
            {
              name: "Ice Mobile",
              price: "kr 299",
              quality: "High satisfaction",
              description: "20GB data, competitive price",
              logo: "🧊",
              data: "20GB",
              savings: "kr 50"
            }
          ]
        };
      case "electricity":
        return {
          title: "Electricity Offers",
          subtitle: "Current best qualified offers",
          items: [
            {
              name: "Hafslund Spot",
              price: "kr 1,280",
              quality: "Reliable",
              description: "Spot price + 4.9 øre/kWh",
              logo: "⚡",
              savings: "kr 180",
              isCurrent: true
            },
            {
              name: "Fortum Green",
              price: "kr 1,340",
              quality: "Top rated",
              description: "Fixed price, renewable energy",
              logo: "🌱",
              savings: "kr 120"
            },
            {
              name: "Lyse Variable",
              price: "kr 1,420",
              quality: "Fast support",
              description: "Variable price with cap",
              logo: "💡",
              savings: "kr 40"
            }
          ]
        };
      default:
        return { title: "Services", subtitle: "", items: [] };
    }
  };

  const { title, subtitle, items } = getCategoryData();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border/50">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Price First Label */}
      <div className="px-6 py-3 bg-muted/30">
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-0">
            price first
          </Badge>
          <span className="text-sm text-muted-foreground">
            Ranked by total cost and quality
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        {items.map((item, index) => (
          <Card 
            key={index}
            className={`p-4 shadow-md border-0 bg-card transition-all duration-200 hover:shadow-lg ${
              item.isCurrent ? 'ring-2 ring-primary/20 bg-primary/5' : ''
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{item.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      {item.isCurrent && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-success/10 text-success border-0">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.data && (
                      <p className="text-sm text-muted-foreground">Data: {item.data}</p>
                    )}
                  </div>
                </div>
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-semibold text-foreground">{item.price}</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-success/10 text-success border-0">
                    {item.quality}
                  </Badge>
                  {item.savings && (
                    <span className="text-sm text-success font-medium">Save {item.savings}</span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-xl"
                  >
                    Add to watchlist
                  </Button>
                  {!item.isCurrent && (
                    <Button 
                      size="sm"
                      className="rounded-xl bg-primary hover:bg-primary/90"
                    >
                      Confirm
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Bottom spacing for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}