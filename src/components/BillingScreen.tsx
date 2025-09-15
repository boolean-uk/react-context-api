import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Download, CheckCircle } from "lucide-react";

export function BillingScreen() {
  const nextPaymentDate = new Date();
  nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
  nextPaymentDate.setDate(15);

  const paymentHistory = [
    {
      date: "15 Feb 2024",
      amount: "kr 1,950",
      status: "paid",
      services: ["Electricity", "Streaming", "Mobile"]
    },
    {
      date: "15 Jan 2024",
      amount: "kr 2,100",
      status: "paid",
      services: ["Electricity", "Streaming", "Mobile"]
    },
    {
      date: "15 Dec 2023",
      amount: "kr 2,280",
      status: "paid",
      services: ["Electricity", "Streaming", "Mobile"]
    },
    {
      date: "15 Nov 2023",
      amount: "kr 2,150",
      status: "paid",
      services: ["Electricity", "Streaming", "Mobile"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border/50">
        <h1 className="text-xl font-semibold text-foreground">Billing</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Next Payment Card */}
        <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Next payment</h2>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-semibold text-foreground">kr 2,050</div>
              <p className="text-sm text-muted-foreground">
                Due {nextPaymentDate.toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-muted-foreground">Payment method: Vipps</p>
              <Button variant="outline" size="sm" className="rounded-xl">
                Update
              </Button>
            </div>
          </div>
        </Card>

        {/* Payment History */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Payment history</h3>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
          
          <div className="space-y-3">
            {paymentHistory.map((payment, index) => (
              <Card key={index} className="p-4 shadow-sm border-0 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-foreground">{payment.amount}</p>
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-success/10 text-success border-0 capitalize">
                          {payment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                      <p className="text-xs text-muted-foreground">
                        {payment.services.join(" • ")}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <Card className="p-4 bg-muted/30 border-0">
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">This year so far</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-semibold text-foreground">kr 8,480</p>
                <p className="text-sm text-muted-foreground">Total paid</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-success">kr 1,420</p>
                <p className="text-sm text-muted-foreground">Total saved</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom spacing for navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}