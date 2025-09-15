import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Plus, Star, Zap, Wifi, Tv, Music, Phone, Shield, CheckCircle, Clock, Filter, Grid, List, TrendingUp, Award, Heart, ShoppingCart, Play, Pause, Flame, Crown, Sparkles, Users, Globe } from "lucide-react";

export function ServicesScreen() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showLibrary, setShowLibrary] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", label: "All Services", count: 67, icon: Crown, color: "from-indigo-500 to-purple-500", bgClass: "category-bg-all" },
    { id: "insurance", label: "Insurance", count: 15, icon: Shield, color: "from-yellow-500 to-orange-500", bgClass: "category-bg-insurance" },
    { id: "trending", label: "Trending", count: 8, icon: TrendingUp, color: "from-green-500 to-emerald-500", bgClass: "category-bg-trending" },
    { id: "utilities", label: "Utilities", count: 12, icon: Zap, color: "from-blue-500 to-cyan-500", bgClass: "category-bg-utilities" },
    { id: "entertainment", label: "Entertainment", count: 28, icon: Tv, color: "from-purple-500 to-pink-500", bgClass: "category-bg-entertainment" },
    { id: "mobile", label: "Mobile & Internet", count: 9, icon: Phone, color: "from-indigo-500 to-blue-500", bgClass: "category-bg-mobile" },
    { id: "lifestyle", label: "Lifestyle", count: 14, icon: Heart, color: "from-rose-500 to-pink-500", bgClass: "category-bg-lifestyle" }
  ];

  // Apply background effect based on selected category
  useEffect(() => {
    const appContainer = document.querySelector('.min-h-screen.steam-gradient');
    const sidebar = document.querySelector('.sticky.top-20');
    const navbar = document.querySelector('.sticky.top-0');
    const currentCategory = categories.find(cat => cat.id === selectedCategory);
    
    if (currentCategory) {
      // Apply to main container
      if (appContainer) {
        categories.forEach(cat => {
          appContainer.classList.remove(cat.bgClass);
        });
        appContainer.classList.add(currentCategory.bgClass);
      }
      
      // Apply to sidebar
      if (sidebar) {
        categories.forEach(cat => {
          sidebar.classList.remove(`sidebar-category-${cat.id}`);
        });
        sidebar.classList.add(`sidebar-category-${currentCategory.id}`);
      }
      
      // Apply to navbar
      if (navbar) {
        categories.forEach(cat => {
          navbar.classList.remove(`navbar-category-${cat.id}`);
        });
        navbar.classList.add(`navbar-category-${currentCategory.id}`);
      }
    }
    
    // Cleanup function to remove background classes when component unmounts
    return () => {
      if (appContainer) {
        categories.forEach(cat => {
          appContainer.classList.remove(cat.bgClass);
        });
      }
      if (sidebar) {
        categories.forEach(cat => {
          sidebar.classList.remove(`sidebar-category-${cat.id}`);
        });
      }
      if (navbar) {
        categories.forEach(cat => {
          navbar.classList.remove(`navbar-category-${cat.id}`);
        });
      }
    };
  }, [selectedCategory]);

  const heroPromotion = {
    title: "Ultimate Digital Life Bundle",
    subtitle: "Save up to 45% on premium services",
    description: "Get everything you need for the perfect digital lifestyle - from utilities to entertainment, all in one simple bill.",
    originalPrice: 249.97,
    salePrice: 166.99,
    discount: 33,
    validUntil: "March 31st",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzU2ODI5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  const insuranceDeals = [
    {
      id: "comprehensive-coverage",
      title: "Comprehensive Home & Contents",
      description: "Full protection for your home, contents, and valuable items",
      originalPrice: 89.99,
      salePrice: 59.99,
      discount: 33,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zdXJhbmNlJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE2OTYxNTI0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Best Value",
      rating: 4.9,
      reviews: 3847,
      badge: "Comprehensive"
    },
    {
      id: "family-health-plus",
      title: "Family Health Plus",
      description: "Complete health coverage for the whole family",
      originalPrice: 149.99,
      salePrice: 119.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBpbnN1cmFuY2UlMjBmYW1pbHl8ZW58MXx8fHwxNjk2MTUyNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Family Plan",
      rating: 4.8,
      reviews: 2341,
      badge: "Most Popular"
    },
    {
      id: "auto-premium",
      title: "Auto Insurance Premium",
      description: "Full coverage with roadside assistance and rental car",
      originalPrice: 74.99,
      salePrice: 54.99,
      discount: 27,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwaW5zdXJhbmNlJTIwY2FyfGVufDF8fHx8MTY5NjE1MjQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Auto Coverage",
      rating: 4.9,
      reviews: 1876,
      badge: "Premium"
    },
    {
      id: "travel-protection",
      title: "Travel Protection Plan",
      description: "Global travel insurance with medical and trip coverage",
      originalPrice: 39.99,
      salePrice: 29.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBpbnN1cmFuY2V8ZW58MXx8fHwxNjk2MTUyNDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Travel Ready",
      rating: 4.7,
      reviews: 3210,
      badge: "Worldwide"
    }
  ];

  const marketplaceServices = {
    featured: [
      {
        id: "green-power-pro",
        name: "GreenPower Pro",
        category: "utilities",
        price: 74.99,
        originalPrice: 91.99,
        discount: 18,
        icon: Zap,
        image: "https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBvd2VyfGVufDF8fHx8MTc1NjkxMzE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "100% renewable energy with smart home integration",
        rating: 4.8,
        reviews: 2341,
        tags: ["Renewable", "Smart Grid", "24/7 Support"],
        popular: true,
        savings: 200
      },
      {
        id: "fiber-max-ultra",
        name: "FiberMax Ultra",
        category: "mobile",
        price: 49.99,
        originalPrice: 66.99,
        discount: 25,
        icon: Wifi,
        image: "https://images.unsplash.com/photo-1606814540563-5c02d62fd409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwaW50ZXJuZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyOTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "1Gb/s fiber internet with unlimited data",
        rating: 4.6,
        reviews: 1876,
        tags: ["Fiber", "Unlimited", "Low Latency"],
        trending: true,
        savings: 200
      },
      {
        id: "ultimate-streaming",
        name: "Ultimate Streaming Pack",
        category: "entertainment",
        price: 24.99,
        originalPrice: 41.97,
        discount: 40,
        icon: Tv,
        image: "https://images.unsplash.com/photo-1717295248494-937c3a5655b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBlbnRlcnRhaW5tZW50JTIwbmV0ZmxpeHxlbnwxfHx8fDE3NTY5MTMxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Netflix Premium + Disney+ + HBO Max bundle",
        rating: 4.9,
        reviews: 5432,
        tags: ["4K Streaming", "Multiple Screens", "No Ads"],
        recommended: true,
        savings: 200
      },
      {
        id: "music-unlimited",
        name: "Music Unlimited",
        category: "entertainment",
        price: 10.99,
        originalPrice: 13.49,
        discount: 19,
        icon: Music,
        image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU2ODE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Premium music streaming with offline downloads",
        rating: 4.5,
        reviews: 3210,
        tags: ["High Quality", "Offline", "Playlists"],
        savings: 30
      },
      {
        id: "mobile-pro",
        name: "Mobile Pro Plan",
        category: "mobile", 
        price: 37.50,
        originalPrice: 54.00,
        discount: 31,
        icon: Phone,
        image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMDVnJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY5MTMxODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Unlimited 5G data with international roaming",
        rating: 4.4,
        reviews: 987,
        tags: ["5G", "Unlimited", "Roaming"],
        savings: 200
      },
      {
        id: "home-security",
        name: "SecureHome Pro",
        category: "other",
        price: 24.99,
        originalPrice: 33.49,
        discount: 25,
        icon: Shield,
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzU2ODI5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "24/7 home monitoring with smart alerts",
        rating: 4.6,
        reviews: 1543,
        tags: ["24/7 Monitoring", "Smart Alerts", "Mobile App"],
        savings: 100
      }
    ]
  };

  const activeServices = [
    {
      id: "electricity",
      name: "GreenPower Electricity",
      category: "utilities",
      price: 74.99,
      status: "active",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBvd2VyfGVufDF8fHx8MTc1NjkxMzE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "100% renewable energy",
      nextBilling: "2024-04-15",
      playtime: "Connected for 8 months",
      lastUsed: "Currently active"
    },
    {
      id: "internet",
      name: "FiberMax Internet",
      category: "mobile",
      price: 49.99,
      status: "active",
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1606814540563-5c02d62fd409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwaW50ZXJuZXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjgyOTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "1Gb/s unlimited fiber",
      nextBilling: "2024-04-12",
      playtime: "Connected for 1 year",
      lastUsed: "Last used 5 minutes ago"
    },
    {
      id: "netflix",
      name: "Netflix Premium",
      category: "entertainment",
      price: 16.99,
      status: "active",
      icon: Tv,
      image: "https://images.unsplash.com/photo-1717295248494-937c3a5655b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBlbnRlcnRhaW5tZW50JTIwbmV0ZmxpeHxlbnwxfHx8fDE3NTY5MTMxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "4K streaming for 4 screens",
      nextBilling: "2024-04-08",
      playtime: "156 hours watched",
      lastUsed: "Last used yesterday"
    },
    {
      id: "spotify",
      name: "Spotify Family",
      category: "entertainment",
      price: 13.49,
      status: "active",
      icon: Music,
      image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU2ODE2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "6 accounts, ad-free music",
      nextBilling: "2024-04-20",
      playtime: "487 songs played",
      lastUsed: "Last used 2 hours ago"
    }
  ];

  const renderServiceCard = (service: any, isLibrary = false) => {
    const Icon = service.icon;
    
    if (isLibrary) {
      return (
        <Card key={service.id} className="steam-card p-0 overflow-hidden hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center">
            <div className="relative w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
              <ImageWithFallback
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2">
                <Icon className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-bold text-foreground">€{service.price}/mo</p>
                    <Badge className="bg-success/10 text-success text-xs">Active</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{service.playtime}</span>
                  <span>{service.lastUsed}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 px-4">
                    <Play className="w-3 h-3 mr-2" />
                    Manage
                  </Button>
                  <Button variant="outline" size="sm" className="px-4">
                    <Pause className="w-3 h-3 mr-2" />
                    Pause
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card key={service.id} className="steam-card p-0 overflow-hidden group hover:scale-[1.02] transition-all duration-300">
        <div className="relative">
          <div className="relative h-52 bg-gradient-to-br from-primary/20 to-accent/20">
            <ImageWithFallback
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {service.discount && (
              <div className="absolute top-3 left-3">
                <span className="steam-discount text-sm px-3 py-1">-{service.discount}%</span>
              </div>
            )}
            
            {service.popular && (
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Crown className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {service.trending && (
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
            {service.recommended && (
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Award className="w-3 h-3 mr-1" />
                Recommended
              </Badge>
            )}

            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-5 h-5 text-white" />
                <h3 className="font-bold text-white text-lg">{service.name}</h3>
              </div>
            </div>
          </div>
          
          <div className="p-5 space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{service.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-foreground">{service.rating}</span>
                <span className="text-xs text-muted-foreground">({service.reviews.toLocaleString()})</span>
              </div>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-red-500/10">
                <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {service.tags?.slice(0, 3).map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-0">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                {service.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    €{service.originalPrice}
                  </span>
                )}
                <span className="text-xl font-bold text-foreground">€{service.price}/mo</span>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 text-base">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            
            {service.savings && (
              <div className="text-center pt-2">
                <p className="text-sm text-success font-semibold">
                  💰 Save €{service.savings}/year with this plan
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Marketplace
            </h1>
            <p className="text-lg text-muted-foreground">Discover premium services curated just for you</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant={showLibrary ? "default" : "outline"}
              onClick={() => setShowLibrary(!showLibrary)}
              className={`${showLibrary ? "bg-primary hover:bg-primary/90" : ""} px-6 py-3 text-base`}
            >
              {showLibrary ? "🏪 Marketplace" : "📚 My Library"}
            </Button>
            <div className="flex items-center bg-card border border-border rounded-xl overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none border-0 px-4 py-2"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none border-0 px-4 py-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Library View */}
        {showLibrary && (
          <Card className="steam-card p-8">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">My Library</h2>
                    <p className="text-muted-foreground">{activeServices.length} active services</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 px-6 py-3">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </div>
              
              <div className="grid gap-6">
                {activeServices.map((service) => renderServiceCard(service, true))}
              </div>
            </div>
          </Card>
        )}

        {/* Store View */}
        {!showLibrary && (
          <>
            {/* Category Navigation */}
            <Card className="steam-card p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Browse Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg shadow-primary/20'
                            : 'bg-card border-border hover:border-primary/50 text-foreground hover:bg-card/80'
                        }`}
                      >
                        <div className="space-y-3 text-center">
                          <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${
                            selectedCategory === category.id ? 'bg-white/20' : 'bg-primary/10'
                          }`}>
                            <Icon className={`w-6 h-6 ${selectedCategory === category.id ? 'text-white' : 'text-primary'}`} />
                          </div>
                          <div>
                            <p className={`font-medium text-sm ${selectedCategory === category.id ? 'text-white' : 'text-foreground'}`}>
                              {category.label}
                            </p>
                            <p className={`text-xs ${selectedCategory === category.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                              {category.count} services
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Search and Filters */}
            <Card className="steam-card p-6">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search for services, providers, or categories..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 py-3 bg-input-background border-border text-base"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" className="px-4 py-3">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-input-background border border-border rounded-lg text-foreground"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="savings">Biggest Savings</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Insurance Deals */}
            {selectedCategory === "insurance" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">Insurance Deals</h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1">
                    <Flame className="w-4 h-4 mr-1" />
                    Hot Deals
                  </Badge>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                  {insuranceDeals.map((deal) => (
                    <Card key={deal.id} className="steam-featured p-0 overflow-hidden group">
                      <div className="relative h-48">
                        <ImageWithFallback
                          src={deal.image}
                          alt={deal.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="steam-discount">-{deal.discount}%</span>
                        </div>
                        {deal.badge && (
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <Crown className="w-3 h-3 mr-1" />
                            {deal.badge}
                          </Badge>
                        )}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-xl font-bold text-white mb-2">{deal.title}</h4>
                          <p className="text-sm text-white/90 mb-3">{deal.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-white/70 line-through">€{deal.originalPrice}</span>
                              <span className="text-xl font-bold text-white">€{deal.salePrice}/mo</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-white font-medium">{deal.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Services Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">
                  {categories.find(c => c.id === selectedCategory)?.label || "All Services"}
                </h3>
                <p className="text-muted-foreground">
                  {categories.find(c => c.id === selectedCategory)?.count || 0} services available
                </p>
              </div>
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                  : "grid-cols-1"
              }`}>
                {marketplaceServices.featured
                  .filter((service) => {
                    if (selectedCategory === "all") return true;
                    if (selectedCategory === "featured") return true;
                    return service.category === selectedCategory;
                  })
                  .map((service) => renderServiceCard(service))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}