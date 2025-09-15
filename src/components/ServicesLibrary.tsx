import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Zap, 
  Wifi, 
  Play, 
  Music, 
  Phone, 
  Tv, 
  Home,
  Settings,
  ChevronDown,
  ChevronRight,
  Circle,
  Plus,
  CreditCard
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  provider: string;
  icon: any;
  status: 'active' | 'paused' | 'pending';
  monthlyRate: number;
  category: string;
  color: string;
}

interface ServicesLibraryProps {
  onServiceSelect: (service: Service) => void;
  selectedService?: Service | null;
  collapsed: boolean;
  onNavigateToServices?: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToTransactions?: () => void;
}

export function ServicesLibrary({ onServiceSelect, selectedService, collapsed, onNavigateToServices, onNavigateToSettings, onNavigateToTransactions }: ServicesLibraryProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['utilities', 'entertainment']);

  const services: Service[] = [
    {
      id: 'electricity',
      name: 'Electricity',
      provider: 'Tibber',
      icon: Zap,
      status: 'active',
      monthlyRate: 82,
      category: 'utilities',
      color: '#F59E0B'
    },
    {
      id: 'internet',
      name: 'Internet',
      provider: 'Telenor',
      icon: Wifi,
      status: 'active',
      monthlyRate: 59,
      category: 'utilities',
      color: '#06B6D4'
    },
    {
      id: 'mobile',
      name: 'Mobile',
      provider: 'Telia',
      icon: Phone,
      status: 'active',
      monthlyRate: 36,
      category: 'utilities',
      color: '#8B5CF6'
    },
    {
      id: 'netflix',
      name: 'Netflix',
      provider: 'Netflix',
      icon: Play,
      status: 'active',
      monthlyRate: 16,
      category: 'entertainment',
      color: '#EF4444'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      provider: 'Spotify',
      icon: Music,
      status: 'active',
      monthlyRate: 11,
      category: 'entertainment',
      color: '#10B981'
    },
    {
      id: 'hbo',
      name: 'HBO Max',
      provider: 'HBO Max',
      icon: Tv,
      status: 'paused',
      monthlyRate: 0,
      category: 'entertainment',
      color: '#6366F1'
    },
    {
      id: 'insurance',
      name: 'Home Insurance',
      provider: 'If Forsikring',
      icon: Home,
      status: 'active',
      monthlyRate: 22,
      category: 'other',
      color: '#F97316'
    }
  ];

  const categories = [
    { id: 'utilities', name: 'Utilities & Mobile', icon: Zap },
    { id: 'entertainment', name: 'Entertainment', icon: Play },
    { id: 'other', name: 'Other Services', icon: Settings }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getServicesByCategory = (categoryId: string) => {
    return services.filter(service => service.category === categoryId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success';
      case 'paused': return 'text-warning';
      case 'pending': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success';
      case 'paused': return 'bg-warning';
      case 'pending': return 'bg-muted-foreground';
      default: return 'bg-muted-foreground';
    }
  };

  if (collapsed) {
    return (
      <div className="w-20 integrated-sidebar flex flex-col min-h-full transition-all duration-300">
        {/* Collapsed Header */}
        <div className="p-4 border-b border-border bg-gradient-to-r from-muted/10 to-muted/5">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Circle className="w-4 h-4 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-foreground">{services.filter(s => s.status === 'active').length}</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </div>
        </div>

        {/* Collapsed Services - Show only icons */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 space-y-2">
            {services.filter(s => s.status === 'active').map((service) => {
              const ServiceIcon = service.icon;
              const isSelected = selectedService?.id === service.id;
              
              return (
                <Button
                  key={service.id}
                  variant="ghost"
                  onClick={() => onServiceSelect(service)}
                  className={`w-full aspect-square p-2 hover:bg-muted/20 transition-all duration-200 group ${
                    isSelected ? 'bg-primary/10 border border-primary/30' : ''
                  }`}
                  title={`${service.name} - ${service.provider}`}
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}30` }}
                  >
                    <ServiceIcon className="w-4 h-4" style={{ color: service.color }} />
                  </div>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Collapsed Action Buttons */}
        <div className="p-2 space-y-2 border-t border-border">
          <Button
            variant="ghost"
            onClick={onNavigateToServices}
            className="w-full aspect-square p-2 hover:bg-primary/20 transition-all duration-200 group"
            title="Add Services"
          >
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Plus className="w-4 h-4 text-primary" />
            </div>
          </Button>
          
          <Button
            variant="ghost"
            onClick={onNavigateToTransactions}
            className="w-full aspect-square p-2 hover:bg-success/20 transition-all duration-200 group"
            title="Pay Now"
          >
            <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <CreditCard className="w-4 h-4 text-success" />
            </div>
          </Button>
          
          <Button
            variant="ghost"
            onClick={onNavigateToSettings}
            className="w-full aspect-square p-2 hover:bg-muted/20 transition-all duration-200 group"
            title="Settings"
          >
            <div className="w-8 h-8 bg-muted/20 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Settings className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </div>
          </Button>
        </div>

        {/* Collapsed Total */}
        <div className="p-4 border-t border-border bg-gradient-to-r from-muted/10 to-muted/5">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="text-sm font-bold text-foreground">
              €{services.filter(s => s.status === 'active').reduce((sum, s) => sum + s.monthlyRate, 0)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 integrated-sidebar flex flex-col h-full transition-all duration-300">
      {/* Services Header - Fixed */}
      <div className="flex-shrink-0 p-4 border-b border-border bg-gradient-to-r from-muted/10 to-muted/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Circle className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">My Services</h3>
              <p className="text-xs text-muted-foreground">{services.filter(s => s.status === 'active').length} active services</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Monthly Total</p>
            <p className="text-lg font-bold text-foreground">
              €{services.filter(s => s.status === 'active').reduce((sum, s) => sum + s.monthlyRate, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Services List - Scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
        <div className="p-3 space-y-2">
          {categories.map((category) => {
            const categoryServices = getServicesByCategory(category.id);
            const isExpanded = expandedCategories.includes(category.id);
            const CategoryIcon = category.icon;

            if (categoryServices.length === 0) return null;

            return (
              <div key={category.id} className="space-y-1">
                <Button
                  variant="ghost"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full justify-start p-2 h-auto text-sm hover:bg-muted/20 transition-colors group"
                >
                  <div className="flex items-center space-x-2 w-full">
                    {isExpanded ? (
                      <ChevronDown className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                    <CategoryIcon className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="ml-auto text-xs bg-muted/30">
                      {categoryServices.filter(s => s.status === 'active').length}
                    </Badge>
                  </div>
                </Button>

                {isExpanded && (
                  <div className="space-y-1 ml-2 pl-3 border-l border-border/50">
                    {categoryServices.map((service) => {
                      const ServiceIcon = service.icon;
                      const isSelected = selectedService?.id === service.id;
                      
                      return (
                        <Button
                          key={service.id}
                          variant="ghost"
                          onClick={() => onServiceSelect(service)}
                          className={`w-full justify-start p-3 h-auto text-left hover:bg-muted/20 transition-all duration-200 group ${
                            isSelected ? 'bg-primary/10 border-l-2 border-l-primary' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"
                              style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}30` }}
                            >
                              <ServiceIcon className="w-4 h-4" style={{ color: service.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">
                                  {service.name}
                                </p>
                                <div className={`w-2 h-2 rounded-full ${getStatusDot(service.status)}`} />
                              </div>
                              <p className="text-xs text-muted-foreground truncate">{service.provider}</p>
                              <div className="flex items-center justify-between mt-1">
                                <span className={`text-xs font-medium ${getStatusColor(service.status)}`}>
                                  {service.status === 'active' ? 'Active' : service.status === 'paused' ? 'Paused' : 'Pending'}
                                </span>
                                {service.status === 'active' && (
                                  <span className="text-xs font-semibold text-foreground">
                                    €{service.monthlyRate}/mo
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Action Buttons - Fixed at bottom */}
      <div className="flex-shrink-0 p-3 border-t border-border bg-gradient-to-r from-muted/10 to-muted/5">
        <div className="p-3 rounded-lg bg-gradient-to-r from-muted/5 to-muted/10 border border-border/30 space-y-2">
          <Button 
            size="sm" 
            onClick={onNavigateToServices}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-[1.02] transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </Button>
          <Button 
            size="sm" 
            onClick={onNavigateToTransactions}
            className="w-full bg-success hover:bg-success/90 text-success-foreground hover:scale-[1.02] transition-all duration-200"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Pay Now
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={onNavigateToSettings}
            className="w-full border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
}