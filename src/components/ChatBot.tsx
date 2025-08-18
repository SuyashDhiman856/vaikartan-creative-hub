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
    services: "We offer comprehensive design services including:\n\n🎨 **Brand Identity Design** - Logo design, brand guidelines, visual identity systems\n📱 **Digital Design** - Website design, mobile app interfaces, user experience design\n🚗 **Automotive Design** - Vehicle campaigns, automotive advertising, promotional materials\n🍔 **Food & Beverage Marketing** - Restaurant branding, food photography, menu design\n🏋️ **Sports & Fitness Branding** - Gym branding, fitness campaigns, athletic wear design\n📄 **Print Design** - Brochures, business cards, packaging design\n💼 **Marketing Materials** - Social media graphics, advertisements, promotional content\n\nEach service is tailored to meet your specific business goals and target audience.",

    pricing: "Our pricing is competitive and transparent:\n\n💰 **Brand Identity Projects**: Starting from $1,500-$5,000\n🌐 **Website Design**: $2,500-$15,000 (depending on complexity)\n📱 **Mobile App Design**: $3,000-$25,000\n🎯 **Marketing Campaigns**: $1,000-$8,000\n🚗 **Automotive Campaigns**: $2,000-$10,000\n🍕 **Food & Beverage Branding**: $1,200-$6,000\n\nPricing varies based on:\n• Project scope and complexity\n• Number of design concepts\n• Timeline requirements\n• Additional services needed\n\nContact us for a personalized quote tailored to your specific requirements!",

    process: "Our proven 5-stage design process ensures exceptional results:\n\n🔍 **1. Discovery Phase**\n• Understanding your business goals\n• Analyzing target audience\n• Researching competitors\n• Defining project scope\n\n📋 **2. Strategy Development**\n• Creating design brief\n• Establishing visual direction\n• Planning project timeline\n• Setting success metrics\n\n🎨 **3. Design Creation**\n• Developing initial concepts\n• Creating visual mockups\n• Refining design elements\n• Preparing presentations\n\n✨ **4. Refinement & Feedback**\n• Reviewing your feedback\n• Making strategic adjustments\n• Perfecting final details\n• Ensuring quality standards\n\n🚀 **5. Delivery & Launch**\n• Providing final design files\n• Creating brand guidelines\n• Offering implementation support\n• Providing ongoing maintenance\n\nThis process typically takes 2-12 weeks depending on project complexity.",

    timeline: "Project timelines vary by service type:\n\n⚡ **Quick Projects (1-2 weeks)**:\n• Logo design\n• Business card design\n• Simple marketing materials\n\n🎯 **Standard Projects (2-6 weeks)**:\n• Complete brand identity\n• Website design\n• Marketing campaigns\n• Food & beverage branding\n\n🏗️ **Complex Projects (6-12+ weeks)**:\n• Large-scale web development\n• Mobile app design\n• Complete rebranding\n• Multi-platform campaigns\n\nFactors affecting timeline:\n• Project complexity\n• Number of revisions\n• Client feedback speed\n• Additional requirements\n\nWe provide detailed timelines during consultation and keep you updated throughout the process.",

    portfolio: "Our portfolio showcases 150+ successful projects across diverse industries:\n\n🚗 **Automotive Design**:\n• PREDATOR BMW Campaign\n• FUTURE ON WHEELS Mercedes-Benz\n• RIDE INTO WILD motorcycle series\n• POWER Royal Enfield luxury campaign\n\n🍔 **Food & Beverage**:\n• VEGGIE HULK burger campaign\n• NON VEG premium burger branding\n• Restaurant identity designs\n• Menu and packaging design\n\n🏋️ **Sports & Fitness**:\n• TOUGH fitness campaign\n• Gym branding projects\n• Athletic wear design\n• Sports event materials\n\n📱 **Digital Products**:\n• Smart watch interfaces\n• Mobile app designs\n• Website user experiences\n• E-commerce platforms\n\nYou can explore our complete portfolio in the Portfolio section of our website to see detailed case studies and project outcomes.",

    contact: "Ready to start your project? Here's how to reach us:\n\n📧 **Email**: hello@vaikartan.com\n📞 **Phone**: +1 (555) 123-4567\n🌐 **Website**: www.vaikartan.com\n\n⏰ **Business Hours**:\nMonday - Friday: 9:00 AM - 6:00 PM (EST)\nSaturday: 10:00 AM - 4:00 PM (EST)\nSunday: Closed\n\n⚡ **Response Time**:\n• Email inquiries: 2-4 hours (business hours)\n• Phone calls: Immediate during business hours\n• Project consultations: Within 24 hours\n\n💬 **What to Include in Your Message**:\n• Brief project description\n• Timeline requirements\n• Budget range\n• Any specific requirements\n\nWe offer free 30-minute consultations to discuss your project needs!",

    about: "**About Vaikartan Design Studio** 🎨\n\nWe're a passionate creative design studio founded with a mission to transform businesses through exceptional visual communication.\n\n🏆 **Our Story**:\n• 5+ years of design excellence\n• 150+ successful projects completed\n• Clients from startups to enterprises\n• Award-winning creative solutions\n\n💡 **Our Expertise**:\n• Brand identity and visual systems\n• Digital and web design\n• Automotive and industrial design\n• Food & beverage marketing\n• Sports and fitness branding\n\n🌟 **What Sets Us Apart**:\n• Strategic approach to design\n• Deep understanding of market trends\n• Collaborative client partnerships\n• Results-driven creative solutions\n• Post-launch support and guidance\n\n🎯 **Our Mission**:\nTo help businesses tell their unique stories through compelling, strategic design that drives real results and meaningful connections with their audiences.\n\nWe believe great design isn't just about looking good – it's about solving problems and achieving business goals.",

    team: "Meet our talented design team:\n\n👨‍🎨 **Creative Director**: 8+ years in brand strategy\n👩‍💻 **Lead Designer**: Specialist in digital experiences  \n👨‍🚀 **UI/UX Designer**: Expert in user-centered design\n👩‍🎨 **Brand Strategist**: Masters in visual communication\n\nOur diverse team brings together expertise in psychology, marketing, technology, and visual arts to create designs that truly resonate with your audience.",

    industries: "We serve clients across multiple industries:\n\n🚗 **Automotive**: Vehicle campaigns, dealership branding\n🍕 **Food & Beverage**: Restaurant chains, food tech startups\n🏋️ **Fitness & Sports**: Gyms, athletic brands, wellness centers\n💼 **Business Services**: Consulting firms, financial services\n🏥 **Healthcare**: Medical practices, health tech companies\n🎓 **Education**: Schools, online learning platforms\n🏠 **Real Estate**: Property developers, real estate agencies\n💻 **Technology**: SaaS companies, mobile apps, software\n\nEach industry has unique challenges, and we tailor our approach accordingly.",

    benefits: "Why choose Vaikartan for your design needs?\n\n✅ **Proven Results**: 95% client satisfaction rate\n✅ **Fast Turnaround**: Quick delivery without compromising quality\n✅ **Unlimited Revisions**: We work until you're 100% satisfied\n✅ **Strategic Approach**: Design backed by market research\n✅ **Full-Service**: From concept to final implementation\n✅ **Post-Launch Support**: Ongoing assistance after project completion\n✅ **Competitive Pricing**: Premium quality at affordable rates\n✅ **Expert Team**: Experienced designers and strategists"
  };

  // Enhanced keyword matching function with better NLP
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello! 👋 Welcome to Vaikartan Design Studio! I'm your AI assistant and I'm here to help you with any questions about our services, pricing, process, or company. What would you like to know?";
    }
    
    // Services inquiries
    if (message.includes('service') || message.includes('what do you do') || message.includes('what can you help') || message.includes('offerings') || message.includes('capabilities')) {
      return predefinedResponses.services;
    }
    
    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('expensive') || message.includes('cheap') || message.includes('rate') || message.includes('fee') || message.includes('quote')) {
      return predefinedResponses.pricing;
    }
    
    // Process inquiries
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology') || message.includes('approach') || message.includes('steps') || message.includes('procedure')) {
      return predefinedResponses.process;
    }
    
    // Timeline inquiries
    if (message.includes('time') || message.includes('deadline') || message.includes('duration') || message.includes('how long') || message.includes('quick') || message.includes('fast') || message.includes('schedule')) {
      return predefinedResponses.timeline;
    }
    
    // Portfolio inquiries
    if (message.includes('portfolio') || message.includes('work') || message.includes('example') || message.includes('projects') || message.includes('case study') || message.includes('previous work') || message.includes('samples')) {
      return predefinedResponses.portfolio;
    }
    
    // Contact inquiries
    if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email') || message.includes('call') || message.includes('get in touch') || message.includes('reach out')) {
      return predefinedResponses.contact;
    }
    
    // About company inquiries
    if (message.includes('about') || message.includes('company') || message.includes('who are you') || message.includes('your story') || message.includes('founded') || message.includes('history')) {
      return predefinedResponses.about;
    }
    
    // Team inquiries
    if (message.includes('team') || message.includes('staff') || message.includes('employees') || message.includes('who works') || message.includes('designers')) {
      return predefinedResponses.team;
    }
    
    // Industry inquiries
    if (message.includes('industry') || message.includes('industries') || message.includes('sectors') || message.includes('clients') || message.includes('automotive') || message.includes('food') || message.includes('fitness')) {
      return predefinedResponses.industries;
    }
    
    // Benefits inquiries
    if (message.includes('why choose') || message.includes('benefits') || message.includes('advantages') || message.includes('better') || message.includes('different') || message.includes('unique')) {
      return predefinedResponses.benefits;
    }
    
    // Specific service inquiries
    if (message.includes('logo') || message.includes('brand') || message.includes('identity')) {
      return "🎨 **Brand Identity & Logo Design**\n\nWe create memorable brand identities that tell your story and connect with your audience. Our brand identity services include:\n\n• Logo design and variations\n• Brand color palettes\n• Typography selection\n• Brand guidelines document\n• Business card and letterhead design\n• Social media brand assets\n\nStarting from $1,500, typical timeline is 2-4 weeks. Would you like to know more about our branding process or see some examples?";
    }
    
    if (message.includes('website') || message.includes('web design') || message.includes('web development')) {
      return "🌐 **Website Design & Development**\n\nWe create stunning, responsive websites that drive results. Our web services include:\n\n• Custom website design\n• Responsive mobile optimization\n• User experience (UX) design\n• E-commerce functionality\n• Content management systems\n• SEO optimization\n• Website maintenance\n\nStarting from $2,500, typical timeline is 4-8 weeks. Would you like to discuss your website project or see our web portfolio?";
    }
    
    if (message.includes('mobile') || message.includes('app') || message.includes('mobile app')) {
      return "📱 **Mobile App Design**\n\nWe design intuitive mobile experiences that users love. Our app design services include:\n\n• iOS and Android app design\n• User interface (UI) design\n• User experience (UX) optimization\n• Interactive prototypes\n• App icon design\n• App store graphics\n\nStarting from $3,000, typical timeline is 6-12 weeks. Want to discuss your app idea or see our mobile portfolio?";
    }
    
    // Thank you responses
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're very welcome! 😊 I'm here whenever you need help. Is there anything else you'd like to know about Vaikartan's services or how we can help with your project?";
    }
    
    // Goodbye responses
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('talk later')) {
      return "Goodbye! 👋 Thank you for your interest in Vaikartan Design Studio. Feel free to reach out anytime if you have more questions or are ready to start your project. Have a great day!";
    }
    
    // Default response with helpful suggestions
    return "I'd love to help you learn more about Vaikartan! 🎨 Here are some things you can ask me about:\n\n• **Services** - What design services we offer\n• **Pricing** - Cost estimates for different projects\n• **Process** - How we work with clients\n• **Timeline** - How long projects typically take\n• **Portfolio** - Examples of our work\n• **Contact** - How to get in touch with us\n• **About** - Our company story and team\n\nWhat interests you most? Or feel free to ask me anything specific about your design needs!";
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