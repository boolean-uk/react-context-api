import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DollarSign, Plus, Settings, Download, TrendingUp, Activity, Calendar } from "lucide-react";

const monthlyData = [
  { month: 'Jun', amount: 189, saved: 32, potential: 221 },
  { month: 'Jul', amount: 195, saved: 38, potential: 233 },
  { month: 'Aug', amount: 187, saved: 41, potential: 228 },
  { month: 'Sep', amount: 182, saved: 44, potential: 226 },
  { month: 'Oct', amount: 175, saved: 47, potential: 222 },
  { month: 'Nov', amount: 226, saved: 58, potential: 284 },
];

export function DashboardScreen() {
  const thisMonthBill = 226;
  const utilitiesMobile = 177;  // 82 + 59 + 36 from services
  const entertainment = 27;     // 16 + 11 from Netflix + Spotify  
  const other = 22;            // Insurance
  
  const totalSavings = 58;
  const possibleImprovement = 15;
  
  // Data for the segmented pie chart
  const billBreakdown = [
    { name: 'Utilities & Mobile', value: utilitiesMobile, color: '#6366F1' },
    { name: 'Entertainment', value: entertainment, color: '#8B5CF6' },
    { name: 'Other', value: other, color: '#06B6D4' }
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Welcome Back, Ola 👋
          </h1>
          <p className="text-lg text-muted-foreground">Here's This Month's Summary.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* This Month's Bill */}
          <Card className="p-6 steam-card">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground text-center">This Month's Bill</h3>
              
              {/* Segmented Circular Chart */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={billBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={3}
                        dataKey="value"
                        stroke="#1E293B"
                        strokeWidth={2}
                      >
                        {billBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1E293B', 
                          border: '1px solid #334155',
                          borderRadius: '8px',
                          color: '#F8FAFC'
                        }}
                        formatter={(value, name) => [`€${value}`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">€{thisMonthBill}</div>
                      <div className="text-sm text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bill Breakdown */}
              <div className="space-y-3">
                {billBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">€{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Pay Now
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Bill
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Bill Summary */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">Due Date</span>
                    <span className="text-xs font-bold text-foreground">Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">Last Month</span>
                    <span className="text-xs text-muted-foreground">€175</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Change</span>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-warning/10 text-warning border-0">
                      +€51
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-foreground">Auto-Pay</span>
                    </div>
                    <Badge className="text-xs px-2 py-0.5 bg-success/10 text-success border-0">
                      Active
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Scheduled for December 15th
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Savings & Actions Combined */}
          <Card className="p-6 steam-card">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground text-center">Savings & Actions</h3>
              
              {/* Savings Section */}
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <span className="text-2xl font-bold text-success">€{totalSavings}</span>
                    <Badge variant="secondary" className="bg-success/10 text-success border-0">
                      20.4%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Total Amount Saved This Month</p>
                  <Button variant="outline" size="sm" className="border-success/20 hover:bg-success/10">
                    See Details
                  </Button>
                </div>

                {/* Optimization Summary */}
                <div className="bg-gradient-to-r from-muted/10 to-muted/5 rounded-lg p-4 border border-border/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-primary">5</p>
                      <p className="text-xs text-muted-foreground">Services</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-accent">3</p>
                      <p className="text-xs text-muted-foreground">Optimized</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-warning">€{possibleImprovement}</p>
                      <p className="text-xs text-muted-foreground">Potential</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-base font-medium text-foreground">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground justify-start text-sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Pay Bill
                  </Button>
                  <Button variant="outline" className="justify-start text-sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                  <Button variant="outline" className="justify-start text-sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Plan
                  </Button>
                  <Button variant="outline" className="justify-start text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Next Payment Info */}
              <div className="pt-4 border-t border-border">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-foreground">Next Payment</h4>
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-foreground">December 15th</p>
                      <p className="text-xs text-muted-foreground">All services included</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">€{thisMonthBill}</p>
                      <p className="text-xs text-success">-€{totalSavings} saved</p>
                    </div>
                  </div>
                  <div className="w-full bg-border rounded-full h-1">
                    <div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full w-2/3"></div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">20 days remaining</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Monthly Expenses Chart */}
        <Card className="p-6 steam-card">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Monthly Expenses</h3>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="px-3 py-1 text-xs">W</Button>
                <Button size="sm" className="px-3 py-1 text-xs bg-primary text-primary-foreground">M</Button>
                <Button variant="ghost" size="sm" className="px-3 py-1 text-xs">Y</Button>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <defs>
                    <linearGradient id="potentialArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 13 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 13 }}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E293B', 
                      border: '1px solid #475569',
                      borderRadius: '12px',
                      color: '#F8FAFC',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    formatter={(value, name) => [
                      `${value}`, 
                      name === 'amount' ? 'Actual Expense' : 
                      name === 'saved' ? 'Monthly Savings' : 'Potential Cost'
                    ]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="potential" 
                    stroke="#F59E0B"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                    name="potential"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#6366F1" 
                    strokeWidth={3}
                    dot={{ fill: '#6366F1', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#6366F1', strokeWidth: 2, fill: '#6366F1' }}
                    name="amount"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="saved" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2, fill: '#10B981' }}
                    name="saved"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Chart Legend */}
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Actual Expenses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-muted-foreground">Monthly Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-warning"></div>
                <span className="text-muted-foreground">Without Lumo</span>
              </div>
            </div>

            {/* Current Month Highlight */}
            <div className="flex items-center justify-center">
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">This month</p>
                  <p className="text-xl font-semibold text-foreground">€{monthlyData[monthlyData.length - 1].amount}</p>
                  <p className="text-xs text-muted-foreground">November</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}