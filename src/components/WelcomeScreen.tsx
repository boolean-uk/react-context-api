import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Logo } from "./Logo";

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export function WelcomeScreen({ onGetStarted, onLearnMore }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-background px-6 py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <Logo className="justify-center" />
        </div>
        
        <Card className="p-8 shadow-lg border-0 bg-card">
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-foreground">
                Sign and forget
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                One predictable monthly bill that keeps you on the best offer
              </p>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button 
                onClick={onGetStarted}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium transition-all duration-200 hover:scale-[0.98]"
              >
                Get started
              </Button>
              <Button 
                variant="outline" 
                onClick={onLearnMore}
                className="w-full h-12 border-2 rounded-2xl font-medium transition-all duration-200 hover:scale-[0.98]"
              >
                Learn more
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            We find the current best qualified offer and keep you on it
          </p>
          <p className="text-sm text-muted-foreground">
            You pay Lumo once a month. We handle the rest
          </p>
        </div>
      </div>
    </div>
  );
}