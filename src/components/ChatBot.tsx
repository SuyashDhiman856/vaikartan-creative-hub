import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Vaikartan's AI assistant. I can help you learn about our design services, process, and answer questions about our company. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses: Record<string, string> = {
    services: "We offer comprehensive design services including Brand Identity Design, Web Design, Mobile App Design, Print Design, Digital Marketing materials, and Design Consultation. Each service is tailored to meet your specific needs and goals.",
    
    pricing: "Our pricing varies based on project scope and complexity. Brand identity projects start from $1,500, web design from $2,500, and mobile app design from $3,000. Contact us for a detailed quote tailored to your specific requirements.",
    
    process: "Our design process consists of 5 key stages: 1) Discovery - Understanding your goals and vision, 2) Strategy - Developing a comprehensive design approach, 3) Design - Creating compelling visual solutions, 4) Refinement - Iterating based on your feedback, 5) Delivery - Providing final files and ongoing support.",
    
    timeline: "Project timelines depend on complexity and scope. Brand identity projects typically take 2-4 weeks, web design projects 4-8 weeks, and mobile apps 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    
    portfolio: "We've completed over 150 projects across various industries. Our portfolio showcases brand identities, websites, mobile apps, and marketing materials. You can view our work in the Portfolio section of our website.",
    
    contact: "You can reach us at hello@vaikartan.com or call +1 (555) 123-4567. We're available Monday-Friday, 9 AM - 6 PM. We typically respond to all inquiries within 2-4 hours during business hours.",
    
    about: "Vaikartan is a creative design studio founded with a passion for exceptional visual communication. We've been helping businesses tell their stories through compelling design for over 5 years, working with clients from startups to established enterprises."
  };

  // Simple keyword matching function
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return predefinedResponses.services;
    }
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return predefinedResponses.pricing;
    }
    if (message.includes('process') || message.includes('how do you work')) {
      return predefinedResponses.process;
    }
    if (message.includes('time') || message.includes('deadline') || message.includes('duration')) {
      return predefinedResponses.timeline;
    }
    if (message.includes('portfolio') || message.includes('work') || message.includes('example')) {
      return predefinedResponses.portfolio;
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email')) {
      return predefinedResponses.contact;
    }
    if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
      return predefinedResponses.about;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Vaikartan's design services. You can ask me about our services, pricing, process, timeline, or anything else you'd like to know!";
    }
    
    return "I'd be happy to help you with information about Vaikartan's services, pricing, process, timeline, or our company. You can also ask me about our portfolio or how to get in touch. What would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    console.log("Sending message:", inputMessage);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      console.log("Bot responding to:", currentMessage);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(currentMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-strong transition-all duration-300 ${
          isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-accent hover:bg-accent/90'
        }`}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[500px] shadow-strong border-0 bg-card">
          <CardHeader className="pb-3 bg-accent text-accent-foreground rounded-t-lg">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Bot className="h-5 w-5" />
              <span>Vaikartan Assistant</span>
            </CardTitle>
            <p className="text-sm opacity-90">Ask me about our services!</p>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(100%-120px)]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our services..."
                  className="flex-1 border-border focus:border-accent"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  variant="accent"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;