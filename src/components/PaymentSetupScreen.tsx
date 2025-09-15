import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Logo } from "./Logo";
import { ArrowLeft, Calendar } from "lucide-react";

interface PaymentSetupScreenProps {
  onBack: () => void;
  onSetupPayment: () => void;
}

export function PaymentSetupScreen({ onBack, onSetupPayment }: PaymentSetupScreenProps) {
  const nextPaymentDate = new Date();
  nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
  nextPaymentDate.setDate(15);

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <Logo />
          <div className="w-9" />
        </div>
        
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-foreground">
              Set up payment
            </h1>
            <p className="text-muted-foreground">
              Choose your preferred payment method for monthly billing
            </p>
          </div>
          
          <Card className="p-6 shadow-lg border-0 bg-card cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-[0.98]" onClick={onSetupPayment}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent/20 rounded-md"></div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Vipps</h3>
                  <p className="text-sm text-muted-foreground">Quick and secure payments</p>
                </div>
              </div>
              <div className="w-6 h-6 bg-accent/10 rounded-full"></div>
            </div>
          </Card>
          
          <Card className="p-4 bg-muted/30 border-0">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Next payment preview</p>
                <p className="text-sm text-muted-foreground">
                  {nextPaymentDate.toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </Card>
          
          <div className="space-y-3">
            <div className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your first payment will be processed after we activate your services. You can change or cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}