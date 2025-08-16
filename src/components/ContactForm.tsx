import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-soft bg-card-gradient">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
          <p className="text-muted-foreground">
            Your message has been sent successfully. We'll be in touch soon!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-soft bg-card-gradient">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                className="border-border focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                className="border-border focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company Name"
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select name="service">
              <SelectTrigger className="border-border focus:border-accent">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand-identity">Brand Identity Design</SelectItem>
                <SelectItem value="web-design">Web Design</SelectItem>
                <SelectItem value="mobile-app">Mobile App Design</SelectItem>
                <SelectItem value="print-design">Print Design</SelectItem>
                <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                <SelectItem value="consultation">Design Consultation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Project Budget</Label>
            <Select name="budget">
              <SelectTrigger className="border-border focus:border-accent">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1000">Under $1,000</SelectItem>
                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                <SelectItem value="over-25000">Over $25,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select name="timeline">
              <SelectTrigger className="border-border focus:border-accent">
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="2-3-months">2-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={6}
              className="border-border focus:border-accent resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            disabled={isSubmitting}
            className="w-full group"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;