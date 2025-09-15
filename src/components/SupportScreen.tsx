import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Search, MessageCircle, Phone, Mail, Book, HelpCircle, Clock, CheckCircle } from "lucide-react";

export function SupportScreen() {
  const faqCategories = [
    {
      id: "billing",
      title: "Billing & Payments",
      questions: [
        {
          question: "When is my monthly bill due?",
          answer: "Your monthly bill is due on the 15th of each month. You'll receive a reminder 3 days before the due date."
        },
        {
          question: "How can I change my payment method?",
          answer: "You can update your payment method in Settings > Billing > Payment Methods. We accept all major credit cards and bank transfers."
        },
        {
          question: "What happens if my payment fails?",
          answer: "If a payment fails, we'll retry automatically after 24 hours. You'll receive notifications and have 5 days to resolve the issue before any service interruption."
        },
        {
          question: "Can I get a refund?",
          answer: "Refunds are processed automatically when you cancel services or if you've been overcharged. Contact support for specific refund requests."
        }
      ]
    },
    {
      id: "services",
      title: "Services & Subscriptions", 
      questions: [
        {
          question: "How do I add a new service?",
          answer: "Go to Services > Discover Services and browse available options. Click 'Add to Plan' on any service you'd like to include in your bundle."
        },
        {
          question: "Can I cancel a service anytime?",
          answer: "Yes, you can cancel any service with 30 days notice. The service will remain active until the end of your current billing cycle."
        },
        {
          question: "How does Lumo find better deals?",
          answer: "Our AI continuously monitors the market for better rates and service quality. When we find savings opportunities, we'll notify you and handle the switch process."
        },
        {
          question: "What if I'm not satisfied with a service?",
          answer: "We offer a 30-day satisfaction guarantee. If you're not happy with a service, we'll help you find an alternative or provide a prorated refund."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Settings",
      questions: [
        {
          question: "How do I update my personal information?",
          answer: "Go to Settings > Account > Profile Information to update your name, email, address, and other personal details."
        },
        {
          question: "How secure is my data?",
          answer: "We use bank-level encryption and never store sensitive payment information. Your data is protected by Norwegian privacy laws and GDPR compliance."
        },
        {
          question: "Can I share my account with family?",
          answer: "Your Lumo account is designed for one household. Family members can be added as additional users with their own login credentials."
        },
        {
          question: "How do I delete my account?",
          answer: "Account deletion can be requested in Settings > Account Actions. All services will be cancelled and data will be permanently removed within 30 days."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      type: "chat",
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      icon: MessageCircle,
      status: "online"
    },
    {
      type: "phone", 
      title: "Phone Support",
      description: "Call us for immediate assistance",
      availability: "Mon-Fri 8AM-6PM",
      icon: Phone,
      status: "available"
    },
    {
      type: "email",
      title: "Email Support", 
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      icon: Mail,
      status: "available"
    }
  ];

  const supportTickets = [
    {
      id: "SUP-001",
      subject: "Question about electricity bill calculation",
      status: "open",
      priority: "medium",
      created: "2024-03-10",
      lastUpdate: "2024-03-12",
      messages: 3
    },
    {
      id: "SUP-002", 
      subject: "Request to cancel Netflix subscription",
      status: "resolved",
      priority: "low",
      created: "2024-03-08",
      lastUpdate: "2024-03-09",
      messages: 2
    },
    {
      id: "SUP-003",
      subject: "Payment method update needed",
      status: "pending",
      priority: "high", 
      created: "2024-03-12",
      lastUpdate: "2024-03-12",
      messages: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-primary/10 text-primary";
      case "resolved":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "closed":
        return "bg-muted/10 text-muted-foreground";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning/10 text-warning";
      case "low":
        return "bg-success/10 text-success";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-3">Support & Help</h1>
          <p className="text-lg text-muted-foreground">Get help, find answers, and contact our support team.</p>
        </div>

        <Tabs defaultValue="help" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-muted">
            <TabsTrigger value="help">Help Center</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          </TabsList>

          {/* Help Center */}
          <TabsContent value="help" className="space-y-8">
            {/* Search */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Search Help Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for help articles, guides, and FAQs..." 
                    className="pl-10 bg-input-background border-border"
                  />
                </div>
              </div>
            </Card>

            {/* Quick Help Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Book className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Getting Started</h3>
                  <p className="text-sm text-muted-foreground">Learn how to set up your account and add your first services.</p>
                  <Button variant="outline" size="sm">Read Guide</Button>
                </div>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Common Issues</h3>
                  <p className="text-sm text-muted-foreground">Find solutions to the most frequently reported problems.</p>
                  <Button variant="outline" size="sm">View Solutions</Button>
                </div>
              </Card>
              
              <Card className="p-6 bg-card border-border">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Service Status</h3>
                  <p className="text-sm text-muted-foreground">Check the current status of all Lumo services and integrations.</p>
                  <Button variant="outline" size="sm">Check Status</Button>
                </div>
              </Card>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h3>
              {faqCategories.map((category) => (
                <Card key={category.id} className="p-6 bg-card border-border">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${category.id}-${index}`} 
                          className="border border-border rounded-lg px-4 bg-card/50 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5 transition-all duration-200"
                        >
                          <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline hover:text-primary transition-colors py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground pb-4 border-t border-border/30 pt-4 mt-2 opacity-100">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Support */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.type} className="p-6 bg-card border-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs px-2 py-0.5 border-0 ${
                            method.status === 'online' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {method.status}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{method.availability}</p>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        {method.type === 'chat' ? 'Start Chat' :
                         method.type === 'phone' ? 'Call Now' : 'Send Email'}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Send us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="Brief description of your issue" className="bg-input-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Priority</label>
                    <select className="w-full p-2 bg-input-background border border-border rounded-lg text-foreground">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Please describe your issue in detail..." 
                    className="min-h-32 bg-input-background border-border"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Support Tickets */}
          <TabsContent value="tickets" className="space-y-8">
            <Card className="p-6 bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Support Tickets</h3>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    New Ticket
                  </Button>
                </div>

                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div 
                      key={ticket.id}
                      className="p-4 rounded-lg border border-border hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-medium text-foreground">{ticket.subject}</h4>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs px-2 py-0.5 border-0 ${getStatusColor(ticket.status)}`}
                            >
                              {ticket.status}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs px-2 py-0.5 border-0 ${getPriorityColor(ticket.priority)}`}
                            >
                              {ticket.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>ID: {ticket.id}</span>
                            <span>Created: {ticket.created}</span>
                            <span>Updated: {ticket.lastUpdate}</span>
                            <span>{ticket.messages} messages</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}