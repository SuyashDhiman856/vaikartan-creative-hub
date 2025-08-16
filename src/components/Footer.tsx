import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" }
    ],
    services: [
      { name: "Brand Identity", path: "/services#brand-identity" },
      { name: "Web Design", path: "/services#web-design" },
      { name: "Mobile Apps", path: "/services#mobile-apps" },
      { name: "Print Design", path: "/services#print-design" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/f7c3fabc-c112-4485-817f-be15568e4656.png"
                  alt="Vaikartan Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Vaikartan</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming ideas into compelling visual stories that connect and inspire. Your creative partner for exceptional design solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>hello@vaikartan.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Creative City, CC 12345</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Stay Updated</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Get design tips and project updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
                />
                <Button variant="accent" size="sm" className="w-full group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Vaikartan. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;