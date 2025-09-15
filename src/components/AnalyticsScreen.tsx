import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Zap,
  Tv,
  Phone,
  Target,
} from "lucide-react";

export function AnalyticsScreen() {
  const monthlySpendingData = [
    {
      month: "Jan",
      total: 267,
      utilities: 100,
      entertainment: 117,
      mobile: 50,
      saved: 38,
      potential: 305,
    },
    {
      month: "Feb",
      total: 238,
      utilities: 92,
      entertainment: 96,
      mobile: 50,
      saved: 46,
      potential: 284,
    },
    {
      month: "Mar",
      total: 288,
      utilities: 109,
      entertainment: 129,
      mobile: 50,
      saved: 54,
      potential: 342,
    },
    {
      month: "Apr",
      total: 259,
      utilities: 104,
      entertainment: 105,
      mobile: 50,
      saved: 63,
      potential: 322,
    },
    {
      month: "May",
      total: 230,
      utilities: 88,
      entertainment: 92,
      mobile: 50,
      saved: 71,
      potential: 301,
    },
    {
      month: "Jun",
      total: 246,
      utilities: 96,
      entertainment: 100,
      mobile: 50,
      saved: 79,
      potential: 325,
    },
  ];

  const savingsData = [
    { month: "Jan", potential: 38, actual: 21 },
    { month: "Feb", potential: 43, actual: 29 },
    { month: "Mar", potential: 40, actual: 25 },
    { month: "Apr", potential: 46, actual: 33 },
    { month: "May", potential: 52, actual: 42 },
    { month: "Jun", potential: 48, actual: 38 },
  ];

  const categoryBreakdown = [
    { name: "Utilities", value: 96, color: "#6366F1" },
    { name: "Entertainment", value: 100, color: "#8B5CF6" },
    { name: "Mobile & Internet", value: 50, color: "#06B6D4" },
  ];

  const usageMetrics = [
    {
      category: "Electricity",
      icon: Zap,
      usage: "450 kWh",
      change: -8,
      target: "400 kWh",
      progress: 88,
      cost: "€74.99",
    },
    {
      category: "Streaming",
      icon: Tv,
      usage: "187 hours",
      change: 12,
      target: "150 hours",
      progress: 124,
      cost: "€29.98",
    },
    {
      category: "Data",
      icon: Phone,
      usage: "28.5 GB",
      change: -5,
      target: "25 GB",
      progress: 114,
      cost: "€49.99",
    },
  ];

  const kpiCards = [
    {
      title: "Total Monthly Spending",
      value: "€246",
      change: -16,
      changeText: "vs last month",
      icon: DollarSign,
      trend: "down",
    },
    {
      title: "Total Savings YTD",
      value: "€188",
      change: 28,
      changeText: "vs target",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Active Services",
      value: "4",
      change: 0,
      changeText: "this month",
      icon: Target,
      trend: "neutral",
    },
    {
      title: "Avg. Monthly Savings",
      value: "€31.25",
      change: 15,
      changeText: "vs last quarter",
      icon: Calendar,
      trend: "up",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex flex-col items-center justify-between mb-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-foreground mb-3">
                Analytics
              </h1>
              <p className="text-lg text-muted-foreground">
                Detailed insights into your spending and usage
                patterns.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Select>
                <SelectTrigger className="w-48 bg-input-background border-border">
                  <SelectValue placeholder="Last 6 months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3m">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="6m">
                    Last 6 months
                  </SelectItem>
                  <SelectItem value="12m">
                    Last 12 months
                  </SelectItem>
                  <SelectItem value="ytd">
                    Year to date
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            const TrendIcon =
              kpi.trend === "up"
                ? TrendingUp
                : kpi.trend === "down"
                  ? TrendingDown
                  : Calendar;
            return (
              <Card
                key={index}
                className="p-6 steam-card group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div
                      className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
                        kpi.trend === "up"
                          ? "bg-success/10 text-success"
                          : kpi.trend === "down"
                            ? "bg-success/10 text-success"
                            : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      <TrendIcon className="w-3 h-3" />
                      <span className="text-xs font-medium">
                        {kpi.change > 0 ? "+" : ""}
                        {kpi.change}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {kpi.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {kpi.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {kpi.changeText}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Monthly Spending Trend */}
          <Card className="lg:col-span-2 p-6 steam-card">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Monthly Spending Trends
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Breakdown by category over time
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-0 px-3 py-1"
                >
                  Last 6 months
                </Badge>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlySpendingData}>
                    <defs>
                      <linearGradient
                        id="utilitiesGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#6366F1"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#6366F1"
                          stopOpacity={0.2}
                        />
                      </linearGradient>
                      <linearGradient
                        id="entertainmentGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.2}
                        />
                      </linearGradient>
                      <linearGradient
                        id="mobileGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#06B6D4"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#06B6D4"
                          stopOpacity={0.2}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#334155"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94A3B8", fontSize: 13 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94A3B8", fontSize: 13 }}
                      tickFormatter={(value) => `€${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #475569",
                        borderRadius: "12px",
                        color: "#F8FAFC",
                        boxShadow:
                          "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="utilities"
                      stackId="1"
                      stroke="#6366F1"
                      fill="url(#utilitiesGrad)"
                      name="Utilities"
                    />
                    <Area
                      type="monotone"
                      dataKey="entertainment"
                      stackId="1"
                      stroke="#8B5CF6"
                      fill="url(#entertainmentGrad)"
                      name="Entertainment"
                    />
                    <Area
                      type="monotone"
                      dataKey="mobile"
                      stackId="1"
                      stroke="#06B6D4"
                      fill="url(#mobileGrad)"
                      name="Mobile & Internet"
                    />
                    <Area
                      type="monotone"
                      dataKey="saved"
                      stackId="2"
                      stroke="#10B981"
                      fill="rgba(16, 185, 129, 0.4)"
                      name="Monthly Savings"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Category Distribution */}
          <Card className="p-6 steam-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Distribution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Current month breakdown
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-48 w-48">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <PieChart>
                      <Pie
                        data={categoryBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="#1E293B"
                        strokeWidth={2}
                      >
                        {categoryBreakdown.map(
                          (entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.color}
                            />
                          ),
                        )}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #475569",
                          borderRadius: "12px",
                          color: "#F8FAFC",
                          boxShadow:
                            "0 10px 30px rgba(0,0,0,0.3)",
                        }}
                        formatter={(value, name) => [
                          `${value}`,
                          name,
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="space-y-3">
                {categoryBreakdown.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full shadow-sm"
                        style={{
                          backgroundColor: category.color,
                        }}
                      />
                      <span className="text-sm font-medium text-foreground">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      €{category.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Savings Analysis */}
        <Card className="p-6 steam-card mb-8 hover:shadow-none">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Savings Performance
              </h3>
              <p className="text-sm text-muted-foreground">
                Tracking your optimization potential vs actual
                results
              </p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={savingsData} barGap={10}>
                  <defs>
                    <linearGradient
                      id="potentialGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#6366F1"
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="95%"
                        stopColor="#6366F1"
                        stopOpacity={0.6}
                      />
                    </linearGradient>
                    <linearGradient
                      id="actualGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#10B981"
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="95%"
                        stopColor="#10B981"
                        stopOpacity={0.6}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#334155"
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 13 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 13 }}
                    tickFormatter={(value) => `€${value}`}
                  />
                  <Tooltip
                    cursor={false}
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #475569",
                      borderRadius: "12px",
                      color: "#F8FAFC",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    }}
                    formatter={(value, name) => [
                      `€${value}`,
                      name,
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="potential"
                    fill="url(#potentialGrad)"
                    name="Potential Savings"
                    radius={[6, 6, 0, 0]}
                  />
                  <Bar
                    dataKey="actual"
                    fill="url(#actualGrad)"
                    name="Actual Savings"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Usage Metrics */}
        <Card className="p-6 steam-card">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Usage Insights
              </h3>
              <p className="text-sm text-muted-foreground">
                Monitor consumption patterns and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {usageMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const colors = [
                  "#6366F1",
                  "#8B5CF6",
                  "#06B6D4",
                ];
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-br from-muted/10 to-muted/5 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                            style={{
                              backgroundColor: `${color}20`,
                              border: `1px solid ${color}30`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color }}
                            />
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">
                              {metric.category}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {metric.cost}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
                            metric.change > 0
                              ? "bg-warning/10 text-warning"
                              : "bg-success/10 text-success"
                          }`}
                        >
                          {metric.change > 0 ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          <span className="text-xs font-medium">
                            {Math.abs(metric.change)}%
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Current Usage
                          </span>
                          <span className="text-sm font-bold text-foreground">
                            {metric.usage}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Target: {metric.target}
                            </span>
                            <span className="text-muted-foreground">
                              {metric.progress}%
                            </span>
                          </div>
                          <div className="relative">
                            <Progress
                              value={Math.min(
                                metric.progress,
                                100,
                              )}
                              className="h-3"
                            />
                            <div
                              className="absolute top-0 h-3 rounded-full shadow-sm transition-all duration-500"
                              style={{
                                width: `${Math.min(metric.progress, 100)}%`,
                                backgroundColor: color,
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        </div>
                      </div>
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