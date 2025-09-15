import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Settings, 
  Pause, 
  Play, 
  CreditCard, 
  Calendar, 
  TrendingDown,
  ExternalLink,
  Bell,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

interface ServiceDetailPanelProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceDetailPanel({ service, onClose }: ServiceDetailPanelProps) {
  if (!service) {
    return (
      <Card className="flex-1 steam-card p-8 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto">
            <Settings className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Select a Service</h3>
            <p className="text-sm text-muted-foreground">Choose a service from your library to view details and manage settings.</p>
          </div>
        </div>
      </Card>
    );
  }

  const ServiceIcon = service.icon;

  // Service-specific information based on service type
  const getServiceInfo = (serviceId: string) => {
    switch (serviceId) {
      case 'electricity':
        return { 
          type: 'usage', 
          current: 450, 
          unit: 'kWh', 
          trend: -5, 
          info: 'This month usage',
          description: 'Renewable energy from Tibber',
          chartData: [
            { month: 'May', consumption: 380 },
            { month: 'Jun', consumption: 420 },
            { month: 'Jul', consumption: 495 },
            { month: 'Aug', consumption: 465 },
            { month: 'Sep', consumption: 390 },
            { month: 'Oct', consumption: 425 },
            { month: 'Nov', consumption: 450 }
          ]
        };
      case 'mobile':
        return { 
          type: 'usage', 
          current: 8.5, 
          limit: 20, 
          unit: 'GB', 
          trend: +2, 
          info: 'Data usage this month',
          description: '20GB plan with unlimited calls'
        };
      case 'internet':
        return { 
          type: 'plan', 
          speed: 1000, 
          unit: 'Mbps', 
          technology: 'Fiber', 
          info: 'Connection speed',
          description: 'Unlimited fiber broadband'
        };
      case 'netflix':
        return { 
          type: 'plan', 
          planName: 'Premium', 
          features: ['4K Ultra HD', '4 screens', 'Downloads'], 
          info: 'Subscription plan',
          description: 'Premium streaming with 4K'
        };
      case 'spotify':
        return { 
          type: 'plan', 
          planName: 'Family', 
          features: ['6 accounts', 'Ad-free music', 'Offline downloads'], 
          info: 'Family subscription',
          description: 'Music for the whole family'
        };
      case 'hbo':
        return { 
          type: 'plan', 
          planName: 'Standard', 
          features: ['HD streaming', '2 screens', 'All content'], 
          info: 'Subscription plan',
          description: 'Premium movies and series',
          paused: true
        };
      default:
        return null;
    }
  };

  const serviceInfo = getServiceInfo(service.id);

  return (
    <Card className="flex-1 steam-card">
      <div className="p-6 border-b border-border bg-gradient-to-r from-muted/10 to-muted/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: `${service.color}20`, border: `2px solid ${service.color}30` }}
            >
              <ServiceIcon className="w-8 h-8" style={{ color: service.color }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{service.name}</h2>
              <p className="text-muted-foreground">{service.provider}</p>
              <div className="flex items-center space-x-3 mt-2">
                <Badge 
                  variant={service.status === 'active' ? 'default' : 'secondary'}
                  className={`${
                    service.status === 'active' ? 'bg-success text-success-foreground' : 
                    service.status === 'paused' ? 'bg-warning text-warning-foreground' : 
                    'bg-muted text-muted-foreground'
                  }`}
                >
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </Badge>
                <span className="text-lg font-bold text-foreground">
                  €{service.monthlyRate}/month
                </span>
              </div>
            </div>
          </div>
          <Button variant="ghost" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ×
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Information */}
        {serviceInfo && (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>{serviceInfo.info}</span>
            </h3>
            <Card className="p-4 bg-muted/10">
              <div className="space-y-3">
                {serviceInfo.type === 'usage' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Usage</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground">
                          {serviceInfo.current} {serviceInfo.unit}
                        </span>
                        {serviceInfo.trend && (
                          <div className={`flex items-center space-x-1 ${
                            serviceInfo.trend > 0 ? 'text-warning' : 'text-success'
                          }`}>
                            <TrendingDown className={`w-3 h-3 ${serviceInfo.trend > 0 ? 'rotate-180' : ''}`} />
                            <span className="text-xs font-medium">{Math.abs(serviceInfo.trend)}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {serviceInfo.limit && (
                      <>
                        <Progress value={(serviceInfo.current / serviceInfo.limit) * 100} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>0 {serviceInfo.unit}</span>
                          <span>{serviceInfo.limit} {serviceInfo.unit}</span>
                        </div>
                      </>
                    )}
                  </>
                )}
                {serviceInfo.type === 'plan' && (
                  <div className="space-y-3">
                    {serviceInfo.speed && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Speed</span>
                        <span className="font-semibold text-foreground">
                          {serviceInfo.speed} {serviceInfo.unit} {serviceInfo.technology}
                        </span>
                      </div>
                    )}
                    {serviceInfo.planName && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Plan</span>
                        <span className="font-semibold text-foreground">{serviceInfo.planName}</span>
                      </div>
                    )}
                    {serviceInfo.features && (
                      <div>
                        <span className="text-sm text-muted-foreground block mb-2">Features</span>
                        <div className="flex flex-wrap gap-2">
                          {serviceInfo.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Electricity Usage Chart */}
                {serviceInfo.chartData && (
                  <div className="pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground block mb-3">Monthly Consumption Trend</span>
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={serviceInfo.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                          <XAxis 
                            dataKey="month" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11 }}
                          />
                          <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11 }}
                            tickFormatter={(value) => `${value}`}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1E293B', 
                              border: '1px solid #475569',
                              borderRadius: '8px',
                              color: '#F8FAFC',
                              fontSize: '12px'
                            }}
                            formatter={(value) => [`${value} kWh`, 'Consumption']}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="consumption" 
                            stroke="#F59E0B" 
                            strokeWidth={2}
                            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                            activeDot={{ r: 5, stroke: '#F59E0B', strokeWidth: 2, fill: '#F59E0B' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
                
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">{serviceInfo.description}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {service.id === 'electricity' ? (
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 hover:bg-muted/20"
                disabled
              >
                <div className="flex items-center space-x-3">
                  <Pause className="w-5 h-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium text-muted-foreground">Pause Service</p>
                    <p className="text-xs text-muted-foreground">Not available</p>
                  </div>
                </div>
              </Button>
            ) : service.status === 'paused' ? (
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 hover:bg-muted/20"
              >
                <div className="flex items-center space-x-3">
                  <Play className="w-5 h-5 text-success" />
                  <div className="text-left">
                    <p className="font-medium">Reactivate</p>
                    <p className="text-xs text-muted-foreground">Resume service</p>
                  </div>
                </div>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 hover:bg-muted/20"
                disabled={service.status !== 'active'}
              >
                <div className="flex items-center space-x-3">
                  <Pause className="w-5 h-5 text-warning" />
                  <div className="text-left">
                    <p className="font-medium">Pause Service</p>
                    <p className="text-xs text-muted-foreground">Temporary hold</p>
                  </div>
                </div>
              </Button>
            )}
            
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4 hover:bg-muted/20"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Settings</p>
                  <p className="text-xs text-muted-foreground">Manage preferences</p>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4 hover:bg-muted/20"
            >
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-success" />
                <div className="text-left">
                  <p className="font-medium">Billing</p>
                  <p className="text-xs text-muted-foreground">Payment details</p>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4 hover:bg-muted/20"
            >
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="font-medium">Alerts</p>
                  <p className="text-xs text-muted-foreground">Notifications</p>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Recent Activity</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Payment processed</p>
                  <p className="text-xs text-muted-foreground">Monthly billing completed</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Service optimized</p>
                  <p className="text-xs text-muted-foreground">Better rate applied automatically</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">5 days ago</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Rate change notification</p>
                  <p className="text-xs text-muted-foreground">New pricing available</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">1 week ago</span>
            </div>
          </div>
        </div>

        {/* Provider Link */}
        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full justify-between hover:bg-muted/20">
            <span>Visit {service.provider} Portal</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}