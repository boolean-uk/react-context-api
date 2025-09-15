import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, Filter, Download, CheckCircle, Clock, XCircle } from "lucide-react";

export function TransactionsScreen() {
  const transactions = [
    {
      id: "TXN-001",
      date: "2024-03-15",
      description: "Monthly Bill - March 2024",
      amount: -287.50,
      status: "completed",
      category: "bill",
      services: ["Utilities", "Entertainment", "Mobile"]
    },
    {
      id: "TXN-002", 
      date: "2024-02-15",
      description: "Monthly Bill - February 2024",
      amount: -267.00,
      status: "completed",
      category: "bill",
      services: ["Utilities", "Entertainment", "Mobile"]
    },
    {
      id: "TXN-003",
      date: "2024-02-10",
      description: "Refund - Overpayment",
      amount: 20.83,
      status: "completed",
      category: "refund",
      services: ["Utilities"]
    },
    {
      id: "TXN-004",
      date: "2024-01-15",
      description: "Monthly Bill - January 2024",
      amount: -317.00,
      status: "completed",
      category: "bill",
      services: ["Utilities", "Entertainment", "Mobile"]
    },
    {
      id: "TXN-005",
      date: "2024-01-12",
      description: "Late Payment Fee",
      amount: -12.50,
      status: "completed",
      category: "fee",
      services: []
    },
    {
      id: "TXN-006",
      date: "2023-12-15",
      description: "Monthly Bill - December 2023",
      amount: -246.25,
      status: "completed",
      category: "bill",
      services: ["Utilities", "Entertainment", "Mobile"]
    },
    {
      id: "TXN-007",
      date: "2023-12-01",
      description: "Setup Fee Refund",
      amount: 41.67,
      status: "completed",
      category: "refund",
      services: []
    },
    {
      id: "TXN-008",
      date: "2023-11-15",
      description: "Monthly Bill - November 2023",
      amount: -258.75,
      status: "completed",
      category: "bill",
      services: ["Utilities", "Entertainment", "Mobile"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "pending":
        return <Clock className="w-4 h-4 text-warning" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "failed":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "bill":
        return "bg-primary/10 text-primary";
      case "refund":
        return "bg-success/10 text-success";
      case "fee":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex flex-col items-center justify-between mb-4 lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-foreground mb-3">Transactions</h1>
              <p className="text-lg text-muted-foreground">View and manage your payment history.</p>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </Button>
          </div>

          {/* Filters */}
          <Card className="p-4 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search transactions..." 
                    className="pl-10 bg-input-background border-border"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-input-background border-border">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="bill">Bills</SelectItem>
                  <SelectItem value="refund">Refunds</SelectItem>
                  <SelectItem value="fee">Fees</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-input-background border-border">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-4 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Spent This Year</p>
              <p className="text-2xl font-semibold text-foreground">€3,203</p>
              <p className="text-xs text-muted-foreground">8 transactions</p>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Average Monthly</p>
              <p className="text-2xl font-semibold text-foreground">€267</p>
              <p className="text-xs text-success">12% less than last year</p>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Refunds</p>
              <p className="text-2xl font-semibold text-success">€62</p>
              <p className="text-xs text-muted-foreground">2 refunds</p>
            </div>
          </Card>
        </div>

        {/* Transactions List */}
        <Card className="bg-card border-border">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <h4 className="font-medium text-foreground">{transaction.description}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs px-2 py-0.5 border-0 ${getCategoryColor(transaction.category)}`}
                          >
                            {transaction.category}
                          </Badge>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs px-2 py-0.5 border-0 ${getStatusColor(transaction.status)}`}
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                        {transaction.services.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {transaction.services.join(" • ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
                      transaction.amount > 0 ? 'text-success' : 'text-foreground'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}€{Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">ID: {transaction.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}