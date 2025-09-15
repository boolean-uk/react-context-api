import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Logo } from "./Logo";
import { ArrowLeft } from "lucide-react";

interface SignInScreenProps {
  onBack: () => void;
  onSignIn: () => void;
}

export function SignInScreen({ onBack, onSignIn }: SignInScreenProps) {
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
              Sign in to your account
            </h1>
            <p className="text-muted-foreground">
              Use BankID to securely access your Lumo account
            </p>
          </div>
          
          <Card className="p-6 shadow-lg border-0 bg-card cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-[0.98]" onClick={onSignIn}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary/20 rounded-md"></div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">BankID</h3>
                  <p className="text-sm text-muted-foreground">Secure authentication</p>
                </div>
              </div>
              <div className="w-6 h-6 bg-primary/10 rounded-full"></div>
            </div>
          </Card>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your privacy is protected. We only access the information needed to manage your services and billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}