import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@vaikartan.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Design Street, Creative City, CC 12345",
      description: "Our design studio"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend consultations available"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8 text-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to bring your vision to life? Let's start a conversation about your next design project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto bg-white component-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center component-border shadow-soft hover-lift bg-white">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="component-border shadow-soft bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Response</h3>
                  <p className="text-muted-foreground mb-6">
                    Need a faster response? Contact us directly through these channels.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="accent" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat with AI Assistant
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Types */}
              <Card className="component-border shadow-soft bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What We Can Help With</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Brand Identity & Logo Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Website & App Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Print & Marketing Materials</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-smfixes/chat_ui/ContactComponent.tsx">Design Consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Creative Direction</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="component-border shadow-soft bg-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fast Response</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto bg-white component-border p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="component-border shadow-soft bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-muted-foreground">
                  Project timelines vary depending on scope and complexity. Brand identity projects typically take 2-4 weeks, while web design projects can take 4-8 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="component-border shadow-soft bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you work with small businesses?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We work with businesses of all sizes, from startups to established enterprises. We offer scalable solutions to fit different budgets and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="component-border shadow-soft bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What's included in your design packages?
                </h3>
                <p className="text-muted-foreground">
                  Our packages include initial consultation, design concepts, revisions, final files, and comprehensive guidelines. Specific deliverables vary by service type.
                </p>
              </CardContent>
            </Card>

            <Card className="component-border shadow-soft bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you offer ongoing support?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide ongoing support and maintenance for all our projects. We're here to help you implement and evolve your design as your business grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;